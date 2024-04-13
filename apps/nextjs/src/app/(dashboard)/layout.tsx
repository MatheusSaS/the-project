import Link from "next/link";

import * as Icons from "@theproject/ui/icons";

import DashboardNav from "~/components/dashboard-nav";
import { SiteFooter } from "~/components/footer";
import { UserNav } from "~/components/user-nav";
import { BackgroundSVGs, siteConfig } from "../config";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <BackgroundSVGs.GradientTop />
      <header className="sticky top-0 z-[60]">
        <div className="flex h-16 items-center px-4 md:px-8 border-b-2 border-dashed bg-background">
          <div className="mr-8 items-center flex">
            <Link href="/dashboard">
              <Icons.Logo className="mr-2 h-7 w-7" />
            </Link>
            <span className="text-lg font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
        <DashboardNav />
      </header>

      <main className="relative min-h-[calc(100vh-14rem)] flex-1 space-y-4 p-4 pt-6 md:p-8">
        {props.children}
      </main>
      <SiteFooter />
    </div>
  );
}
