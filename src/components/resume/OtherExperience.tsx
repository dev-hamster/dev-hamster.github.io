import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import LinkIcon from 'assets/ico-link.svg';

import { OTHER_EXPERIENCE } from 'constants/resume';
import { Section } from './Section';

export const OtherExperience = () => {
  return (
    <Section title='Other Experience'>
      <div className='flex flex-col gap-4'>
        {OTHER_EXPERIENCE.map(
          ({ title, organization, date, description, link }) => (
            <div key={title}>
              {/* 활동명 */}
              <div className='flex items-center gap-2 flex-wrap'>
                <p className='text-base font-bold text-midnight-900'>{title}</p>
                {organization && (
                  <p className='text-base text-midnight-900'>
                    — {organization}
                  </p>
                )}
              </div>
              {/* 활동 기간 */}
              <p className='flex items-center gap-1 mt-2 text-base leading-5 font-ubuntu'>
                <CalendarIcon width={16} height={16} />
                {date}
              </p>
              {/* 설명 */}
              <p className='mt-1 text-base'>{description}</p>
              {/* 링크 */}
              {link &&
                link.length > 0 &&
                link.map(({ url }) => (
                  <a
                    key={url}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-[2px] mt-1 text-base
                    '
                  >
                    <LinkIcon width={14} height={14} />
                    <span className='truncate'>{url}</span>
                  </a>
                ))}
            </div>
          )
        )}
      </div>
    </Section>
  );
};
