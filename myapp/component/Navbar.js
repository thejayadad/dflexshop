'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();


  return (
    <header className="newhead" style={{height: "100px"}}>
       <div className="flex-1">
          <Link 
          href={'/'}
          className="normal-case text-xl">Donut Shop</Link>
        </div>
        <div className='flex-none'>
        <ul className='ul-menu'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/shop'}>Cafe</Link></li>
        {session?.user ? (
      <li>
        <details>
          <summary>
            {session?.user?.email}
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link href={'/create-donut'}>Create Donut</Link></li>
            <li>
            <button onClick={() => { signOut(); }}>
              Logout
            </button>
            </li>
          </ul>
        </details>
      </li>
      ) : (
        <>
        <li><Link href={'/register'}>Register</Link></li>
        <li><Link href={'/login'}>Login</Link></li>
        </>
        )}
        </ul>
        </div>

    </header>
  );
};

export default Navbar;

