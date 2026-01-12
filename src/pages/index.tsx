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
  const [selectedTags, setSelectedTags] = React.useState<Set<string>>(
    new Set()
  );

  // 모든 고유 태그 추출
  const allTags = React.useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      if (post.frontmatter.tags && Array.isArray(post.frontmatter.tags)) {
        post.frontmatter.tags.forEach((tag) => {
          if (tag?.trim()) {
            tagSet.add(tag.trim());
          }
        });
      }
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // 선택된 태그에 따라 포스트 필터링
  const filteredPosts = React.useMemo(() => {
    if (selectedTags.size === 0) {
      return posts;
    }
    return posts.filter((post) => {
      if (!post.frontmatter.tags || !Array.isArray(post.frontmatter.tags)) {
        return false;
      }
      const postTags = post.frontmatter.tags
        .map((tag) => tag?.trim())
        .filter(Boolean);
      return postTags.some((tag) => selectedTags.has(tag));
    });
  }, [posts, selectedTags]);

  // 태그 클릭 핸들러
  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  // 모든 태그 선택 해제
  const handleClearFilters = () => {
    setSelectedTags(new Set());
  };

  return (
    <PageLayout>
      {/* 태그 필터 UI */}
      {allTags.length > 0 && (
        <div className="mb-6 pb-4 border-b border-[#F2F2F2]">
          <div className="flex items-center gap-2 flex-wrap">
            {allTags.map((tag) => {
              const isSelected = selectedTags.has(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-ubuntu font-normal transition-colors ${
                    isSelected
                      ? 'bg-[#222] text-white'
                      : 'bg-[#F2F2F2] text-[#222] hover:bg-[#E0E0E0]'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
            {selectedTags.size > 0 && (
              <button
                onClick={handleClearFilters}
                className="px-3 py-1.5 rounded-full text-[13px] font-ubuntu font-normal bg-[#F2F2F2] text-[#838383] hover:bg-[#E0E0E0] ml-2"
              >
                필터 초기화
              </button>
            )}
          </div>
          {selectedTags.size > 0 && (
            <div className="mt-3 text-[13px] text-[#838383] font-ubuntu">
              {filteredPosts.length}개의 포스트가 표시됩니다
            </div>
          )}
        </div>
      )}

      {/* 포스트 목록 */}
      <div className="pb-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
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
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-[16px] text-[#838383] font-ubuntu">
              선택한 태그에 해당하는 포스트가 없습니다.
            </p>
          </div>
        )}
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
