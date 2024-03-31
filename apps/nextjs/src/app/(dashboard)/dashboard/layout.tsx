import Link from "next/link";

import * as Icons from "@theproject/ui/icons";

import DashboardNav from "~/components/dashboard-nav";
import { SiteFooter } from "~/components/footer";
import { UserNav } from "~/components/user-nav";
import { BackgroundSVGs, siteConfig } from "../../config";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden rounded-[0.5rem]">
      <BackgroundSVGs.GradientTop />
      <BackgroundSVGs.GridTop />
      <nav className="relative border-b">
        <div className="flex h-14 items-center px-4 md:px-8">
          <div className="mr-8 items-center flex">
            <Link href="/dashboard">
              <Icons.Logo className="mr-2 h-6 w-6" />
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
      </nav>
      <main className="relative min-h-[calc(100vh-14rem)] flex-1 space-y-4 p-4 pt-6 md:p-8">
        {props.children}
      </main>
      <SiteFooter />
    </div>
  );
}
