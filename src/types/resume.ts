type Link = {
  icon?: 'github'; // 링크 아이콘
  url: string; // url
  text?: string; // 링크 텍스트
};

export interface Project {
  title: string; // 프로젝트명
  titleCaption?: string; // 직책
  organization?: string; // 조직
  date: string; // 근무 기간
  description: string[]; // 프로젝트에서 담당한 역할과 성과
  intro?: string; // 프로젝트 소개
  contribution?: number; // 기여도
  techStack?: string[]; // 기술 스택
  team?: string; // 팀 구성
  link?: Link[]; // 프로젝트 링크
}

export interface WorkExperience extends Project {
  project?: Project[];
}

export interface OtherExperience {
  title: string; // 활동명
  organization?: string; // 소속
  date: string; // 활동 기간
  description?: string[]; // 활동 내용
  link?: Link[];
}
