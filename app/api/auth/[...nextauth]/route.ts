import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

const ALLOWED_USERS = ['diskon7@hotmail.com']

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'login'
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          prompt: 'login'
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = ALLOWED_USERS.includes(user.email ?? '')
      if (isAllowedToSignIn) {
        return true
      } else {
        return '/unauthorized'
      }
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/dashboard', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }