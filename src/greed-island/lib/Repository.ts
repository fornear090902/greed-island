import type { PrismaClient } from "@prisma/client";
import prisma from "./prisma";

export abstract class Repository<T> {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  abstract create(entity: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
}
