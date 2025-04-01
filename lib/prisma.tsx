import { PrismaClient } from "@prisma/client";

const globalForprisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForprisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForprisma.prisma = prisma;
