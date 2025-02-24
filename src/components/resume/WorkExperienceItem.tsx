import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import GithubIcon from 'assets/ico-github.svg';
import LinkIcon from 'assets/ico-link.svg';

import Markdown from 'react-markdown';
import { WorkExperience as TWorkExperience } from 'types/resume';

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className='flex gap-2 text-base'>
      <div className='w-2 min-w-2 min-h-2 h-2 mt-2 rounded-sm bg-midnight-200 ' />
      <Markdown>{text}</Markdown>
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
    <div className='mt-3 ml-4'>
      {/* 프로젝트명, 날짜 */}
      <div>
        <div className='flex items-center flex-wrap gap-2'>
          <p className='text-base font-bold text-midnight-900'>— {title}</p>
          {titleCaption && (
            <p className='text-base text-midnight-900'>— {titleCaption}</p>
          )}
        </div>
        <p className='flex items-center gap-1 mt-2 text-base leading-5 font-ubuntu'>
          <CalendarIcon width={16} height={16} />
          {date}
        </p>
      </div>
      {/* 기술 스택 */}
      {techStack && techStack.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-2 font-ubuntu'>
          {techStack.map((tech, idx) => (
            <p
              key={idx}
              className='pl-1 pr-1 pt-[1px] pb-[1px] w-fit bg-gray-300 rounded-sm text-sm text-midnight-500'
            >
              {tech}
            </p>
          ))}
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
              className='flex items-center  gap-[2px] mt-2 text-sm'
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
    <div className='flex flex-col gap-7'>
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
          <div key={title}>
            {/* 프로젝트명, 날짜 */}
            <div>
              <div className='flex items-center flex-wrap gap-2'>
                <p className='text-base font-bold text-midnight-900'>{title}</p>
                {titleCaption && (
                  <p className='text-base text-midnight-900'>
                    — {titleCaption}
                  </p>
                )}
              </div>
              <p className='flex items-center gap-1 mt-2 text-base leading-5 font-ubuntu'>
                <CalendarIcon width={16} height={16} />
                {date}
              </p>
            </div>
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
            {project?.map((data) => (
              <ProjectItem key={data.title} {...data} />
            ))}
          </div>
        )
      )}
    </div>
  );
};
