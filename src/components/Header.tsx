import { Link } from 'gatsby';
import * as React from 'react';

export const Header = () => {
  return (
    <header className='bg-white flex h-[56px] items-center justify-between px-4 py-1 w-full max-w-[430px] mx-auto'>
      <Link to='/' className='font-bold text-2xl text-black font-ubuntu cursor-pointer no-underline'>
        dev-hamster
      </Link>
      <nav className='flex gap-2 items-center text-base text-[#222] font-ubuntu'>
        <Link to='/' className='w-[48px] cursor-pointer no-underline'>
          Blog
        </Link>
        <Link to='/resume' className='w-[48px] cursor-pointer no-underline'>
          About
        </Link>
      </nav>
    </header>
  );
};
