import React from 'react';
import { Header } from './Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white relative w-full">
      <Header />
      <div className="relative w-full blog-container bg-white">
        {children}
      </div>
    </main>
  );
};

export { PageLayout };
