/**
 * MDX 본문에서 순수 텍스트만 추출
 * JSX 코드, import 문, HTML 태그 등을 제거하고 읽을 수 있는 텍스트만 반환
 */
export const extractTextFromMDX = (mdxBody: string): string => {
  if (!mdxBody) return '';

  let text = mdxBody;

  // 1. import 문 제거
  text = text.replace(/^import[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '');

  // 2. JSX 태그 제거 (Thread, ThreadItem 등)
  text = text.replace(/<\/?[\w:]+[^>]*>/g, '');

  // 3. md 파일 프론트매터 제거
  text = text.replace(/^---[\s\S]*?---/, '');

  // 4. HTML 주석 제거
  text = text.replace(/<!--[\s\S]*?-->/g, '');

  // 5. 여러 공백을 하나로
  text = text.replace(/\s+/g, ' ');

  // 6. 앞뒤 공백 제거
  text = text.trim();

  // 7. 첫 3줄 정도만 추출
  const sentences = text.split(/[.!?]\s+/);
  const preview = sentences.slice(0, 2).join('. ');

  return preview || text.substring(0, 100);
};
