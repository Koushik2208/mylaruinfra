import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { SignInSchema } from "./lib/validations";
import { IAccountDoc } from "./database/account.model";
import { api } from "./lib/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const { data: existingAccount } = (await api.accounts.getByProvider(
            email
          )) as ActionResponse<IAccountDoc>;

          if (!existingAccount || existingAccount.provider !== "credentials") {
            return null;
          }

          const isValidPassword = await bcrypt.compare(
            password,
            existingAccount.password!
          );

          if (isValidPassword) {
            return {
              id: existingAccount._id as string,
              email: existingAccount.providerAccountId,
              role: "admin",
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.email = token.email as string;
      // session.user.role = "admin";
      return session;
    },
    async jwt({ token, account }) {
      if (account?.type === "credentials") {
        const validatedFields = SignInSchema.safeParse(account.credentials);
        if (validatedFields.success) {
          const { email } = validatedFields.data;
          const { data: existingAccount } = (await api.accounts.getByProvider(
            email
          )) as ActionResponse<IAccountDoc>;

          if (existingAccount) {
            token.sub = existingAccount._id as string;
            token.email = existingAccount.providerAccountId;
            token.role = "admin";
          }
        }
      }
      return token;
    },
    async signIn({ account }) {
      return account?.type === "credentials";
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});
