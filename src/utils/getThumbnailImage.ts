import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Thumbnail } from 'types/post';

export const getThumbnailImage = (
  thumbnail?: Thumbnail
): IGatsbyImageData | undefined => {
  if (!thumbnail) return;

  if ('childImageSharp' in thumbnail) {
    return thumbnail.childImageSharp.gatsbyImageData;
  }
  return thumbnail as IGatsbyImageData;
};
