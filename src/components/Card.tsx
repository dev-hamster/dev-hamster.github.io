import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CardProps } from 'types/post';
import { extractTextFromMDX, formatDateToKorean } from '../utils';

export const Card = ({ title, body, thumbnail, date, tags }: CardProps) => {
  const src = thumbnail ? getImage(thumbnail) : '';
  const cleanBody = extractTextFromMDX(body);
  const formattedDate = formatDateToKorean(date);
  const tagsString = Array.isArray(tags) && tags.length > 0
    ? tags
        .map(tag => tag?.trim())
        .filter(Boolean)
        .sort()
        .map(tag => `#${tag}`)
        .join(', ')
    : '';

  return (
    <div className='bg-white border-b border-[#F2F2F2] border-l-0 border-r-0 border-t-0 border-solid h-[219px] overflow-hidden flex flex-col py-[33px]'>
      {/* Tags */}
      {tagsString && (
        <p className='text-[13px] text-[#222] font-ubuntu font-normal leading-normal w-[293px] whitespace-pre-wrap '>
          {tagsString}
        </p>
      )}
      
      {/* Title and Thumbnail */}
      <div className={`flex justify-between items-start gap-4 ${tagsString ? 'mt-[8px]' : ''}`}>
        <p className='text-[20px] text-black font-ubuntu font-bold leading-normal flex-1 min-w-0 whitespace-pre-wrap line-clamp-2'>
          {title}
        </p>

        {/* Thumbnail */}
        {src && (
          <div className='w-[85px] min-w-[85px] h-[63px] flex-shrink-0'>
            <GatsbyImage
              className='w-full h-full object-cover'
              image={src}
              alt={title}
            />
          </div>
        )}
      </div>
      
      {/* Description */}
      <p className='text-[16px] text-[#222] font-ubuntu font-normal leading-normal w-[293px] whitespace-pre-wrap line-clamp-2 mt-[23px]'>
        {cleanBody}
      </p>
      
      {/* Date */}
      {formattedDate && (
        <p className='text-[13px] text-[#222] font-ubuntu font-normal leading-normal whitespace-pre-wrap mt-[20px]'>
          {formattedDate}
        </p>
      )}
    </div>
  );
};
