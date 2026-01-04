import React from 'react';

import {
  CertificatesAndAwards,
  Education,
  Footer,
  Intro,
  OtherExperience,
  Project,
  SkillsAndTools,
  WorkExperience,
} from 'components/resume/index';

import '../styles/resume.css';

const ResumePage = () => {
  return (
    <div className="font-noto resume-page">
      <Intro />
      <SkillsAndTools />
      <WorkExperience />
      <Project />
      <Education />
      <CertificatesAndAwards />
      <OtherExperience />
      <Footer />
    </div>
  );
};

export default ResumePage;
