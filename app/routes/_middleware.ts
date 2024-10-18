import { createRoute } from "honox/factory";
import { secureHeaders, NONCE } from "hono/secure-headers";

secureHeaders({
  contentSecurityPolicy: import.meta.env.PROD
    ? {
        scriptSrc: [NONCE],
      }
    : undefined,
});
