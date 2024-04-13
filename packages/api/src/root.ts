import { edgeRouter } from "./edge";

// Used to provide a good DX with a single client
// Then, a custom link is used to generate the correct URL for the request
export const appRouter = edgeRouter
export type AppRouter = typeof appRouter;
