const path = require('path');
const postTemplate = path.resolve(`./src/templates/post.tsx`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  // Create blog post pages.
  // 모든 MDX 파일에 대해 페이지 생성 (type 필드가 없으므로 모두 생성)
  const posts = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
