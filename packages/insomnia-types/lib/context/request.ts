import type { RequestBody } from "../model/request";

export interface RequestContext {
  getId(): string;
  getName(): string;
  getUrl(): string;
  setUrl(url: string): void;
  getMethod(): string;
  setMethod(method: string): void;
  getHeaders(): { name: string; value: string }[];
  getHeader(name: string): string | null;
  hasHeader(name: string): boolean;
  removeHeader(name: string): void;
  setHeader(name: string, value: string): void;
  addHeader(name: string, value: string): void;
  getParameter(name: string): string | null;
  getParameters(): { name: string; value: string }[];
  setParameter(name: string, value: string): void;
  hasParameter(name: string): boolean;
  addParameter(name: string, value: string): void;
  removeParameter(name: string): void;
  getBody(): RequestBody;
  setBody(body: RequestBody): void;
  getEnvironmentVariable(name: string): unknown;
  getEnvironment(): object;
  setAuthenticationParameter(name: string, value: string): void;
  getAuthentication(): object;
  setCookie(name: string, value: string): void;
  settingSendCookies(enabled: boolean): void;
  settingStoreCookies(enabled: boolean): void;
  settingEncodeUrl(enabled: boolean): void;
  settingDisableRenderRequestBody(enabled: boolean): void;
  settingFollowRedirects(enabled: boolean): void;
}
