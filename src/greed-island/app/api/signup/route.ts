import { NextRequest } from "next/server";
import { IUser } from "./auth/[...nextauth]/route";
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
import { signIn } from "next-auth/react";

interface SignupParams {
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {

    const params: SignupParams = await req.json();

    const user: Omit<IUser, 'id'> = {
        email: params.email,
        hashedPassword: bcrypt.hashSync(params.password, 10),
    }

    const prisma = new PrismaClient();
    await prisma.user.create({ data: { email: user.email, hashedPassword: user.hashedPassword } });

    signIn();
}