import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import GithubIcon from 'assets/ico-github.svg';
import LinkIcon from 'assets/ico-link.svg';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { WorkExperience as TWorkExperience } from 'types/resume';

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), 'span'],
  attributes: {
    ...(defaultSchema.attributes || {}),
    span: [
      ...((defaultSchema.attributes || {}).span || []),
      'className',
      'class',
      'style',
    ],
  },
};

const DescriptionItem = ({ text }: { text: string }) => {
  return (
    <div className='flex gap-2'>
      <Markdown rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}>
        {text}
      </Markdown>
    </div>
  );
};

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className='flex gap-2 '>
      <span>-</span>
      <Markdown rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}>
        {text}
      </Markdown>
    </div>
  );
};

const ProjectItem = ({
  title,
  titleCaption,
  organization,
  date,
  link,
  description,
  intro,
  contribution,
  techStack,
  team,
}: TWorkExperience) => {
  return (
    <div className='mt-3 font-body'>
      {/* 프로젝트명, 날짜 */}
      <div>
        <div className='flex items-center flex-wrap gap-[2px]'>
          <p className='font-bold'>{title}</p>
          {titleCaption && <p className=' '>{titleCaption}</p>}
        </div>
        {/* <p className="flex items-center gap-1 mt-2  leading-5 font-ubuntu">
          <CalendarIcon width={16} height={16} />
          {date}
        </p> */}
      </div>
      {/* 기술 스택 */}
      {techStack && techStack.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-2 font-ubuntu'>
          <ListItem text={`기술스택: ${techStack.join(', ')}`}></ListItem>
        </div>
      )}
      {/* 링크 */}
      {link && link.length > 0 && (
        <>
          {link.map(({ icon, url, text }) => (
            <a
              key={url}
              href={url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-[2px] mt-2 text-blue-600'
            >
              {icon === 'github' ? (
                <GithubIcon width={12} height={12} />
              ) : (
                <LinkIcon width={14} height={14} />
              )}
              {text || url}
            </a>
          ))}
        </>
      )}
      <div className='flex flex-col gap-1 mt-2'>
        {/* 조직명 */}
        {organization && <ListItem text={`근무처: ${organization}`} />}
        {/* 소개 */}
        {intro && <ListItem text={`소개: ${intro}`} />}
        {/* 팀 구성 */}
        {team && <ListItem text={`팀 구성: ${team}`} />}
        {/* 기여도 */}
        {contribution && <ListItem text={`기여도: ${contribution}%`} />}
        {/* 프로젝트 소개 */}
        {description.map((desc, idx) => (
          <ListItem key={idx} text={desc} />
        ))}
      </div>
    </div>
  );
};

export const WorkExperienceItem = ({ data }: { data: TWorkExperience[] }) => {
  return (
    <div className='flex flex-col gap-10'>
      {data.map(
        ({
          title,
          titleCaption,
          organization,
          date,
          description,
          intro,
          contribution,
          team,
          project,
        }) => (
          <div key={title} className='font-body'>
            {/* 프로젝트명, 날짜 */}
            <div>
              <div className='flex items-center flex-wrap gap-[8px]'>
                <p className='font-bold font-title'>{title}</p>
                {titleCaption && <p className=''>{titleCaption}</p>}
              </div>
              <p className='flex items-center gap-1 mt-2 leading-5 font-ubuntu'>
                <CalendarIcon width={16} height={16} />
                {date}
              </p>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              {description.map((desc, idx) => (
                <DescriptionItem key={idx} text={desc} />
              ))}
            </div>
            <div className='flex flex-col gap-[8px]'>
              {project?.map((data) => (
                <ProjectItem key={data.title} {...data} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
