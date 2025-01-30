import React from 'react';

import {
  Footer,
  Intro,
  OtherExperience,
  Project,
  SkillsAndTools,
  WorkExperience,
} from 'components/resume/';

const ResumePage = () => {
  return (
    <div className='font-noto  text-midnight-500'>
      <Intro />
      <SkillsAndTools />
      <WorkExperience />
      <Project />
      <OtherExperience />
      <Footer />
    </div>
  );
};

export default ResumePage;
