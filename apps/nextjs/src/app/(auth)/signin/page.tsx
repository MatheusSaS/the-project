import OauthSingIn from "./oauth-singin";
import { EmailSignIn } from "./email-signin";
import * as Icons from "@theproject/ui/icons";

export default function AuthenticationPage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <div className="w-full max-w-sm text-center sm:max-w-md px-5">
        <div className="flex justify-center">
        <Icons.Logo className="mr-2 h-9 w-9" />
        </div>
        <h1 className="mb-5 text-2xl font-bold opacity-80">Entrar com</h1>
        <OauthSingIn />
        <div className="mb-5 flex items-center mt-5">
          <div className="w-full bg-gray-200 py-px"></div>
          <span
            className="text-coolGray-600 mx-5 text-xs uppercase"
            data-config-id="auto-txt-4-2"
          >
            Ou
          </span>
          <div className="w-full bg-gray-200 py-px"></div>
        </div>
        <EmailSignIn />
      </div>
    </div>
  );
}
