import type { AppContext } from "../context/app";
import type { RequestContext } from "../context/request";

export interface RequestHookContext {
  app: AppContext;
  request: RequestContext;
}

export type RequestHook = (ctx: RequestHookContext) => void;
export interface ResponseHookContext {
  app: AppContext;
  response: Response;
}

export type ResponseHook = (ctx: ResponseHookContext) => void;
