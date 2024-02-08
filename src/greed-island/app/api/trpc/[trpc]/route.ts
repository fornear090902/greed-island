import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import * as trpcNext from "@trpc/server/adapters/next";
import { NextRequest } from "next/server";

/* const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
}) */

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    createContext: () => ({}),
    req
  })
}

export { handler as GET, handler as POST };
