import { procedure, router } from '../trpc';
import { data } from '../../data/example';

export const appRouter = router({
  trpcTest: procedure
    .query(() => {
      return {
        data
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;