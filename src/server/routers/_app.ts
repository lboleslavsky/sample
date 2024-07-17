import { createCallerFactory, publicProcedure, router } from '../trpc'
import { getSexData, getVaccinated, parseRemoteAPI } from "../../utils/db";

export const appRouter = router({
  getDataVaccinated: publicProcedure.query(async () => {
    return await getVaccinated();
  }),

  getDataSex: publicProcedure.query(async () => {
    return await getSexData();
  }), 

  parseRemoteAPI: publicProcedure.query(async ()=>{
    return await parseRemoteAPI();
  })
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;