import React from "react";

import { Breadcrumbs } from "./breadcrumbs";

export function DashboardShell(props: {
  title: string;
  description?: React.ReactNode;
  breadcrumb?: boolean;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <div className="mb-4 grid grid-cols-1 items-center justify-between sm:grid-cols-2">
        <div className="w-full space-y-1">
          <h1 className="font-cal text-3xl font-semibold leading-none">
            {props.title}
          </h1>
          {typeof props.description === "string" ? (
            <h2 className="text-base text-muted-foreground">
              {props.description}
            </h2>
          ) : (
            props.description
          )}
        </div>
        <div className="mt-2 flex w-full justify-center sm:mt-0 sm:justify-end">
          {props.headerAction}
        </div>
      </div>
      {props.breadcrumb && <Breadcrumbs />}
      <div className={props.className}>{props.children}</div>
    </div>
  );
}
