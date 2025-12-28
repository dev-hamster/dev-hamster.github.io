/**
 * 날짜를 한국어 형식으로 포맷팅
 * 예: "2025-01-16" -> "1월 16일"
 */
export const formatDateToKorean = (dateString?: string | null): string => {
  if (!dateString) return '';

  try {
    // "2025-01-16" 형식의 문자열을 파싱
    // Date 생성자는 시간대 문제가 있을 수 있으므로 직접 파싱
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);
      
      if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        if(year === new Date().getFullYear()) {
          return `${month}월 ${day}일`;
        } else {
          return `${year}년 ${month}월 ${day}일`;
        }
      }
    }
    
    // 파싱 실패 시 Date 객체 사용
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}월 ${day}일`;
    }
    
    return dateString;
  } catch {
    return dateString;
  }
};

