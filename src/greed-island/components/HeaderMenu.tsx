'use client';

import { library } from "@/lib/japanese";
import { signOut, useSession } from "next-auth/react";
import type { Dispatch, MouseEventHandler } from "react";

export function HeaderMenu() {
  const { data: session, status } = useSession();

  return (
    <div className="header-menu">
      {
        // TODO: implement display full name.
        session && (
          <div className="welcome-msg">
            <div>
              {library.welcomeMessage} ほげほげ {library.honorificSymbol}
            </div>
          </div>
        )
      }
      <div className="login-btn">
        {session && (
          <button onClick={signOut as MouseEventHandler<HTMLButtonElement>}>
            {library.logout}
          </button>
        )}
      </div>
    </div>
  );
}
