import { PageLayout } from 'components/Layout';
import { HeadFC } from 'gatsby';
import React from 'react';

const AboutPage = () => {
  return <PageLayout>안녕하세요 about page입니다.</PageLayout>
};

export default AboutPage;

export const Head: HeadFC = () => <title>dev-hamster</title>;