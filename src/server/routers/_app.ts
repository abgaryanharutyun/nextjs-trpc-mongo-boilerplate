import main from "../../clients/mongoose";
import { router } from "../trpc";
import userRouter from "./user.router";
export const appRouter = router({
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
