import React from "react";
import { useSignIn } from "@clerk/nextjs";
import type { OAuthStrategy } from "@clerk/types";

import { Button } from "@theproject/ui/button";
import * as Icons from "@theproject/ui/icons";
import { useToast } from "@theproject/ui/use-toast";

export default function OauthSingIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const { toast } = useToast();

  const oauthSignIn = async (provider: OAuthStrategy) => {
    if (!signInLoaded) return null;
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (cause) {
      setIsLoading(null);
      console.error(cause);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong, please try again.",
      });
    }
  };
  return (
    <>
      <Button
        type="outline"
        className="mb-3 w-full shadow"
        loading={isLoading === "oauth_github"}
        icon={<Icons.GitHub />}
        onClick={() => oauthSignIn("oauth_github")}
      >
        Github
      </Button>
      <Button
        type="outline"
        className="w-full shadow"
        loading={isLoading === "oauth_google"}
        icon={<Icons.Google />}
        onClick={() => oauthSignIn("oauth_google")}
      >
        Google
      </Button>
    </>
  );
}
