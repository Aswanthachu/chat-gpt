import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  
  ],
}
export default NextAuth(authOptions)