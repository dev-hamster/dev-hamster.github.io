import React from 'react';

import { WORK_EXPERIENCE } from 'constants/resume';

import { ProjectItem } from './ProjectItem';
import { Section } from './Section';

export const WorkExperience = () => {
  return (
    <Section title='Work Experience'>
      <ProjectItem data={WORK_EXPERIENCE} />
    </Section>
  );
};
