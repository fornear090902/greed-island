import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";

export interface IUser {
    id: string;
    email: string;
    hashedPassword: string;
}

export interface IPlayer {
    id: string;
    email: string;
}

const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials): Promise<IUser | null> => {
                try {
                    if (!credentials) {
                        throw new Error('No credentials provided')
                    }
                    console.log(prisma)
                    console.log(prisma.user)

                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        }
                    })
                    if (!user) {
                        throw new Error('No user found')
                    }
                    const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
                    if (!isCorrectPassword) {
                        throw new Error('Invalid Credentials')
                    }
                    return user
                } catch (e) {
                    console.error(e)
                }
                return null
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST }