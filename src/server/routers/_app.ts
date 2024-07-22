import { createCallerFactory, publicProcedure, router } from '../trpc'
import { getSexData, getVaccinated} from "../../utils/db";

export const appRouter = router({
  getDataVaccinated: publicProcedure.query(async () => {
    return await getVaccinated();
  }),

  getDataSex: publicProcedure.query(async () => {
    return await getSexData();
  })
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;