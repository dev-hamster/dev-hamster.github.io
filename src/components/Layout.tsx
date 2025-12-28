import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative w-full max-w-[430px] px-[17px] mx-auto bg-white'>{children}</div>;
};
