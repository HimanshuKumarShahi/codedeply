import { readFile } from "node:fs/promises";
import { join } from "node:path";

export type ProjectFramework =
  | "nextjs"
  | "vite"
  | "node"
  | "unknown";

export type PackageManager =
  | "npm"
  | "pnpm"
  | "yarn"
  | "bun";

export type ProjectConfig = {
  framework: ProjectFramework;
  packageManager: PackageManager;
  buildCommand: string;
  startCommand: string | null;
  port: number;
};

type PackageJson = {
  name?: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

async function readPackageJson(
  projectRoot: string,
): Promise<PackageJson> {
  const packageJsonPath = join(
    projectRoot,
    "package.json",
  );

  const content = await readFile(
    packageJsonPath,
    "utf8",
  );

  return JSON.parse(content) as PackageJson;
}

async function detectPackageManager(
  projectRoot: string,
): Promise<PackageManager> {
  const files = await Promise.all([
    fileExists(join(projectRoot, "pnpm-lock.yaml")),
    fileExists(join(projectRoot, "yarn.lock")),
    fileExists(join(projectRoot, "bun.lock")),
    fileExists(join(projectRoot, "bun.lockb")),
    fileExists(join(projectRoot, "package-lock.json")),
  ]);

  if (files[0]) {
    return "pnpm";
  }

  if (files[1]) {
    return "yarn";
  }

  if (files[2] || files[3]) {
    return "bun";
  }

  return "npm";
}

async function fileExists(
  path: string,
): Promise<boolean> {
  try {
    await readFile(path);
    return true;
  } catch {
    return false;
  }
}

function hasDependency(
  packageJson: PackageJson,
  dependency: string,
): boolean {
  return Boolean(
    packageJson.dependencies?.[dependency] ||
      packageJson.devDependencies?.[dependency],
  );
}

function detectFramework(
  packageJson: PackageJson,
): ProjectFramework {
  if (hasDependency(packageJson, "next")) {
    return "nextjs";
  }

  if (hasDependency(packageJson, "vite")) {
    return "vite";
  }

  if (
    packageJson.scripts?.start ||
    packageJson.scripts?.build
  ) {
    return "node";
  }

  return "unknown";
}

function getRunCommand(
  packageManager: PackageManager,
  script: string,
): string {
  switch (packageManager) {
    case "npm":
      return `npm run ${script}`;

    case "pnpm":
      return `pnpm ${script}`;

    case "yarn":
      return `yarn ${script}`;

    case "bun":
      return `bun run ${script}`;
  }
}

export async function detectProjectConfig(
  projectRoot: string,
): Promise<ProjectConfig> {
  const packageJson = await readPackageJson(
    projectRoot,
  );

  const packageManager =
    await detectPackageManager(projectRoot);

  const framework =
    detectFramework(packageJson);

  const scripts = packageJson.scripts ?? {};

  if (!scripts.build) {
    throw new Error(
      "No build script found in package.json.",
    );
  }

  switch (framework) {
    case "nextjs":
      return {
        framework,
        packageManager,
        buildCommand: getRunCommand(
          packageManager,
          "build",
        ),
        startCommand: scripts.start
          ? getRunCommand(
              packageManager,
              "start",
            )
          : null,
        port: 3000,
      };

    case "vite":
      return {
        framework,
        packageManager,
        buildCommand: getRunCommand(
          packageManager,
          "build",
        ),
        startCommand: null,
        port: 4173,
      };

    case "node":
      return {
        framework,
        packageManager,
        buildCommand: getRunCommand(
          packageManager,
          "build",
        ),
        startCommand: scripts.start
          ? getRunCommand(
              packageManager,
              "start",
            )
          : null,
        port: 3000,
      };

    default:
      throw new Error(
        "Unsupported project framework.",
      );
  }
}