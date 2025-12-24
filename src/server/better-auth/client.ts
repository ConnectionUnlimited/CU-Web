import { createAuthClient } from "better-auth/react";
// import { passkeyClient } from "@better-auth/passkey/client";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  // plugins: [passkeyClient()],
});

export const { signIn, signOut, signUp } = authClient;

export type Session = typeof authClient.$Infer.Session;
