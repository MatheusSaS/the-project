import { notFound } from "next/navigation";

import { api } from "~/trpc/server";

export async function userCanAccess(projectId: string) {
  if (!projectId.startsWith("project_")) {
    notFound();
  }

  const project = await api.project.projectExists.mutate({ projectId });

  if (!project) {
    notFound();
  }
}
