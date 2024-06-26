"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@theproject/ui";

import { navItems } from "~/app/config";

export default function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const segment = usePathname();

  return (
    <>
      <ul
        className={cn(
          "no-scrollbar flex h-16 list-none items-center justify-start gap-6 overflow-x-auto bg-background/95 px-4 text-sm shadow md:px-8",
          className,
        )}
        {...props}
      >
        {navItems.map((navItem, index) => (
          <li key={navItem.href}>
            <div
              className={cn(
                "rounded-md p-2",
                navItem.href === segment
                  ? "bg-primary/10 font-semibold"
                  : "font-medium text-foreground/60",
              )}
            >
              <Link
                key={index}
                href={navItem.href}
                className="flex items-center gap-2 text-base"
              >
                {navItem.icon}
                <span>{navItem.title}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
