import type { HeadFC } from 'gatsby';
import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { Header } from 'components/common/Header';

type IndexPageProps = {
  data: {
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          slug: string;
        };
      }[];
    };
  };
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <main>
      <Header />
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;
