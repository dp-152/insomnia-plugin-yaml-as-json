import type { PluginStore } from "../context/store";

export type PluginArgumentValue = string | number | boolean;

interface PluginArgumentBase {
  displayName: DisplayName;
  description?: string;
  help?: string;
  hide?: (args: NunjucksParsedTagArg[]) => boolean;
}

export interface PluginArgumentEnumOption {
  displayName: DisplayName;
  value: PluginArgumentValue;
  description?: string;
  placeholder?: string;
}

export type PluginArgumentEnum = PluginArgumentBase & {
  type: "enum";
  options: PluginArgumentEnumOption[];
  defaultValue?: PluginArgumentValue;
};

export type PluginArgumentModel = PluginArgumentBase & {
  type: "model";
  model: string;
  defaultValue?: string;
};

export type PluginArgumentString = PluginArgumentBase & {
  type: "string";
  placeholder?: string;
  defaultValue?: string;
};

export type PluginArgumentBoolean = PluginArgumentBase & {
  type: "boolean";
  defaultValue?: boolean;
};

export type PluginArgumentFile = PluginArgumentBase & {
  type: "file";
};

export type PluginArgumentNumber = PluginArgumentBase & {
  type: "number";
  placeholder?: string;
  defaultValue?: number;
};

export type PluginArgument =
  | PluginArgumentEnum
  | PluginArgumentModel
  | PluginArgumentString
  | PluginArgumentBoolean
  | PluginArgumentFile
  | PluginArgumentNumber;

export interface NunjucksParsedTagArg {
  type:
    | "string"
    | "number"
    | "boolean"
    | "variable"
    | "expression"
    | "enum"
    | "file"
    | "model";
  encoding?: "base64";
  value?: string | number | boolean;
  defaultValue?: string | number | boolean;
  forceVariable?: boolean;
  placeholder?: string;
  help?: string;
  displayName?: DisplayName;
  quotedBy?: '"' | "'";
  validate?: (value: unknown) => string;
  hide?: (args: NunjucksParsedTagArg[]) => boolean;
  model?: string;
  options?: PluginArgumentEnumOption[];
  itemTypes?: ("file" | "directory")[];
  extensions?: string[];
  description?: string;
}

export interface PluginTemplateTagActionContext {
  store: PluginStore;
}

export interface NunjucksActionTag {
  name: string;
  icon?: string;
  run: (context: PluginTemplateTagActionContext) => Promise<void>;
}

export type DisplayName = string | ((args: NunjucksParsedTagArg[]) => string);

export interface TemplateTag {
  name: string;
  displayName: string;
  disablePreview?: () => boolean;
  description?: string;
  deprecated?: boolean;
  liveDisplayName?: (args: NunjucksParsedTagArg[]) => string;
  validate?: (value: unknown) => string;
  priority?: number;
  args: PluginArgument[];
  actions: NunjucksActionTag[];
}
