import type { RequestHook } from "@insomnia-plugins/insomnia-types/plugin/hook";
import { MIMEType } from "util";
import YAML from "yaml";

export const requestHooks: RequestHook[] = [
  (ctx) => {
    const requestId = ctx.request.getId();
    console.debug(`[yaml-as-json] Handling request ${requestId}`);
    const req = ctx.request.getBody();
    if (!req || !req.text) {
      console.debug(
        `[yaml-as-json] Request ${requestId} has no body, ignoring...`
      );
      return;
    }

    const mime = req.mimeType && new MIMEType(req.mimeType);
    if (!mime || mime.subtype !== "yaml") {
      console.debug(
        `[yaml-as-json] Mime subtype is not 'yaml' in request ${requestId}, ignoring...`
      );
      return;
    }

    const body = req.text && YAML.parse(req.text, { merge: true });
    if ("_nojson" in body && body._nojson === true) {
      console.debug(
        `[yaml-as-json] Found _nojson: true in body for request ${requestId}, excluding property and sending request...`
      );
      const { _nojson: _, ...newBody } = body;
      ctx.request.setBody({
        ...req,
        text: YAML.stringify(newBody),
      });
      return;
    }

    console.debug(`[yaml-as-json] Overwriting body for request ${requestId}`);
    ctx.request.setBody({
      ...req,
      text: JSON.stringify(body),
      mimeType: "application/json",
    });

    console.debug(
      `[yaml-as-json] Removing Content-Type header for request ${requestId}`
    );
    ctx.request.removeHeader("Content-Type");

    console.debug(
      `[yaml-as-json] Adding header Content-Type: application/json for request ${requestId}`
    );
    ctx.request.addHeader("Content-Type", "application/json");
  },
];
