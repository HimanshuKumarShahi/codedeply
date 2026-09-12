export type DeploymentJob = {
  deploymentId: string;
  projectId: string;
  repositoryOwner: string;
  repositoryName: string;
  branch: string;
  commitSha: string;
  githubAccessToken: string;
};