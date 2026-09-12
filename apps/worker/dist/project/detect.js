import { access, readdir } from "node:fs/promises";
import { join } from "node:path";
async function fileExists(path) {
    try {
        await access(path);
        return true;
    }
    catch {
        return false;
    }
}
export async function detectProjectRoot(workspacePath) {
    const rootPackageJson = join(workspacePath, "package.json");
    if (await fileExists(rootPackageJson)) {
        return workspacePath;
    }
    const entries = await readdir(workspacePath, {
        withFileTypes: true,
    });
    const candidates = [];
    for (const entry of entries) {
        if (!entry.isDirectory()) {
            continue;
        }
        const directoryPath = join(workspacePath, entry.name);
        const packageJsonPath = join(directoryPath, "package.json");
        if (await fileExists(packageJsonPath)) {
            candidates.push(directoryPath);
        }
    }
    if (candidates.length === 0) {
        throw new Error("No package.json found in the repository root or immediate subdirectories.");
    }
    if (candidates.length > 1) {
        throw new Error(`Multiple project roots found: ${candidates.join(", ")}. Project root selection is not supported yet.`);
    }
    return candidates[0];
}
