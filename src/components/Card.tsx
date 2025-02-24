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
    <div className='flex flex-col gap-[14px] w-full min-w-[210px] h-[323px] pt-4 pl-[14px] pr-[14px] rounded-xl border border-black bg-white'>
      {src && (
        <GatsbyImage
          className='self-center min-w-[192px] w-full h-[145px] rounded-xl'
          image={src}
          alt={title}
        />
      )}
      <p className='h-[55px] text font-semibold text-pretty line-clamp-2'>
        {title}
      </p>
      <div className='w-full line-clamp-3 text-pretty' style={summaryStyle}>
        {body}
      </div>
    </div>
  );
};
