import { AppRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { devtoolsLink } from "trpc-client-devtools-link";

function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  return "http://localhost:3000";
}

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        devtoolsLink({
          enabled: true,
        }),
        httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
      ],
    };
  },
  ssr: false
});
