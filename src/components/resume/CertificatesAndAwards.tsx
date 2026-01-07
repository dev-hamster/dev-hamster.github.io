import React from 'react';

import CalendarIcon from 'assets/ico-calendar.svg';
import LinkIcon from 'assets/ico-link.svg';

import { CERTIFICATES_AND_AWARDS } from 'constants/resume';
import { Section } from './Section';

export const CertificatesAndAwards = () => {
  return (
    <Section title="Certificates & Awards">
      <div className="flex flex-col gap-6">
        {CERTIFICATES_AND_AWARDS.map(
          ({ title, organization, date, description, link }) => (
            <div key={title}>
              {/* 활동명 */}
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-medium text-gray-900">{title}</p>
                {organization && <p className="text-gray-600">— {organization}</p>}
              </div>
              {/* 활동 기간 */}
              <p className="flex items-center gap-1 mt-2 leading-6 text-sm text-gray-600 font-ubuntu">
                <CalendarIcon width={16} height={16} className="text-gray-500" />
                {date}
              </p>
              {/* 설명 */}
              <p className="mt-2 leading-7 text-gray-700">{description}</p>
              {/* 링크 */}
              {link &&
                link.length > 0 &&
                link.map(({ url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[2px] mt-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <LinkIcon width={20} height={20} />
                    <span className="truncate">{url}</span>
                  </a>
                ))}
            </div>
          )
        )}
      </div>
    </Section>
  );
};
