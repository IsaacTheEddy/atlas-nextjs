import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { fetchUser } from "./lib/data";
import bcrpyt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    Credentials({
    credentials: {
      email: {
        label: "Email",
      },
      password: {
        label: "Password",
        type: "password",
      },
    },
    //@ts-ignore
    authorize: async (credentials: { email: string; password: string }) => {
      const { email, password } = credentials;
      const user = await fetchUser(email);
      if (!user) return null; //@ts-ignore
      const passwordsMatch = await bcrpyt.compare(password, user.password)
      if (passwordsMatch) return user;
      return null;
    },
  }),
  ],
  callbacks: {
    authorized: async({auth}) =>{
        // Logged in users are authenicated, otherwise redirect to login page
        return !!auth
    }
  },
});

