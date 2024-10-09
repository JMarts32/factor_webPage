import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/db"

export default NextAuth({
  providers: [
    // TODO: Configure the providers https://next-auth.js.org/providers/google
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
    ],
  adapter: MongoDBAdapter(client),
})