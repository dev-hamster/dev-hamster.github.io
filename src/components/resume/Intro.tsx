import React from 'react';

import { INTRO, TITLE } from 'constants/resume';

export const Intro = () => {
  return (
    <div className="mt-16 max-w-[768px] m-auto">
      <div className="mt-16 ml-6 mr-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[32px] font-bold text-pretty whitespace-pre-line">
            {TITLE}
          </p>
        </div>

        <Paragraph>
          <span className="highlight">
            개발 경험을 바탕으로 반복적인 QA 업무를 자동화하여 품질 효율을
            높이는 QA 엔지니어입니다.
          </span>
        </Paragraph>
        {INTRO.map((content, idx) => (
          <Paragraph key={idx}>{content}</Paragraph>
        ))}

        <div className="mt-6 flex flex-col gap-4 font-body">
          <div>
            <p className="flex gap-1 items-center text-sm font-medium text-gray-600 mb-1">
              <span>Blog</span>
            </p>
            <Link url="https://dev-hamster.github.io">
              https://dev-hamster.github.io
            </Link>
          </div>
          <div>
            <p className="flex gap-1 items-center text-sm font-medium text-gray-600 mb-1">
              <span>GitHub</span>
            </p>
            <Link url="https://github.com/dev-hamster">
              https://github.com/dev-hamster
            </Link>
          </div>
          <div>
            <p className="flex gap-1 items-center text-sm font-medium text-gray-600 mb-1">
              <span>Mail</span>
            </p>
            <p>
              <a
                href="mailto:dndbekfrl1@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                dndbekfrl1@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-3 text-base leading-7 text-gray-700">{children}</div>
  );
};

const Link = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={`
          flex w-fit gap-[2px] justify-center items-center
          text-blue-600
          `}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
