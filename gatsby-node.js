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
            type
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
  // Log와 일반 블로그 포스트만 페이지 생성
  const posts = result.data.allMdx.nodes.filter(
    (node) => !node.frontmatter.type || node.frontmatter.type === 'log'
  );

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
