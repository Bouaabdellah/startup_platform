import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

async function NavBar() {
  const session = await auth();
  return (
    <header className='max-w-7xl mx-auto mb-4 px-6'>
      <nav className="flex justify-between items-center">
        <Link href="/" className="w-48 md:w-68 lg:w-78 relative">
          <Image src="/Group 5.png" alt="Yc logo" width={300} height={100} layout="responsive"/>
        </Link>
        <div className="flex flex-col items-center text-[12px] sm:text-[18px] sm:flex-row sm:gap-6 font-semibold sm:font-bold">
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
              <Link href={`/user/${session?.id}`}>
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
