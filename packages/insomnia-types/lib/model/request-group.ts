import type { BaseModel } from "./base";
import type { RequestAuthentication, RequestHeader } from "./request";

interface BaseRequestGroup {
  name: string;
  description: string;
  environment: Record<string, unknown>;
  environmentPropertyOrder: Record<string, unknown> | null;
  metaSortKey: number;
  preRequestScript?: string;
  afterResponseScript?: string;
  authentication?: RequestAuthentication;
  headers?: RequestHeader[];
}

export type RequestGroup = BaseModel & BaseRequestGroup;
