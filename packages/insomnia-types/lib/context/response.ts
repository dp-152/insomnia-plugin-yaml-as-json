import type { Readable } from "stream";

export interface ResponseContext {
  getRequestId(): string;
  getStatusCode(): number;
  getStatusMessage(): string;
  getBytesRead(): number;
  getTime(): number;
  getBody(): Buffer | null;
  getBodyStream(): Readable;
  setBody(body: Buffer): void;
  getHeader(name: string): string | string[] | null;
  getHeaders(): { name: string; value: string }[] | undefined;
  hasHeader(name: string): boolean;
}
