// Trpc starting file server

import { router } from "./trpc"
import { authRouter } from "./routers/auth-router"
import { productsRouter } from "./routers/products-router"

export const appRouter = router({
  auth: authRouter,
  products: productsRouter,
})

export type AppRouter = typeof appRouter
