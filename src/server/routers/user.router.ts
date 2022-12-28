import { z } from "zod";
import userModel from "../../models/user.model";
import { procedure, router } from "../trpc";

const userRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  setData: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const userModelData = await userModel().create({
        name: "test",
        email: "test@email.com",
      });
      return {
        greeting: userModelData,
      };
    }),
});

export default userRouter;
