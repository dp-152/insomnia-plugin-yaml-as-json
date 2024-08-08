export interface DialogOptions {
  onHide?: () => void;
  tall?: boolean;
  skinny?: boolean;
  wide?: boolean;
}

export interface ShowDialogOptions {
  defaultPath?: string;
}

export interface PromptModalOptions {
  title: string;
  defaultValue?: string;
  submitName?: string;
  selectText?: boolean;
  upperCase?: boolean;
  hint?: string;
  inputType?: string;
  placeholder?: string;
  validate?: (value: string) => string;
  label?: string;
  hints?: string[];
  onComplete?: (value: string) => Promise<void> | void;
  onHide?: () => void;
  onDeleteHint?: (value?: string) => void;
}

export interface AppInfo {
  version: string;
  platform: NodeJS.Platform;
}

export interface AppClipboard {
  readText(): string;
  writeText(text: string): void;
  clear(): void;
}

export interface AppContext {
  alert: (title: string, message?: string) => void;
  dialog: (title: string, body: HTMLElement, options?: DialogOptions) => void;
  prompt: (
    title: string,
    options?: Pick<
      PromptModalOptions,
      "label" | "defaultValue" | "submitName" | "inputType"
    >
  ) => Promise<string>;
  getPath: (name: string) => string;
  getInfo: () => AppInfo;
  showSaveDialog: (options?: ShowDialogOptions) => Promise<string | null>;
  clipboard: AppClipboard;
}
