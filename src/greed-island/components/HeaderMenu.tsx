import { Warrior } from "@/domain/job/Warrior";
import { Experience } from "@/domain/player/Experience";
import { Level } from "@/domain/player/Level";
import { Player } from "@/domain/player/Player";
import { Status } from "@/domain/player/Status";
import { library } from "@/lib/japanese";
import { signIn, signOut, useSession } from "next-auth/react";
import type { Dispatch, MouseEventHandler } from "react";
import { uuidv7 } from "uuidv7";

export function HeaderMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="header-menu">
        <div className="welcome-msg">Loading...</div>
      </div>
    );
  }

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
        {session ? (
          <button onClick={signOut as MouseEventHandler<HTMLButtonElement>}>
            {library.logout}
          </button>
        ) : (
          <button onClick={signIn as MouseEventHandler<HTMLButtonElement>}>
            {library.login}
          </button>
        )}
      </div>
    </div>
  );
}
