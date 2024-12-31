import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='m-auto my-4 px-14 max-w-[768px]'>{children}</div>;
};
