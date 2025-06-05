import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

async function NavBar() {
  const session = await auth();
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/Group 5.png" alt="Yc logo" width={300} height={100} />
        </Link>
        <div className="flex gap-6 text-[18px] font-bold">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  'use server';
                  await signOut({redirectTo : "/"});
                }}
              >
                <button className="cursor-pointer text-red-600" type="submit">
                  Logout
                </button>
              </form>
              <Link href={`/user/${session.user?.id}`}>
                <span>
                    {session.user.name}
                </span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  'use server';
                  await signIn();
                }}
              >
                <button className="cursor-pointer" type="submit">
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
