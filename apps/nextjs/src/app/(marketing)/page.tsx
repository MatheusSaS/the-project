import { Balancer } from "react-wrap-balancer";

import { cn } from "@theproject/ui";
import { buttonVariants } from "@theproject/ui/button";
import * as Icons from "@theproject/ui/icons";

import { siteConfig } from "../config";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="z-10 min-h-[50vh] w-full max-w-4xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Seu ponto de partida completo e pronto para uso empresarial
          </Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-muted-foreground/80 opacity-0 md:text-xl"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <Balancer>
            The project é um kit inicial Next.js que inclui tudo que você precisa
            para construir um aplicativo web moderno. Aplicativo móvel
            pré-configurado, pronto para uso.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          <a
            className={cn(buttonVariants({ variant: "default" }))}
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.GitHub className="mr-1 h-4 w-4" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
