import { UserProfile } from "@clerk/nextjs";

import { DashboardShell } from "../_components/dashboard-shell";

export default function Settings() {
  return (
    <DashboardShell
      title="Conta"
      description="
    Gerencie os detalhes da sua conta"
    >
      <div className="flex justify-center">
        <UserProfile
          appearance={{
            variables: {
              borderRadius: "var(--radius)",
              // colorBackground: "var(--background)",
            },
            elements: {
              // Main card element
              card: "shadow-none bg-transparent text-foreground",
              navbar: "hidden",
              navbarMobileMenuButton: "hidden",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
            },
          }}
        />
      </div>
    </DashboardShell>
  );
}
