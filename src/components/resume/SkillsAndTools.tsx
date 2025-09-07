import React from 'react';

import { SKILLS_AND_TOOLS } from 'constants/resume';
import { Section } from './Section';

export const SkillsAndTools = () => {
  return (
    <Section title='Skills & Tools'>
      <div className='flex flex-col gap-4'>
        {SKILLS_AND_TOOLS.map(({ title, content }) => (
          <div className='flex flex-col gap-[8px]'>
            <p className='font-ubuntu'>{title}</p>
            <p className='text-base leading-5'>{content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
