import {  createTRPCProxyClient, loggerLink } from "@trpc/client";

import type { AppRouter } from "@theproject/api";

import { endingLink, transformer } from "./shared";

export const api = createTRPCProxyClient<AppRouter>({
  transformer: transformer,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    endingLink({
      headers: {
        "x-trpc-source": "client",
      },
    }),
  ],
});

export { type RouterInputs, type RouterOutputs } from "@theproject/api";
