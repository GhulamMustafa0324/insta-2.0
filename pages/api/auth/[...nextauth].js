import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  //   ye normal signin page k lie
  //   theme: {
  //     logo: "https://links.papareact.com/sq8",
  //     brandColor: "#F13287",
  //     colorScheme:"auto"
  //   },

  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ user, token, session }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});