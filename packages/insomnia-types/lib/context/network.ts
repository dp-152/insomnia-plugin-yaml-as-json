import type { Request } from "../model/request";
import type { Response } from "../model/response";

export type ExtraRenderInfo = {
  name: string;
  value: unknown;
}[];

export interface NetworkContext {
  sendRequest(req: Request, extraInfo?: ExtraRenderInfo): Promise<Response>;
}
