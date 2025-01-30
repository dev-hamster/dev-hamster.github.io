import { Link } from 'gatsby';
import * as React from 'react';

export const Header = () => {
  return (
    <header className='text-xl w-full py-4 font-bold font-ubuntu'>
      <Link to='/' className='m-auto px-14 max-w-[768px] cursor-pointer'>
        dev-hamster
      </Link>
    </header>
  );
};
