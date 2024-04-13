import { redirect } from "next/navigation";

export default function ProjectPage(props: {
  params: { workspaceId: string; projectId: string };
}) {
  redirect(`/project/${props.params.projectId}/overview`);
}
