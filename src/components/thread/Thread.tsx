import React from 'react';

interface ThreadProps {
  children: React.ReactNode;
}

const Thread: React.FC<ThreadProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className='thread-container my-6 p-4 bg-gray-50 rounded-2xl border border-gray-200'>
      <div className='space-y-1'>
        {childrenArray.map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: index,
              isLast: index === childrenArray.length - 1,
            } as any);
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default Thread;
