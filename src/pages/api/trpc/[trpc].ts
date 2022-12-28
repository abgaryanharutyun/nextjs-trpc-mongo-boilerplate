import * as trpcNext from "@trpc/server/adapters/next";
import dbConnect from "../../../clients/mongoose";
import { appRouter } from "../../../server/routers/_app";
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async () => {
    await dbConnect();
    return {};
  },
});
