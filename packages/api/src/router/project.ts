import { genId } from "@theproject/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { createProjectSchema, projectExistsSchema } from "../validators";

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

    const projects = await opts.ctx.db
      .selectFrom("Project")
      .select(["id", "name", "description", "url"])
      .where("userId", "=", userId)
      .execute();

    return {
      projects,
    };
  }),

  projectExists: protectedProcedure
    .input(projectExistsSchema)
    .mutation(async (opts) => {
      const { projectId } = opts.input;
      
      const project = await opts.ctx.db
        .selectFrom("Project")
        .select("id")
        .where("id", "=", projectId)
        .executeTakeFirst();

      return project;
    }),
});
