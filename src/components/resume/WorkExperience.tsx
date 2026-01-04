import React from 'react';

import { WORK_EXPERIENCE } from 'constants/resume';

import { Section } from './Section';
import { WorkExperienceItem } from './WorkExperienceItem';

export const WorkExperience = () => {
  return (
    <Section title="Work Experience">
      <WorkExperienceItem data={WORK_EXPERIENCE} />
    </Section>
  );
};
