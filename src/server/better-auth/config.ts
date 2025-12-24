import { betterAuth } from "better-auth";
import { passkey } from "@better-auth/passkey";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env } from "@/env";
import { db } from "@/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    // async sendResetPassword(data, request) {
    // An email to the user with a link to reset their password
    // },
  },
  socialProviders: {
    github: {
      clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
      // redirectURI: "http://127.0.0.1:3000/api/auth/callback/github",
    },
    // google: {
    //   clientId: env.BETTER_AUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
    //   redirectURI: "http://127.0.0.1:3000/api/auth/callback/google",
    // },
    // gitlab: {
    //   clientId: env.BETTER_AUTH_GITLAB_CLIENT_ID,
    //   clientSecret: env.BETTER_AUTH_GITLAB_CLIENT_SECRET,
    //   redirectURI: "http://127.0.0.1:3000/api/auth/callback/gitlab",
    // },
  },
  plugins: [passkey()],
});

export type Session = typeof auth.$Infer.Session;
