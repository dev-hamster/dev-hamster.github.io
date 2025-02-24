import { Link } from 'gatsby';
import * as React from 'react';

export const Header = () => {
  return (
    <header className='text-xl m-auto my-4 px-14 max-w-[768px] font-bold font-ubuntu'>
      <Link to='/' className='m-auto cursor-pointer'>
        dev-hamster
      </Link>
    </header>
  );
};
