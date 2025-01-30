import React from 'react';

import { PROJECT } from 'constants/resume';
import { ProjectItem } from './ProjectItem';
import { Section } from './Section';

export const Project = () => {
  return (
    <Section title='Project'>
      <ProjectItem data={PROJECT} />
    </Section>
  );
};
