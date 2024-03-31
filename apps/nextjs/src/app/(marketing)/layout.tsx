import type { ReactNode } from "react";
import { Suspense } from "react";
import { auth } from "@clerk/nextjs";

import * as Icons from "@theproject/ui/icons";

import { BackgroundSVGs, siteConfig } from "~/app/config";
import { SiteFooter } from "~/components/footer";
import { MainNav } from "~/components/main-nav";
import { MobileDropdown } from "~/components/mobile-nav";
import Link from "next/link";
import { buttonVariants } from "@theproject/ui/button";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <BackgroundSVGs.GradientTop />
      <BackgroundSVGs.GridTop />
      <nav className="container z-50 flex h-16 items-center">
        <div className="mr-8 hidden items-center md:flex">
          <Icons.Logo className="mr-2 h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </div>
        <MobileDropdown />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Suspense>
            <DashboardLink />
          </Suspense>
        </div>
      </nav>

      <main className="flex-1">{props.children}</main>
      <SiteFooter />
    </div>
  );
}

function DashboardLink() {
  const { userId } = auth();

  if (!userId) {
    return (
      <Link href="/signin" className={buttonVariants({ type: "outline" })}>
        Sign In
        <Icons.ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link
      href='/dashboard'
      className={buttonVariants({ type: "outline" })}
    >
      Dashboard
      <Icons.ChevronRight className="ml-1 h-4 w-4" />
    </Link>
  );
}
