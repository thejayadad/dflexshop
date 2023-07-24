'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { NavLinks } from '@/constants';

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHideDropdown = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar bg-base-100 border-b py-5 px-8 flex items-center justify-between">

      {/* Logo */}
      <div className="cursor">
        <Link href={''} className="btn normal-case text-lg">
          Donut Shop
        </Link>
      </div>

      {/* Menu Button - Hidden on Large Screens */}
      <div className="lg:hidden">
        <button
          className="btn btn-sm"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Hidden Menu - Shown on Mobile */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-base-100">
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={handleHideDropdown}
          >
            X
          </button>
          <ul className="menu menu-vertical text-small flex flex-col items-center justify-center h-full">
            {NavLinks.map((link) => (
              <li key={link.text}>
                <Link
                  className="btn btn-sm my-4"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            {session?.user ? (
              <>
                <li>
                  <details>
                    <summary className="bg-secondary">
                      User: {session.user?.email}
                    </summary>
                    <ul className="p-2 bg-base-100 flex gap-3">
                      <li>
                        <Link className="btn btn-sm" href={'/create-donut'}>
                          Create Donut
                        </Link>
                      </li>
                      <button onClick={() => { signOut(); handleHideDropdown() }}>
                        Logout
                      </button>
                    </ul>
                  </details>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div className="flex flex-col items-center">
                    <Link className="btn btn-sm mb-4" href={'/register'}>
                      Register
                    </Link>
                    <button onClick={() => { signIn(); handleHideDropdown() }}>
                      Log in
                    </button>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Menu Links - Shown on Large Screens */}
      <div className="hidden lg:flex gap-6">
        {NavLinks.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="btn btn-sm"
          >
            {link.text}
          </Link>
        ))}
      </div>
      {session?.user ? (
        <>
          <details className="lg:hidden">
            <summary className="bg-secondary">
              User: {session.user?.email}
            </summary>
            <ul className="p-2 bg-base-100 flex gap-3">
              <li>
                <Link className="btn btn-sm" href={'/create-donut'}>
                  Create Donut
                </Link>
              </li>
              <button onClick={() => { signOut(); }}>
                Logout
              </button>
            </ul>
          </details>
        </>
      ) : (
        <>
          <div className="hidden lg:flex">
            <Link className="btn btn-sm" href={'/register'}>
              Register
            </Link>
            <button onClick={() => { signIn(); }}>Log in</button>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
