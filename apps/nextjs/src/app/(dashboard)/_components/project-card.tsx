import Link from "next/link";

import type { RouterOutputs } from "@theproject/api";
import { cn } from "@theproject/ui";
import { Card, CardDescription, CardHeader, CardTitle } from "@theproject/ui/card";

import { getRandomPatternStyle } from "~/lib/generate-pattern";

export function ProjectCard(props: {
  project: RouterOutputs["project"]["list"]["projects"][number];
}) {
  const { project } = props;
  return (
    <Link href={`/project/${project.id}/overview`}>
      <Card className="overflow-hidden">
        <div className="h-10 rounded-b-md" style={getRandomPatternStyle(project.id)} />
        <CardHeader className="min-h-32">
          <CardTitle className="flex items-center justify-between">
            <span>{project.name}</span>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

ProjectCard.Skeleton = function ProjectCardSkeleton(props: {
  pulse?: boolean;
}) {
  const { pulse = true } = props;
  return (
    <Card>
      <div className={cn("h-32 bg-muted", pulse && "animate-pulse")} />
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className={cn("flex-1 bg-muted", pulse && "animate-pulse")}>
            &nbsp;
          </span>
        </CardTitle>
        <CardDescription className={cn("bg-muted", pulse && "animate-pulse")}>
          &nbsp;
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
