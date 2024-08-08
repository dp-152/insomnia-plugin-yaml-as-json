import type { BaseModel } from "./base";

export interface BaseWorkspace {
  name: string;
  description: string;
  /** @deprecated */
  certificates?: unknown;
  scope: "design" | "collection" | "mock-server" | "environment";
}
export type Workspace = BaseModel & BaseWorkspace;
