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
  const posts = data.allMdx.nodes;

  return (
    <PageLayout>
      <div className="pb-4">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            to={post.frontmatter.slug}
            className="block"
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
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { ne: "log" } } }
    ) {
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
