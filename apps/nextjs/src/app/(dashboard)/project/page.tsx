import { DashboardShell } from "../_components/dashboard-shell";
import { CreateProjectForm } from "./_components/create-project-form";

export default function Project() {
  return (
    <DashboardShell
      title="Criar um novo projeto"
    >
      <CreateProjectForm />
    </DashboardShell>
  );
}
