import React from 'react';

import { SKILLS_AND_TOOLS } from 'constants/resume';
import { Section } from './Section';

export const SkillsAndTools = () => {
  return (
    <Section title="Skills & Tools">
      <div className="flex flex-col gap-5">
        {SKILLS_AND_TOOLS.map(({ title, content }) => (
          <div key={title} className="flex flex-col gap-2">
            <p className="font-ubuntu font-medium text-gray-900">{title}</p>
            <p className="text-base leading-7 text-gray-700">{content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
