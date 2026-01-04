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

// 마크다운 커스텀 컴포넌트
const markdownComponents = {
  // 리스트 스타일
  ul: (props: any) => <ul {...props} style={{ listStyle: 'revert' }} />,
  ol: (props: any) => (
    <ol
      {...props}
      style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}
    />
  ),
  li: (props: any) => <li {...props} style={{ marginBottom: '0.25rem' }} />,
};

export const LogCard = ({ title, body, date, tags }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = formatDateToKorean(date);

  // body가 3줄 이상인지 확인하기 위한 간단한 체크
  const bodyLines = body.split('\n').filter((line) => line.trim().length > 0);
  const shouldShowToggle = bodyLines.length > 3 || body.length > 200;

  return (
    <div className="bg-white border-b border-[#F2F2F2] border-solid overflow-hidden flex flex-col py-[33px]">
      {/* Date */}
      {formattedDate && (
        <div className="mb-2">
          <p className="text-[13px] text-gray-500 font-ubuntu font-normal">
            {formattedDate}
          </p>
        </div>
      )}

      {/* Content */}
      <div className="relative">
        <div
          className={`overflow-hidden ${
            !isExpanded
              ? 'line-clamp-3 [&>*]:line-clamp-none [&>p]:line-clamp-3'
              : ''
          }`}
        >
          <div className="markdown-body text-[15px] text-gray-900 font-ubuntu font-normal leading-relaxed">
            <Markdown
              rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
              components={markdownComponents}
            >
              {body}
            </Markdown>
          </div>
        </div>
        {shouldShowToggle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 w-full flex justify-end text-[14px] text-[#1DA1F2] font-ubuntu font-normal hover:underline cursor-pointer transition-colors duration-150"
          >
            {isExpanded ? '접기' : '더보기'}
          </button>
        )}
      </div>
    </div>
  );
};
