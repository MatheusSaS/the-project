import Link from "next/link";

import { Button } from "@theproject/ui/button";

import { DashboardShell } from "../_components/dashboard-shell";

export default function Page() {
  return (
    <DashboardShell
      title="Projects"
      description="Projects for this workspace will show up here"
      headerAction={
        <Button className="min-w-max" asChild>
          <Link href={`/onboarding`}>Create a new project</Link>
        </Button>
      }
    >
      <h1>j</h1>
    </DashboardShell>
  );
}
