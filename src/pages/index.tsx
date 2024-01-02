import { useContext } from "react";

import { signOut } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import { SessionContext } from "@/hooks/useSession";
import { loginWithProvider } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const session = useContext(SessionContext);
  const callback = () => {
    router.reload();
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Holaaa</h1>
      <p>
        {!session?.user && (
          <>
            <span>You are not signed in</span>
          </>
        )}
        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
              />
            )}
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              onClick={e => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </p>
      <Button onClick={() => loginWithProvider(callback, "google")}>
        Sign in with Google
      </Button>
      <Button onClick={() => loginWithProvider(callback, "github")}>
        Sign in with Github
      </Button>
    </main>
  );
}
