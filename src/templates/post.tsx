import { graphql, Link } from 'gatsby';
import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Header } from 'components/Header';
import { Layout } from 'components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MdxNode } from 'types/post';
import { getThumbnailImage } from 'utils/getThumbnailImage';

type IndexPageProps = {
  data: {
    mdx: MdxNode;
  };
};

interface TemplateProps extends IndexPageProps {
  children: React.ReactNode;
}

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }: TemplateProps) {
  const { frontmatter } = data.mdx;
  const thumbnail = getThumbnailImage(frontmatter.thumbnail);

  return (
    <>
      <Header />
      <Layout>
        <MDXProvider components={shortcodes}>
          <article className='markdown-body'>
            <h1>{frontmatter.title}</h1>
            {thumbnail && (
              <GatsbyImage
                image={thumbnail}
                alt={frontmatter.title}
                className='w-full'
              />
            )}
            {children}
          </article>
        </MDXProvider>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
