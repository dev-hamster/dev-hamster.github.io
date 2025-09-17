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
    <div
      className='flex flex-col gap-[14px] w-full min-w-[210px] pt-4 pb-8 border-b-2 
    bg-white'
    >
      <div className='flex justify-between'>
        <p className='text font-semibold text-pretty line-clamp-2 font-body'>
          {title}
        </p>
        {src && (
          <GatsbyImage
            className='min-w-20 w-20 h-[53px] rounded-md'
            image={src}
            alt={title}
          />
        )}
      </div>
      <div
        className='w-full line-clamp-2 text-pretty leading-6'
        style={summaryStyle}
      >
        {body}
      </div>
    </div>
  );
};
