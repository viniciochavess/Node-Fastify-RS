import { PrismaClient } from "@prisma/client";


export const primsa = new PrismaClient({
    log: ['query', 'info', 'warn']
});
