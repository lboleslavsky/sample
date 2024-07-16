import { createCallerFactory, publicProcedure, router } from '../trpc'

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  getData: publicProcedure.query(() => {
        return {"id":"1", "text":"t"}
  })
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;