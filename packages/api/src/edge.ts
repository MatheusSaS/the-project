import { projectRouter } from "./router/project";
import { createTRPCRouter } from "./trpc";

// Deployed to /trpc/edge/**
export const edgeRouter = createTRPCRouter({
  project: projectRouter
});
