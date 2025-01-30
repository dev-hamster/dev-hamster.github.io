import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const SKILLS_AND_TOOLS = [
  {
    title: 'TypeScript',
    content:
      '외부 라이브러리에 대한 커스텀 타입 정의 경험을 보유했습니다. typed-challenges 레포를 통해 제네릭, 조건부 타입, 매핑된 타입 등 고급 타입 시스템을 학습했습니다.',
  },
  {
    title: 'JavaScript',
    content:
      ' ES6+ 문법을 사용할 수 있고 Promise, async/await를 활용해 비동기 코드를 작성할 수 있습니다.',
  },
  {
    title: 'CSS/SCSS',
    content:
      'Grid와 Flexbox를 사용해  레이아웃 구성할 수 있고 미디어 쿼리를 이용해 반응형 레이아웃 구현할 수 있습니다.',
  },
  {
    title: 'React.js',
    content:
      '재사용 가능한 컴포넌트를 설계하고  useState, useEffect 훅을 사용해 상태 관리와 사이드 이펙트를 처리하고 커스텀 훅을 개발할 수 있습니다.',
  },
  {
    title: 'Next.js',
    content:
      '파일 기반 라우팅을 이해하고  API 라우트를 활용해 RESTful API 구축할 수 있습니다. ',
  },
  {
    title: 'Emotion.js',
    content:
      ' props에 따른 조건부 스타일 적용으로 상태 값에 따른 UI 구현할 수 있습니다.',
  },
  {
    title: 'Figma',
    content:
      '재사용 가능한 컴포넌트를 생성하고 프로토 타입을 제작할 수 있습니다.',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: '주식회사 에프엘이에스',
    titleCaption: '프론트엔드(사원)',
    date: '2022.01 - 2022.11',
    description: [
      "SI 프로젝트와 자사 서비스인 '보라(구 헬로우운세)' 리뉴얼 개발에 참여했습니다. ‘보라'는 오픈 전 2~3만 MAU, 오픈 후 최대 5~7만 MAU를 기록했습니다.",
      '러닝커브를 고려한 상태 관리 라이브러리 선정을 위해 여러 라이브러리를 직접 사용하고 비교하여 recoil과 react-query를 선정했습니다.',
      '기능이 제한적인 무료 라이브러리의 코드를 분석하여 요구사항에 맞는 스크롤 이벤트를 직접 구현했습니다.',
    ],
  },
  {
    title: '보라',
    organization: '주식회사 에프엘이에스',
    date: '2022.09 - 2022.11',
    intro: '테마별 타로, 사주 컨텐츠를 제공합니다.',
    team: 'FE 3명, BE 4명',
    contribution: 25,
    link: [{ url: 'https://borra.today/', text: '서비스 링크' }],
    techStack: [
      'Next.js',
      'TypeScript',
      'recoil',
      'react-query',
      'styled-components',
      'react-hook-form',
      'MUI',
    ],
    description: [
      '백오피스 시스템 구축: 디자인 일관성 및 신속한 UI 구현을 위해 MUI를 사용하여 컴포넌트를 개발했습니다. 특히 ‘엑셀 파일 다운로드’ 기능을 4개의 도메인에서 재사용할 수 있도록 공통 컴포넌트로 설계했으며, 그 결과, 컨텐츠 등록 과정에서 약 4시간이 걸리던 작업을 기획자가 클릭 몇 번으로 처리할 수 있게 되어 효율성을 크게 향상시켰습니다.',
      '동적 UI 구현(카드 리스트 컴포넌트): styled-components의 props를 활용하여, 할인율이나 인기 콘텐츠 등 동적 데이터에 따라 UI 스타일을 동적으로 변경하는 공통 카드 컴포넌트를 개발했습니다.',
      '카드 선택 애니메이션: 운세 카드가 펼쳐지고 선택되는 인터렉션을 구현하기 위해 react-spring을 사용하여 선언적 애니메이션을 구현했습니다. spring api를 활용해 카드의 위치와 움직임을 계산하고 붇그러운 애니메이션을 구현해 사용자가 서비스에 더 몰입할 수 있도록 했습니다.',
    ],
  },
  {
    title: 'NHPay 농카운세',
    organization: '주식회사 에프엘이에스',
    date: '2022.08 - 2022.09',
    techStack:
      'Next.js, TypeScript, recoil, react-query, styled-components, react-hook-form'.split(
        ','
      ),
    intro: 'NHpay의 사주/운세로 서비스되는 페이지 입니다(서비스 종료).',
    team: 'FE 2명, BE 2명',
    contribution: 25,
    description: [
      '사주 정보 입력 폼: 사주 입력값의 유효성을 검증하기 위해 yup을 사용했습니다. 스키마 기반 검증 방식을 활용해 검증 로직을 중앙화하여 코드베이스를 간결하게 했습니다.',
      '웹뷰 환경에서 다양한 화면 크기에서도 일관된 사용자 경험을 제공하기 위해 meta 태그를 활용하여 기기 해상도에 맞는 화면 조정과 핀치 줌을 방지했습니다.',
    ],
  },
] as const;

export const PROJECT: Project[] = [
  {
    title: '트윙클',
    date: '2023.03 - 2023.06',
    titleCaption: '프론트엔드 (팀 프로젝트)',
    link: [
      {
        icon: 'github',
        url: 'github.com/dev-hamster/linkarchive-Front-End',
      },
    ],
    techStack:
      'Next.js, TypeScript, Redux, React Query, Styled-Components'.split(','),
    team: 'FE 2명, BE 2명, 디자이너 1명',
    intro:
      '북마크 링크를 공유하는 SNS로, PO 역할을 맡아 칸반보드로 프로젝트를 관리했습니다.',
    contribution: 15,
    description: [
      'API 호출 최적화: ‘내 링크’ 페이지의 불필요한 중복 API 호출을 제거하기 위해 React Query의 서버 데이터 캐싱을 활용하여 API 호출을 50% 절감했습니다.',
      '‘좋아요’ 반응성 개선: ‘좋아요’ 버튼 클릭 후 UI 업데이트까지 600ms 지연 문제를 낙관적 업데이트로 해결하여, 클릭 즉시 UI가 반영되도록 개선했습니다. 이를 통해 느린 네트워크 환경에서도 일관된 피드백을 제공해 사용자 경험을 크게 향상시켰습니다.',
      '링크 미리보기 최적화: URL 입력 시 불필요한 서버 호출을 줄이고자 debounce를 적용하여 서버 응답 시간 단축을 했습니다.',
      'Toast 컴포넌트 리팩토링: Redux 의존성을 제거하기 위해 useToast 커스텀 훅을 구현하여 외부 의존성을 줄이고 컴포넌트 복잡성을 낮췄습니다.',
      'LinkItem 컴포넌트 리팩토링: 디자이너 요구사항에 맞춰 3가지 디자인 유형을 지원할 수 있도록 기존 props 기반 구조를 합성 컴포넌트로 리팩토링하여 향후 디자인 변경에도 유연하게 대응할 수 있도록 개선했습니다.',
    ],
  },
  {
    title: '서울 팝',
    date: '2024.04 - 2024.05 （6-week）',
    titleCaption: '프론트엔드 (팀 프로젝트)',
    link: [
      {
        icon: 'github',
        url: 'github.com/seoulpop/seoulpop-fe',
      },
    ],
    techStack:
      'React.js, TypeScript, zustand, react-query, a-frame, ar.js'.split(','),
    team: 'FE 3명, BE 3명',
    intro:
      '역사에 대한 관심을 고취하기 위해 근처의 사적지를 알림받고 과거의 모습을 보는 서비스입니다.',
    contribution: 25,
    description: [
      '로컬 환경에서 AR, 하이브리드 앱 개발을 위한 https 환경 세팅 허스키를 이용한 커밋 메세지 자동화 기존 라이브러리에 누락된 타입 지원을 위해 타입 모듈 확장했습니다.',
      '위치 기반 AR 컨텐츠 가까운 사적지 AR 마커를 보여주고 터치시 사적지의 과거 모습을 보여주었습니다.',
      '서비스 브랜딩을 위해 HOC로 스플래시 화면 구현했습니다.',
    ],
  },
  {
    title: 'Alien Girls',
    date: '2022 09 - 2022 10',
    titleCaption: '웹 개발 (팀 프로젝트)',
    link: [{ url: 'github.com/dev-hamster/alien-girls', icon: 'github' }],
    techStack: 'React.js, TypeScript, recoil, ec2, Route53'.split(','),
    team: '개발자 1명, 디자이너 1명',
    intro:
      'Windows 98 바탕화면 컨셉으로 인터렉션하여 외계인을 찾는 페이지 입니다.',
    contribution: 100,
    description: [
      '음악 플레이어, 레이아웃, 배포',
      '드래그 이벤트 최적화: 매끄러운 드래그 경험을 제공하고 리플로우를 최적화하여 성능을 개선했습니다.',
      '전역 상태 관리: Recoil을 활용해 작업 표시줄에서 실행 중인 작업을 실시간으로 보여줄 수 있도록 전역 상태를 효과적으로 관리했습니다.',
      '디자이너와의 협업: Figma를 도입해 디자이너와의 협업 효율을 높였고, UI/UX를 일관성 있게 구현했습니다.',
    ],
  },
];

export const OTHER_EXPERIENCE: OtherExperience[] = [
  {
    title: '코드 리뷰 스터디',
    description: [
      '발전적인 코드 리뷰를 지향하기 위해 동일한 기능을 React로 구현한 후, 팀원들과 구현 접근법을 공유하며 리뷰합니다.',
    ],
    date: '2024 10 - now',
  },
  {
    title: '《모던 리액트 Deep Dive》책 스터디',
    description: [
      '《모던 리액트 Deep Dive》책 스터디를 운영하여 리액트의 렌더링 및 훅에 대한 개념을 학습했습니다.',
    ],
    date: '2024 06 - 2024 10',
    link: [
      {
        url: 'https://github.com/fe-deep-dive/study-react-deep-dive',
      },
    ],
  },
  {
    title: '《모던 자바스크립트 Deep Dive》책 스터디',
    description: [
      '《모던 자바스크립트 Deep Dive》책 스터디에 참여해 자바스크립트 기본 개념과  ES6+문법을 학습했습니다.',
    ],
    date: '2023 07 - 2024 02',
    link: [{ url: 'https://github.com/fe-deep-dive/study-js-deep-dive' }],
  },
  {
    title: '삼성 청년 SW 아카데미',
    organization: '멀티캠퍼스',
    date: '2023 06 - 2024 06',
    description: [
      '알고리즘, 웹 개발, 프로젝트 기반의 커리큘럼으로 1600시간 교육을 수료했습니다. ',
    ],
  },
  {
    title: '삼성 청년 SW 아카데미 1학기 프로젝트 우수상',
    organization: '멀티캠퍼스',
    date: '2023 11',
    description: [
      'Vue.js와 Spring Boot, 카카오 Map API, 관광 정보 API를 활용한 여행지 추천 및 여행 플래너 프로젝트로 1학기 경진대회 수상 (9팀 중 2등)',
    ],
  },
  {
    title: '함수형 프로그래밍 스터디',
    organization: '우아한 형제들',
    date: '2023 06 - 2023 08',
    description: [
      '《쏙쏙들어오는 함수형 코딩》책 스터디에 참여해 고차함수를 이용해 복잡한 문제를 해결하는 방법에 대해 학습했습니다.',
    ],
    link: [
      {
        url: 'https://techblog.woowahan.com/15660/',
      },
    ],
  },
  {
    title: 'MDN 문서 오타 수정 기여',
    organization: 'MDN',
    date: '2022 10',
    description: ['MDN kr 문서 오타 수정 기여했습니다.'],
  },
  {
    title: 'MDN 문서 오타 수정 기여',
    organization: 'MDN',
    date: '2022 10',
    description: ['MDN kr 문서 오타 수정 기여했습니다.'],
  },
  {
    title: '청소년 코딩 멘토링 활동',
    organization: '스마일게이트',
    date: '2021 08 - 2022 03',
    description: [
      '지역 아동센터에서 마이크로비트를 활용한 코딩 멘토로 활동하며, 12명의 아이들과 매주 2시간씩 수업을 진행했습니다. 아이들이 흥미를 느끼고 몰입할 수 있는 프로젝트형 수업을 진행했습니다.',
    ],
  },
  {
    title: '가천대학교',
    organization: 'MDN',
    date: '2017 03 - 2022 08',
    description: ['대학교(학사) | 컴퓨터공학 졸업'],
  },
  {
    title: '정보처리기사',
    organization: '한국산업인력공단',
    date: '2021 06',
  },
  {
    title: 'OPIc',
    organization: 'ACTFL',
    date: '2024 02',
    description: ['IM1 취득'],
  },
];
