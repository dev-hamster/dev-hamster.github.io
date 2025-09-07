import React from "react";

import {
  CertificatesAndAwards,
  Education,
  Footer,
  Intro,
  OtherExperience,
  Project,
  SkillsAndTools,
  WorkExperience,
} from "components/resume/index";

const ResumePage = () => {
  return (
    <div className="font-noto">
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
