import { PageLayout } from 'components/Layout';
import { HeadFC } from 'gatsby';
import React from 'react';

const AboutPage = () => {
  return <PageLayout>
<div className='h-[100px] flex flex-col items-center justify-center'>
 <div className='text-2xl'>￿</div>
 <div>준비중입니다.</div>
</div>

  </PageLayout>
};

export default AboutPage;

export const Head: HeadFC = () => <title>dev-hamster</title>;