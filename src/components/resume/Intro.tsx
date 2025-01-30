import React from 'react';

import LinkIcon from 'assets/ico-earth-purple.svg';
import EarthIcon from 'assets/ico-earth.svg';
import EmailIcon from 'assets/ico-email.svg';
import GithubIcon from 'assets/ico-github.svg';

export const Intro = () => {
  return (
    <div className='mt-16 max-w-[768px] m-auto'>
      <div className='mt-16 ml-6 mr-6'>
        <div className='flex items-center gap-3'>
          <p className='text-2xl font-bold'>박진아</p>
          <p className='text-xl'>프론트엔드 개발자</p>
        </div>
        <Paragraph>
          저는
          <strong>
            사용자와 빠른 상호작용을 보장하고, 효율적인 개발 환경을 구축하는
            프론트엔드 개발자
          </strong>
          입니다.
        </Paragraph>
        <Paragraph>
          <strong>React Query</strong>의 낙관적 업데이트와 캐싱 전략으로
          '좋아요' 기능을 즉시 처리하고, API 호출을 50% 절감했습니다. 또한,
          리플로우 최적화로 드래그 성능을 60% 향상시켰습니다.
        </Paragraph>
        <Paragraph>
          <strong>Husky와 Docker</strong>로 <strong>커밋 컨벤션 자동화</strong>
          와<strong>CI/CD 파이프라인 구축</strong>을 경험하며, 현재는
          <strong>FSD</strong> 적용으로 <strong>유지보수성</strong>을 강화하는
          프로젝트를 진행 중입니다.
          <strong>팀 생산성을 높여 제품 개발 속도에 기여하는 개발자</strong>로
          성장하고자 합니다.
        </Paragraph>

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
  return <p className='mt-2 text-base leading-6'>{children}</p>;
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
          flex w-fit gap-[2px] justify-center items-center pt-1 pb-1 pl-2 pr-2 border-[1px] rounded-3xl text-xs ${style[color]} underline`}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};
