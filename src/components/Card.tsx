import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';
import { CardProps } from 'types/post';

const summaryStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: '16px',
  color: '#666',
};

export const Card = ({ title, body, thumbnail }: CardProps) => {
  const src = thumbnail ? getImage(thumbnail) : '';

  return (
    <div className='flex flex-col gap-4 w-full h-full md:h-[300px] p-6 rounded-xl border border-black bg-white'>
      <div className='w-full md:aspect-[50/47] aspect-[16/9] rounded-xl bg-slate-300 overflow-hidden'>
        {src && (
          <GatsbyImage className='object-contain' image={src} alt={title} />
        )}
      </div>

      <p className='text-lg font-semibold text-balance line-clamp-2'>{title}</p>

      <div className='line-clamp-3' style={summaryStyle}>
        {body}
      </div>
    </div>
  );
};
