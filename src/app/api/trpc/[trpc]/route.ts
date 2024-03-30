import { appRouter } from "@/trpc"
import {
  fetchRequestHandler,
  FetchCreateContextFnOptions,
} from "@trpc/server/adapters/fetch"

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // @ts-expect-error context already passed from express middleware
    createContext: () => ({
      function(opts: FetchCreateContextFnOptions): object | Promise<object> {
        return {}
      },
    }),
  })
}

export { handler as GET, handler as POST }
