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
  // TODO: 성능 최적화 - GraphQL 쿼리 레벨에서 필터링하도록 변경
  // 현재는 모든 MDX 노드를 가져온 후 JavaScript에서 필터링하므로,
  // MDX 파일이 많아질수록 불필요한 데이터를 전송하게 됨.
  // GraphQL 스키마에 type 필드를 명시적으로 정의한 후 filter를 사용하면 더 효율적임.
  const allLogs = data.allMdx.nodes.filter(
    (node) => node.frontmatter.type === 'log'
  );

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
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          tags
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

