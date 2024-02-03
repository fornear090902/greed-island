import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient

const globalPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

if (!globalPrisma.prisma) {
    globalPrisma.prisma = new PrismaClient()
}
prisma = globalPrisma.prisma

export default prisma