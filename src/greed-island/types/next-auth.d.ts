import { Player } from "@/domain/player/model/Player";
import NextAuth, { User } from "next-auth";

declare module "next-auth" {

  interface JWT {
    user: User;
    player?: Player;
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
    player?: Player;
  }
}
