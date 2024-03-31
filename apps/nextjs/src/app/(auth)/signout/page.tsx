"use client";

import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

import { Button } from "@theproject/ui/button";

export default function AuthenticationPage() {
  const router = useRouter();

  return (
    <div className="relative mx-5 sm:mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Deslogar da conta</h1>
        <p className="text-sm text-muted-foreground">
        Você tem certeza que deseja sair?
        </p>
        <SignOutButton signOutCallback={() => router.push("/?redirect=false")}>
          <Button>Confirmar</Button>
        </SignOutButton>
      </div>
    </div>
  );
}
