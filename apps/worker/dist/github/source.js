import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { x } from "tar";
const WORKSPACE_ROOT = "C:\\Users\\himan\\VS Code\\codedeply-workspaces";
export async function downloadRepositorySource({ owner, repo, commitSha, accessToken, deploymentId, }) {
    const workspacePath = resolve(WORKSPACE_ROOT, deploymentId);
    const archivePath = resolve(WORKSPACE_ROOT, `${deploymentId}.tar.gz`);
    await mkdir(WORKSPACE_ROOT, {
        recursive: true,
    });
    await rm(workspacePath, {
        recursive: true,
        force: true,
    });
    await rm(archivePath, {
        force: true,
    });
    await mkdir(workspacePath, {
        recursive: true,
    });
    const url = `https://api.github.com/repos/${owner}/${repo}/tarball/${commitSha}`;
    console.log(`Downloading source for ${owner}/${repo}@${commitSha}`);
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });
    if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to download GitHub source: ${response.status} ${body}`);
    }
    const archive = Buffer.from(await response.arrayBuffer());
    await writeFile(archivePath, archive);
    console.log("GitHub source downloaded");
    await x({
        file: archivePath,
        cwd: workspacePath,
        strip: 1,
    });
    await rm(archivePath, {
        force: true,
    });
    console.log(`Source extracted to ${workspacePath}`);
    return workspacePath;
}
