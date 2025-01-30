import React from 'react';

import { SKILLS_AND_TOOLS } from 'constants/resume';
import { Section } from './Section';

export const SkillsAndTools = () => {
  return (
    <Section title='Skills & Tools'>
      <div className='flex flex-col gap-4'>
        {SKILLS_AND_TOOLS.map(({ title, content }) => (
          <div key={title}>
            <p className='w-fit rounded-md pl-1 pr-1 pt-[1px] pb-[1px] bg-blue-200 text-base text-midnight-500 font-ubuntu'>
              {title}
            </p>
            <p className='mt-2 text-base leading-5'>{content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
