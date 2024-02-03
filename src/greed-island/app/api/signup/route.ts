import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

interface SignupParams {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const params: SignupParams = await req.json();

  const user = {
    email: params.email,
    hashedPassword: bcrypt.hashSync(params.password, 10),
  };

  await prisma.user.create({
    data: { email: user.email, hashedPassword: user.hashedPassword },
  });
  console.log("user created");

  // signIn();
}
