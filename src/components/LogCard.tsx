import React, { useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { CardProps } from 'types/post';
import { formatDateToKorean } from '../utils';

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), 'span'],
  attributes: {
    ...(defaultSchema.attributes || {}),
    span: [
      ...((defaultSchema.attributes || {}).span || []),
      'className',
      'class',
      'style',
    ],
  },
};

export const LogCard = ({ title, body, date, tags }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = formatDateToKorean(date);

  // body가 3줄 이상인지 확인하기 위한 간단한 체크
  const bodyLines = body.split('\n').filter((line) => line.trim().length > 0);
  const shouldShowToggle = bodyLines.length > 3 || body.length > 200;

  return (
    <div className='bg-white border-b border-[#F2F2F2] border-solid overflow-hidden flex flex-col py-[33px]'>
      {/* Date */}
      {formattedDate && (
        <p className='text-[13px] text-[#222] font-ubuntu font-normal leading-normal whitespace-pre-wrap'>
          {formattedDate}
        </p>
      )}
      {/* Description */}
      <div className='relative'>
        <div
          className={`overflow-hidden ${
            !isExpanded
              ? 'max-h-[4.5rem]'
              : ''
          }`}
        >
          <div className='markdown-body text-[16px] text-[#222] font-ubuntu font-normal leading-normal'>
            <Markdown
              rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
            >
              {body}
            </Markdown>
          </div>
        </div>
        {shouldShowToggle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-2 text-[14px] text-[#3a97ed] font-ubuntu font-normal hover:underline cursor-pointer'
          >
            {isExpanded ? '접기' : '더보기'}
          </button>
        )}
      </div>
    </div>
  );
};
