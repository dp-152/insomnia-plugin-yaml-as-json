export interface PluginStore {
  hasItem(name: string): Promise<boolean>;
  setItem(name: string, value: string): Promise<void>;
  getItem(name: string): Promise<string | null>;
  removeItem(name: string): Promise<void>;
  clear(): Promise<void>;
  all(): Promise<{ key: string; value: string }[]>;
}

export interface StoreContext {
  store: PluginStore;
}
