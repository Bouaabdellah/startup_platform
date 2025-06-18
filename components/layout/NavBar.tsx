import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BadgePlus, LogOut } from 'lucide-react';

async function NavBar() {
  const session = await auth();
  return (
    <header className="max-w-7xl mx-auto mb-4 px-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="w-48 md:w-68 lg:w-78 relative">
          <Image
            src="/Group 5.png"
            alt="Yc logo"
            width={300}
            height={100}
            layout="responsive"
          />
        </Link>
        <div className="flex gap-3 items-center text-[12px] sm:text-[18px] sm:gap-6 font-semibold sm:font-bold">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="sm:hidden" />
              </Link>
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
                className='flex items-center'
              >
                <button className="cursor-pointer text-red-600" type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="sm:hidden" />
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session.user.image || ''}
                    alt={session.user.name || ''}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
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
