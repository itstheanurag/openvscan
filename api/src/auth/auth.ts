import { betterAuth } from 'better-auth';
import { hashPassword, verifyPassword } from './password';
import { PrismaClient } from 'generated/prisma';

export const createAuth = (prisma: any) => {
  return betterAuth({
    database: prisma,
    emailAndPassword: {
      enabled: true,
      password: { hash: hashPassword, verify: verifyPassword },
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
    },
    session: { expiresIn: 60 * 60 * 24 * 7, updateAge: 60 * 60 * 24 },
  });
};

const prisma = new PrismaClient();
export const auth = createAuth(prisma);
