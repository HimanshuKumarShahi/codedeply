import type { DeploymentJob } from "@codedeply/types";
export declare function enqueueDeployment(job: DeploymentJob): Promise<void>;
export declare function dequeueDeployment(): Promise<DeploymentJob | undefined>;
export declare function getQueueSize(): Promise<number>;
