import { Warrior } from "@/domain/job/Warrior";
import { Experience } from "@/domain/player/Experience";
import { Level } from "@/domain/player/Level";
import { Status } from "@/domain/player/Status";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { uuidv7 } from "uuidv7";

export interface IPlayer {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
    level: Level;
    status: Status;
    experience: Experience;
    job: Warrior;
}

const findUserByCredentials = (credentials: Record<'email' | 'password', string>): IPlayer | null => {
    const { email, password } = credentials;

    if (email === process.env.USER_EMAIL && password === process.env.USER_PASSWORD) {
        const level = new Level(1);
        const experience = new Experience(0);
        const status = new Status(100, 50, 10, 10);
        const job = new Warrior();

        return {
            id: uuidv7(),
            last_name: 'ゲスト',
            first_name: 'です男',
            email,
            level,
            status,
            experience,
            job
        };
    } else {
        return null;
    }
};

const options: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'email',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials, req): Promise<IPlayer | null> => {
                const user = credentials ? findUserByCredentials(credentials) : null;

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
};

const handler = NextAuth(options);

export { handler as GET, handler as POST }