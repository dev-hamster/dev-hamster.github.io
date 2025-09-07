import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import LinkIcon from 'assets/ico-link.svg';

import { EDUCATION } from 'constants/resume';
import { Section } from './Section';

export const Education = () => {
  return (
    <Section title='Education'>
      <div className='flex flex-col gap-4 font-body'>
        {EDUCATION.map(({ title, organization, date, description, link }) => (
          <div key={title}>
            {/* 활동명 */}
            <div className='flex items-center gap-2 flex-wrap'>
              <p className=' '>{title}</p>
              {organization && <p className=''>— {organization}</p>}
            </div>
            {/* 활동 기간 */}
            <p className='flex items-center gap-1 mt-2  leading-5 font-ubuntu'>
              <CalendarIcon width={16} height={16} />
              {date}
            </p>
            {/* 설명 */}
            <p className='mt-1 '>{description}</p>
            {/* 링크 */}
            {link &&
              link.length > 0 &&
              link.map(({ url }) => (
                <a
                  key={url}
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-[2px] mt-1 
                  text-blue-600  
                  '
                >
                  <LinkIcon width={20} height={20} />
                  <span className='truncate'>{url}</span>
                </a>
              ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
