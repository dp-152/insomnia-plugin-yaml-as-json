import type { BaseModel } from "./base";

export type AuthTypes =
  | "none"
  | "apikey"
  | "oauth2"
  | "oauth1"
  | "basic"
  | "digest"
  | "bearer"
  | "ntlm"
  | "hawk"
  | "iam"
  | "netrc"
  | "asap";

export type OAuth2ResponseType =
  | "code"
  | "id_token"
  | "id_token token"
  | "none"
  | "token";
export type OAuth1SignatureMethod =
  | "HMAC-SHA1"
  | "RSA-SHA1"
  | "HMAC-SHA256"
  | "PLAINTEXT";

export interface AuthTypeBasic {
  type: "basic";
  useISO88591?: boolean;
  disabled?: boolean;
  username?: string;
  password?: string;
}

export interface AuthTypeAPIKey {
  type: "apikey";
  disabled?: boolean;
  key?: string;
  value?: string;
  addTo?: string;
}

export interface AuthTypeOAuth2 {
  type: "oauth2";
  disabled?: boolean;
  grantType:
    | "authorization_code"
    | "client_credentials"
    | "password"
    | "implicit"
    | "refresh_token";
  accessTokenUrl?: string;
  authorizationUrl?: string;
  clientId?: string;
  clientSecret?: string;
  audience?: string;
  scope?: string;
  resource?: string;
  username?: string;
  password?: string;
  redirectUrl?: string;
  credentialsInBody?: boolean;
  state?: string;
  code?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenPrefix?: string;
  usePkce?: boolean;
  pkceMethod?: string;
  responseType?: OAuth2ResponseType;
  origin?: string;
}

export interface AuthTypeHawk {
  type: "hawk";
  disabled?: boolean;
  algorithm: "sha256" | "sha1";
  id: string;
  key: string;
  ext?: string;
  validatePayload?: boolean;
}

export interface AuthTypeOAuth1 {
  type: "oauth1";
  disabled?: boolean;
  signatureMethod?: OAuth1SignatureMethod;
  consumerKey?: string;
  consumerSecret?: string;
  tokenKey?: string;
  tokenSecret?: string;
  privateKey?: string;
  version?: string;
  nonce?: string;
  timestamp?: string;
  callback?: string;
  realm?: string;
  verifier?: string;
  includeBodyHash?: boolean;
}

export interface AuthTypeDigest {
  type: "digest";
  disabled?: boolean;
  username?: string;
  password?: string;
}

export interface AuthTypeNTLM {
  type: "ntlm";
  disabled?: boolean;
  username?: string;
  password?: string;
}

export interface AuthTypeBearer {
  type: "bearer";
  disabled?: boolean;
  token?: string;
  prefix?: string;
}

export interface AuthTypeAwsIam {
  type: "iam";
  disabled?: boolean;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  region?: string;
  service?: string;
}

export interface AuthTypeNetrc {
  type: "netrc";
  disabled?: boolean;
}

export interface AuthTypeAsap {
  type: "asap";
  disabled?: boolean;
  issuer: string;
  subject?: string;
  audience: string;
  additionalClaims?: string;
  keyId: string;
  privateKey: string;
}

export interface AuthTypeNone {
  type: "none";
  disabled?: boolean;
}

export type RequestAuthentication =
  | AuthTypeOAuth2
  | AuthTypeBasic
  | AuthTypeBearer
  | AuthTypeDigest
  | AuthTypeHawk
  | AuthTypeOAuth1
  | AuthTypeAwsIam
  | AuthTypeNetrc
  | AuthTypeAsap
  | AuthTypeNone
  | AuthTypeAPIKey
  | AuthTypeNTLM;

export interface RequestBodyParameter {
  name: string;
  value: string;
  description?: string;
  disabled?: boolean;
  multiline?: string;
  id?: string;
  fileName?: string;
  type?: string;
}

export interface RequestBody {
  mimeType?: string | null;
  text?: string;
  fileName?: string;
  params?: RequestBodyParameter[];
}

export interface RequestParameter {
  name: string;
  value: string;
  disabled?: boolean;
  id?: string;
  fileName?: string;
}

export interface RequestPathParameter {
  name: string;
  value: string;
}

export interface RequestHeader {
  name: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface BaseRequest {
  url: string;
  name: string;
  description: string;
  method: string;
  body: RequestBody;
  preRequestScript?: string;
  afterResponseScript?: string;
  parameters: RequestParameter[];
  pathParameters?: RequestPathParameter[];
  headers: RequestHeader[];
  authentication: RequestAuthentication | NonNullable<unknown>;
  metaSortKey: number;
  isPrivate: boolean;
  settingStoreCookies: boolean;
  settingSendCookies: boolean;
  settingDisableRenderRequestBody: boolean;
  settingEncodeUrl: boolean;
  settingRebuildPath: boolean;
  settingFollowRedirects: "global" | "on" | "off";
}

export type Request = BaseModel & BaseRequest;

export interface GrpcRequestBody {
  text?: string;
}

export interface GrpcRequestHeader {
  name: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

interface BaseGrpcRequest {
  name: string;
  url: string;
  description: string;
  protoFileId?: string;
  protoMethodName?: string;
  body: GrpcRequestBody;
  metadata: GrpcRequestHeader[];
  metaSortKey: number;
  isPrivate: boolean;
  reflectionApi: {
    enabled: boolean;
    url: string;
    apiKey: string;
    module: string;
  };
}

export type GrpcRequest = BaseModel & BaseGrpcRequest;

export interface BaseWebSocketRequest {
  name: string;
  description: string;
  url: string;
  metaSortKey: number;
  headers: RequestHeader[];
  authentication: RequestAuthentication;
  parameters: RequestParameter[];
  pathParameters?: RequestPathParameter[];
  settingEncodeUrl: boolean;
  settingStoreCookies: boolean;
  settingSendCookies: boolean;
  settingFollowRedirects: "global" | "on" | "off";
}

export type WebSocketRequest = BaseModel &
  BaseWebSocketRequest & { type: "WebSocketRequest" };
