import type { BaseModel } from "./base";

export type Compression = "zip";

export interface ResponseHeader {
  name: string;
  value: string;
}

export interface BaseResponse {
  environmentId: string | null;
  statusCode: number;
  statusMessage: string;
  httpVersion: string;
  contentType: string;
  url: string;
  bytesRead: number;
  bytesContent: number;
  elapsedTime: number;
  headers: ResponseHeader[];
  bodyPath: string;
  timelinePath: string;
  bodyCompression?: Compression;
  error: string;
  requestVersionId: string | null;
  settingStoreCookies: boolean | null;
  settingSendCookies: boolean | null;
}

export type Response = BaseModel & BaseResponse;
