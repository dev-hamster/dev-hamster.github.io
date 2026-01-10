import React from 'react';

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mt-16 max-w-[768px] m-auto">
      <div className="w-full h-[1px] bg-gray-200" />
      <div className="ml-6 mr-6">
        <h2 className="mt-10 mb-8 font-title font-bold text-gray-900">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};
