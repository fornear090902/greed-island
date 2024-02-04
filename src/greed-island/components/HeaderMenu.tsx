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
              {library.welcomeMessage} ほげほげ {library.common.honorificSymbol}
            </div>
          </div>
        )
      }
      <div className="login-btn">
        {session && (
          <button onClick={signOut as MouseEventHandler<HTMLButtonElement>}>
            {library.common.logout}
          </button>
        )}
      </div>
    </div>
  );
}
