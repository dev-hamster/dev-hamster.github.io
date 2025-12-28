import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import * as React from 'react';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='bg-white flex h-[56px] items-center justify-between px-4 py-1 w-full max-w-[430px] mx-auto'>
      <Link to='/' className='font-bold text-2xl text-black font-ubuntu cursor-pointer no-underline'>
        dev-hamster
      </Link>
      <nav className='flex gap-2 items-center text-base text-[#222] font-ubuntu'>
        <Link
          to='/'
          className={`w-[48px] cursor-pointer no-underline ${!pathname.startsWith('/about') ? 'text-[#222]' : 'text-[#838383]'}`}
        >
          Blog
        </Link>
        <Link
          to='/about'
          className={`w-[48px] cursor-pointer no-underline ${pathname.startsWith('/about') ? 'text-[#222]' : 'text-[#838383]'}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
};
