import { graphql, Link, type HeadFC } from 'gatsby';
import * as React from 'react';
import removeMarkdown from 'remove-markdown';

import { Card } from 'components/Card';
import { Header } from 'components/Header';
import { Layout } from 'components/Layout';
import { MdxNode } from 'types/post';

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
    <main>
      <Header />
      <Layout>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4'>
          {posts.map((post) => (
            <Link key={post.id} to={post.frontmatter.slug}>
              <Card
                thumbnail={post.frontmatter.thumbnail}
                title={post.frontmatter.title}
                body={removeMarkdown(post.body)}
              />
            </Link>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const i = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
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
