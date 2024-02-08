import { NextAuthOptions, Session } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import Google from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { PlayerRepository } from "@/domain/player/repository/PlayerRepository";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.user = user;
        const playerRepository = new PlayerRepository();
        const player = await playerRepository.findByUserId(user.id);
        if (player) {
          token.player = player;
        }
      }
      return token;
    },
    session: async ({ session, user, token }) => {
      return {
        ...session,
        accessToken: token.accessToken,
        user: token.user as JWT["user"],
        player: token.player,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
