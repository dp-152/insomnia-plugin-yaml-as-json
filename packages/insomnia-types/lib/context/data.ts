import type { Workspace } from "../model/workspace";

export interface InsomniaExport {
  workspace?: Workspace;
  includePrivate?: boolean;
  format?: "json" | "yaml";
}

export type HarExport = Omit<InsomniaExport, "format">;

export interface DataCotnextImport {
  uri: (uri: string) => Promise<void>;
  raw: (content: string) => Promise<void>;
}

export interface DataContextExport {
  insomnia: (exportData?: InsomniaExport) => Promise<string>;
  har: (exportData?: HarExport) => Promise<string>;
}

export interface DataContext {
  data: {
    import: DataCotnextImport;
    export: DataContextExport;
  };
}
