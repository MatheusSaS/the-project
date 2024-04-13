import { genId } from "@theproject/db";

import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc";
import {
  createProjectSchema,
} from "../validators";

export const projectRouter = createTRPCRouter({
    create: protectedProcedure
    .input(createProjectSchema)
    .mutation(async (opts) => {
      const { userId } = opts.ctx.auth;
      const { name, description } = opts.input;

      const projectId = "project_" + genId();

      await opts.ctx.db
        .insertInto("Project")
        .values({
          id: projectId,
          name,
          description,
          userId: userId,
        })
        .execute();
      
      return projectId;
    }),

    list: protectedProcedure.query(async (opts) => {
      const { userId } = opts.ctx.auth;
      
      const query = opts.ctx.db
        .selectFrom("Project")
        .select(["id", "name", "description" ,"url"])
        .where("userId", "=", userId);
  
      const projects = await query.execute();
  
      return {
        projects
      };
    }),
})