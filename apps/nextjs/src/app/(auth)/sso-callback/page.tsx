"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import type { HandleOAuthCallbackParams } from "@clerk/types";

import * as Icons from "@theproject/ui/icons";

export default function SSOCallback(props: {
  searchParams: HandleOAuthCallbackParams;
}) {
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    void handleRedirectCallback(props.searchParams);
  }, [props.searchParams, handleRedirectCallback]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Icons.Spinner className="mr-2 h-16 w-16 animate-spin" />
    </div>
  );
}
