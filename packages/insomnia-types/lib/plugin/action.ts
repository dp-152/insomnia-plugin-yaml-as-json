import type { AppContext } from "../context/app";
import type { DataContext } from "../context/data";
import type { NetworkContext } from "../context/network";
import type { StoreContext } from "../context/store";
import type { GrpcRequest, Request, WebSocketRequest } from "../model/request";
import type { RequestGroup } from "../model/request-group";
import type { Workspace } from "../model/workspace";

export interface ActionContext {
  app: AppContext;
  data: DataContext;
  store: StoreContext;
  network: NetworkContext;
}

export interface RequestActionModels {
  request: Request | GrpcRequest | WebSocketRequest;
  requestGroup: RequestGroup;
}

export interface RequestAction {
  label: string;
  action: (
    context: ActionContext,
    models: RequestActionModels
  ) => void | Promise<void>;
  icon?: string;
}

export interface RequestGroupActionModels {
  requests: (Request | GrpcRequest | WebSocketRequest)[];
  requestGroup: RequestGroup;
}

export interface RequestGroupAction {
  label: string;
  action: (
    context: ActionContext,
    models: RequestGroupActionModels
  ) => Promise<void>;
}

export interface WorkspaceActionModels {
  workspace: Workspace;
  requestGroup: RequestGroup[];
  requests: Request[];
}

export interface WorkspaceAction {
  label: string;
  action: (
    context: ActionContext,
    models: WorkspaceActionModels
  ) => Promise<void>;
}

export interface DocumentAction {
  label: string;
  action: (
    context: ActionContext,
    spec: {
      contents: Record<string, unknown>;
      rawContents: string;
      format: string;
      formatVersion: string;
    }
  ) => void | Promise<void>;
  hideAfterClick?: boolean;
}
