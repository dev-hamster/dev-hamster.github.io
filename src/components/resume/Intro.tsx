import React from 'react';
import Markdown from 'react-markdown';

import EarthIcon from 'assets/ico-earth.svg';
import EmailIcon from 'assets/ico-email.svg';
import GithubIcon from 'assets/ico-github.svg';

import { INTRO } from 'constants/resume';

export const Intro = () => {
  return (
    <div className='mt-16 max-w-[768px] m-auto'>
      <div className='mt-16 ml-6 mr-6'>
        <div className='flex flex-wrap items-center gap-3'>
          <p className='font-title font-bold text-pretty whitespace-pre-line'>
            품질을 높이는 활동이라면 무엇이든 즐겁게 하는 <br /> 박진아 입니다.
          </p>
        </div>

        {INTRO.map((content, idx) => (
          <Paragraph key={idx}>
            <Markdown>{content}</Markdown>
          </Paragraph>
        ))}

        <div className='mt-5 flex flex-col gap-[12px] font-body'>
          <div>
            <p className='flex gap-1 items-center'>
              <span>Blog</span>
            </p>
            <Link url='https://dev-hamster.github.io'>
              https://dev-hamster.github.io
            </Link>
          </div>
          <div>
            <p className='flex gap-1 items-center'>
              <span>GitHub</span>
            </p>
            <Link url='https://github.com/dev-hamster'>
              https://github.com/dev-hamster
            </Link>
          </div>
          <div>
            <p className='flex gap-1 items-center'>
              <span>Mail</span>
            </p>
            <p>
              <a href='mailto:dndbekfrl1@gmail.com' className='text-blue-600'>
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
  return <div className='mt-2 text-base leading-6'>{children}</div>;
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
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};
