"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@theproject/ui";
import * as Icons from "@theproject/ui/icons";

const projectItems = [
  {
    title: "Dashboard",
    href: "/overview",
    icon: Icons.Dashboard,
  },
  {
    title: "Danger Zone",
    href: "/danger",
    icon: Icons.Warning,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Icons.Settings,
  },
] as const;

export function SidebarNav() {
  const params = useParams<{
    workspaceId: string;
    projectId?: string;
  }>();
  const path = usePathname();

  const parts = path.split("/");
  const afterLastSlash = parts[parts.length - 1];
  const pathname = "/" + afterLastSlash;
  console.log("dewdewde");

  console.log(pathname);

  const items = projectItems;
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = item.icon;

        let fullPath = `/project/${params.projectId}`;
        fullPath += item.href;

        return (
          item.href && (
            <Link
              key={index}
              href={fullPath}
              aria-disabled={"disabled" in item}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "transparent",
                  "disabled" in item && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
