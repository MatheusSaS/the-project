import type { Route } from "next";

import * as Icons from "@theproject/ui/icons";

export const siteConfig = {
  name: "The project",
  description:
    "Kit inicial Next.js que inclui tudo que você precisa para construir um aplicativo da web moderno. Aplicativo móvel pré-configurado, pronto para uso.",
  github: "https://github.com/juliusmarminge/acme-corp",
  twitter: "https://twitter.com/jullerino",
};

export const navItems = [
  {
    href: "/dashboard",
    title: "Home",
    icon: <Icons.Home className="w-[20px] h-[20px]"/>
  },{
    href: "/settings",
    title: "Settings",
    icon: <Icons.Settings />
  }
] satisfies { href: Route; title: string; icon: JSX.Element }[];

export const BackgroundSVGs = {
  GradientTop: () => (
      <div className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/60 to-secondary/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                  clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
          />
      </div>
  ),
  GridTop: () => (
      <div className="absolute inset-0 text-primary/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <pattern
                      id="grid-bg"
                      width="32"
                      height="32"
                      patternUnits="userSpaceOnUse"
                      x="100%"
                      patternTransform="translate(0 -1)"
                  >
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
          </svg>
      </div>
  ),
  GradientBottom: () => (
      <div className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/60 to-secondary/50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                  clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
          />
      </div>
  ),
};
