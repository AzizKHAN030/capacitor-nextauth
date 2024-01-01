import type { Session } from "next-auth";
import type { AppProps } from "next/app";

import { UseSession } from "@/hooks/useSession";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <UseSession>
      <Component {...pageProps} />
    </UseSession>
  );
}
