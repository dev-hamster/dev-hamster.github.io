import React from 'react';

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className='mt-10 max-w-[768px] m-auto'>
      <div className='w-full h-[2px] bg-[#E2E8F0]' />
      <div className='ml-6 mr-6'>
        <p className='mt-8 text-xl font-bold text-[#2D3748]'>{title}</p>
        <div className='mt-7'>{children}</div>
      </div>
    </section>
  );
};
