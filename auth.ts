import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { client } from './sanity/lib/client';
import { getUser } from './sanity/lib/queries';
import { writeClient } from './sanity/lib/writeClient';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      const existUser = await client
        .withConfig({ useCdn: false })
        .fetch(getUser, { id: profile?.id });
      
      // create user
      if (!existUser) {
        await writeClient.create({
          _type: 'author',
          id: profile?.id,
          email,
          name,
          username: profile?.login,
          image,
          bio: profile?.bio || '',
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(getUser, { id: profile?.id });
        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
