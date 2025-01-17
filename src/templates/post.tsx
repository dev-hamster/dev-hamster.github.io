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
        <MDXProvider
          components={{
            // github-markdown list style 임시 처리
            ul: (props) => <ul {...props} style={{ listStyle: 'revert' }} />,
            // github-markdown order 임시 처리
            ol: (props) => (
              <ul {...props} style={{ listStyleType: 'decimal' }} />
            ),
            ...shortcodes,
          }}
        >
          <article className='markdown-body'>
            <h1>{frontmatter.title}</h1>
            {thumbnail && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%', // 16:9 종횡비
                }}
              >
                <GatsbyImage
                  image={thumbnail}
                  alt={frontmatter.title}
                  className='absolute top-0 left-0 w-full h-full object-cover'
                />
              </div>
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
