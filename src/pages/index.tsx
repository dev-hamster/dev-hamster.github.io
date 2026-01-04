import { graphql, Link, type HeadFC } from 'gatsby';
import * as React from 'react';

import { Card } from 'components/Card';
import { MdxNode } from 'types/post';
import { PageLayout } from 'components/Layout';

type IndexPageProps = {
  data: {
    allMdx: {
      nodes: MdxNode[];
    };
  };
};

const IndexPage = ({ data }: IndexPageProps) => {
  // TODO: 성능 최적화 - GraphQL 쿼리 레벨에서 필터링하도록 변경
  // 현재는 모든 MDX 노드를 가져온 후 JavaScript에서 필터링하므로,
  // MDX 파일이 많아질수록 불필요한 데이터를 전송하게 됨.
  // GraphQL 스키마에 type 필드를 명시적으로 정의한 후 filter를 사용하면 더 효율적임.
  const posts = data.allMdx.nodes.filter(
    (node) => !node.frontmatter.type || node.frontmatter.type !== 'log'
  );

  return (
    <PageLayout>
      <div className='pb-4'>
        {posts.map((post, index) => (
          <Link
            key={post.id}
            to={post.frontmatter.slug}
            className='block'
            style={{
              textDecoration: 'none',
            }}
          >
            <Card
              thumbnail={post.frontmatter.thumbnail}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
              body={post.body}
            />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>dev-hamster</title>;

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
