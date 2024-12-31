import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface MdxNode {
  id: string;
  frontmatter: Formatter;
  body: string;
}

export type Thumbnail =
  | IGatsbyImageData
  | {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };

export interface Formatter {
  title: string;
  slug: string;
  date?: string;
  thumbnail?: Thumbnail;
}

export type CardProps = Pick<Formatter, 'date' | 'title' | 'thumbnail'> &
  Pick<MdxNode, 'body'>;
