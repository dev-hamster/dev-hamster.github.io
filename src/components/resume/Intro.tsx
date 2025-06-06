import React from 'react';
import Markdown from 'react-markdown';

import LinkIcon from 'assets/ico-earth-purple.svg';
import EarthIcon from 'assets/ico-earth.svg';
import EmailIcon from 'assets/ico-email.svg';
import GithubIcon from 'assets/ico-github.svg';
import { INTRO } from 'constants/resume';

export const Intro = () => {
  return (
    <div className='mt-16 max-w-[768px] m-auto'>
      <div className='mt-16 ml-6 mr-6'>
        <div className='flex flex-wrap items-center gap-3'>
          <p className='text-2xl font-bold'>박진아</p>
          <p className='text-xl'>
            프론트엔드 경험을 바탕으로 품질을 우선시하는 QA엔지니어로
            성장하겠습니다.
          </p>
        </div>

        {INTRO.map((content, idx) => (
          <Paragraph key={idx}>
            <Markdown>{content}</Markdown>
          </Paragraph>
        ))}

        <div className='mt-5'>
          <div className='flex gap-1 items-center ml-2'>
            <EmailIcon />
            <p className='text-sm text-midnight-900'>dndbekfrl1@gmail.com</p>
          </div>
          <div className='flex gap-2 mt-3'>
            <Link url='https://dev-hamster.github.io/' color='blue'>
              <EarthIcon width='16' height='16' />
              blog
            </Link>
            <Link url='https://github.com/dev-hamster' color='black'>
              <GithubIcon width='14' height='14' />
              /dev-hamster
            </Link>
            <Link
              url='https://drive.google.com/file/d/1CWnED9njH33VRVOfST5swQVGY2FDv8Q0/view?usp=drive_link'
              color='purple'
            >
              <LinkIcon width='16' height='16' stroke='red' />
              portfolio
            </Link>
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
  color,
}: {
  url: string;
  children: React.ReactNode;
  color: 'blue' | 'black' | 'purple';
}) => {
  const style: Record<typeof color, string> = {
    blue: 'bg-blue-200 border-blue-900 text-blue-900 ',
    black: 'bg-gray-200 border-black text-black-900',
    purple: 'bg-purple-200 border-purple-900 text-purple-900',
  };

  return (
    <a
      className={`
          flex w-fit gap-[2px] justify-center items-center pt-1 pb-1 pl-2 pr-2 border-[1px] rounded-3xl text-xs ${style[color]}`}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};
