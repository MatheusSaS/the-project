import * as z from "zod";

/**
 * Shared validators used in both the frontend and backend
 */

export const createProjectSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  description: z.string().optional(),
  url: z.string().url("Must be a valid URL").optional(),
});
export type CreateProject = z.infer<typeof createProjectSchema>;

export const renameProjectSchema = z.object({
  projectId: z.string(),
  name: z.string().min(5, "Name must be at least 5 characters"),
});
export type RenameProject = z.infer<typeof renameProjectSchema>;

export const projectExistsSchema = z.object({
  projectId: z.string(),
});
export type projectExists = z.infer<typeof projectExistsSchema>;
