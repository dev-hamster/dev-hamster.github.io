import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import GithubIcon from 'assets/ico-github.svg';
import LinkIcon from 'assets/ico-link.svg';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { Project as TProject } from 'types/resume';

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

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-3 leading-7 text-gray-700">
      <span className="text-gray-400 flex-shrink-0">•</span>
      <Markdown rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}>
        {text}
      </Markdown>
    </div>
  );
};

export const ProjectItem = ({ data }: { data: TProject[] }) => {
  return (
    <div className="flex flex-col gap-10">
      {data.map(
        ({
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
        }) => (
          <div key={title} className="font-body">
            {/* 프로젝트명, 날짜 */}
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <p className="font-bold text-gray-900">{title}</p>
                {titleCaption && (
                  <p className="text-gray-600">— {titleCaption}</p>
                )}
              </div>
              <p className="flex items-center gap-1 mt-2 leading-6 text-sm text-gray-600 font-ubuntu">
                <CalendarIcon
                  width={16}
                  height={16}
                  className="text-gray-500"
                />
                {date}
              </p>
            </div>
            {/* 링크 */}
            {link && link.length > 0 && (
              <>
                {link.map(({ icon, url, text }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {icon === 'github' ? (
                      <div className="mt-1">
                        <GithubIcon width={12} height={12} />
                      </div>
                    ) : (
                      <LinkIcon width={14} height={14} />
                    )}
                    {text || url}
                  </a>
                ))}
              </>
            )}
            {/* 기술 스택 */}
            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 font-ubuntu">
                <ListItem text={`기술스택: ${techStack.join(', ')}`}></ListItem>
              </div>
            )}
            <div className="flex flex-col gap-2 mt-3">
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
        )
      )}
    </div>
  );
};
