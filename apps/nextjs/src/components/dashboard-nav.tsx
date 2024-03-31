"use client"

import { cn } from "@theproject/ui";

import { navItems } from "~/app/config";

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const segment = usePathname()
  
  return (
    <ul
      className={cn(
        "no-scrollbar flex list-none items-center justify-start gap-6 overflow-x-auto px-4 text-sm md:px-8",
        className,
      )}
      {...props}
    >
      {navItems.map((navItem, index) => (
        <li key={navItem.href}>
          <Link
            key={index}
            href={navItem.href}
            className={cn(
              "flex items-center gap-2 font-medium text-base  pb-3",
              navItem.href === segment 
              ? "text-foreground border-b-2 border-primary "
              : "text-foreground/60"
              )}
          >
            <span>{navItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
