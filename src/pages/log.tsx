import { graphql, Link, type HeadFC } from 'gatsby';
import * as React from 'react';

import { MdxNode } from 'types/post';
import { PageLayout } from 'components/Layout';
import { LogCard } from 'components/LogCard';

type LogPageProps = {
  data: {
    allMdx: {
      nodes: MdxNode[];
    };
  };
};

const LogPage = ({ data }: LogPageProps) => {
  const allLogs = data.allMdx.nodes;

  return (
    <PageLayout>
      <div className='pb-4'>
        {allLogs.length === 0 && (
          <div className='text-center text-gray-500'>
            <div className='text-2xl'>📝</div>
            아직 포스트가 없습니다.
          </div>
        )}
        {allLogs.length > 0 &&
          allLogs.map((log) => (
            <LogCard
              key={log.id}
              thumbnail={log.frontmatter.thumbnail}
              title={log.frontmatter.title}
              date={log.frontmatter.date}
              tags={log.frontmatter.tags}
              body={log.body}
            />
          ))}
      </div>
    </PageLayout>
  );
};

export default LogPage;

export const Head: HeadFC = () => <title>Log - dev-hamster</title>;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: {
          type: { eq: "log" }
        }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          tags
          type
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        body
      }
    }
  }
`;

