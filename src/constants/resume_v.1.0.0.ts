import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const INTRO =
  `약 1년간 **스타트업**에서 실무를 시작으로, 개인 프로젝트와 **삼성 청년 소프트웨어 아카데미(SSAFY)** 과정를 통해 성장했습니다. 
  **책임감을 가지고 마감일을 준수**하며 **공통 컴포넌트와 라이브러리를 제안으로 사용자 서비스에 기여**했고, 이후 여러 프로젝트를 통해 **협업과 문제 해결 능력**을 키웠습니다.
`
    .split('\n')
    .map((x) => x.trim())
    .filter((x) => x);

export const SKILLS_AND_TOOLS = [
  {
    title: 'TypeScript',
    content: '커스텀 타입 정의로 팀 코드의 안정성을 높일 수 있음',
  },
  {
    title: 'React.js',
    content:
      '재사용 가능한 컴포넌트를 설계하고 메모제이션을 통해 최적화 할 수 있음',
  },
  {
    title: 'Next.js',
    content: '파일 기반 라우팅과 API 라우트로 API 개발 경험 보유',
  },
  {
    title: 'React Query',
    content: '데이터 캐싱으로 사용자 응답성 향상',
  },
  {
    title: 'CSS/SCSS',
    content: 'Grid와 Flexbox로 반응형 웹 레이아웃 설계',
  },
  {
    title: 'Figma',
    content:
      '디자이너와 협업으로 UI 일관성을 유지하고 와이어프레임 제작 경험 보유',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: '(주)링글잉글리시에듀케이션서비스',
    date: '2025.03 - 현재',
    description: [
      '영어 회화 서비스인 링글잉글리시의 프론트엔드 개발자로 신규 기능 개발 및 유지보수를 담당하고 있습니다.',
    ],
    project: [
      {
        title: 'B2B/B2C 고객 분기 로직 리팩토링',
        date: '2025.03 (2주)',
        intro:
          'B2B/B2C 분기 로직이 53개 컴포넌트에 하드코딩되어 유지보수와 버그 수정이 비효율적인 문제를 해결했습니다.',
        team: 'FE 1명, PM 1명',
        contribution: 50,
        link: [
          {
            url: 'https://www.ringleplus.com/',
            text: '서비스 링크',
          },
        ],
        techStack: ['Next.js', 'TypeScript', 'react-query'],
        description: [
          '`useCustomerType` 커스텀 훅과 상수 기반 로직 설계로 53개의 컴포넌트의 조건 분기를 통합, TypeScript 인터페이스로 타입 안정성 확보.',
          '출석체크 인증이 누락되던 특정 B2B 고객 케이스를 식별 및 수정하여 실제 운영 이슈 해결',
        ],
      },
    ],
  },
  {
    title: '주식회사 에프엘이에스',
    date: '2022.01 - 2022.11',
    description: [
      "SI 프로젝트와 자사 서비스인 '보라(구 헬로우운세)' 리뉴얼 개발에 참여했습니다.",
      "‘보라'는 오픈 전 2~3만 MAU, 오픈 후 최대 **5~7만 MAU**를 기록했습니다.",
      'SI 프로젝트에서 **무료 라이브러리 한계를 극복**하여 **요구사항을 만족**하는 스크롤 이벤트를 구현했습니다.',
    ],
    project: [
      {
        title: '보라',
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
          '**라이브러리 제안**: **recoil과 react-query**를 도입해 **러닝 커브를 단축하고 데이터 호출 개선**',
          '**백오피스 시스템 구축**: **MUI기반 공통 컴포넌트로 설계**, **콘텐츠 등록 시간 단축 (약 4시간 → 10여분)**',
          '**UX 강화**: `react-spring`으로 **카드 선택 애니메이션을 선언적으로 구현**, 사용자 몰입감 향상',
        ],
      },
      {
        title: 'NHPay 농카운세',
        date: '2022.08 - 2022.09',
        techStack:
          'Next.js, TypeScript, recoil, react-query, styled-components, react-hook-form'.split(
            ','
          ),
        intro: 'NHpay의 사주/운세로 서비스되는 페이지 입니다(서비스 종료).',
        team: 'FE 3명, BE 4명',
        contribution: 15,
        description: [
          '**폼 입력 검증**: **Yup 스키마**로 사주 데이터 유효성 확인, **코드 베이스 간결화**에 기여',
          '**웹뷰 환경**: **Meta 태그**로 **화면 크기 조정과 핀치 줌을 방지**',
        ],
      },
    ],
  },
] as const;

export const PROJECT: Project[] = [
  {
    title: '북마크 링크 관리 프로젝트 - 트윙클',
    date: '2023.03 - 2023.06',
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
      '북마크 링크를 공유하는 SNS로, **PO로서 칸반보드**로 프로젝트를 관리했습니다.',
    contribution: 30,
    description: [
      '**API 성능 최적화:** 중복 API 호출을 줄이기 위해 **React Query의 서버 데이터 캐싱**을 적용, **API 호출량 50% 절감**',
      '**UX 개선:** ‘좋아요’ 피드백을 즉시 반영하기 위해 **낙관적 업데이트 도입 (600ms → 0ms)** 으로 **사용자 경험 향상**',
      '**코드 구조 개선:** **Redux 의존성 제거** 및 **useToast 커스텀 훅 도입**으로 **컴포넌트 복잡성 감소**',
      '**유지보수성 향상:** 디자인 변경에 유연하게 대응할 수 있도록 **LinkItem을 합성 컴포넌트로 개선**',
    ],
  },
  {
    title: 'AR 기반 역사 지도 - 서울 팝',
    date: '2024.04 - 2024.05',
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
      '사용자 주변의 사적지의 과거 모습을 **AR**로 볼 수 있는 서비스입니다.',
    contribution: 25,
    description: [
      '**환경 개선**: **HTTPS 환경 세팅** 및 **Husky를 활용한 커밋 메시지 자동화**로 **개발 환경을 안정화**하고 **팀 생산성을 향상**',
      'AR 기능 구현: 위치 기반 AR 콘텐츠로 가까운 사적지 AR 마커 표시, 터치 시 사적지의 과거 모습 제공',
      '**타입 확장**: **라이브러리의 누락된 타입 정의**로 **코드 안정성 개선**',
    ],
  },
  {
    title: '인터렉션 기반 웹 페이지 - Alien Girls',
    date: '2022 09 - 2022 10',
    link: [{ url: 'github.com/dev-hamster/alien-girls', icon: 'github' }],
    techStack: 'React.js, TypeScript, recoil, ec2, Route53'.split(','),
    team: '개발자 1명, 디자이너 1명',
    intro:
      'Windows 98 바탕화면 컨셉으로, 페이지를 탐색하며 아트웍을 감상하는 사이트입니다.',
    contribution: 50,
    description: [
      '**드래그 이벤트 구현 및 최적화**: 매끄러운 드래그 경험을 제공하기 위해 리플로우를 최적화하여 **렌더링 60% 개선** ([블로그 링크](https://dev-hamster.github.io/%EB%93%9C%EB%9E%98%EA%B7%B8%20%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EA%B5%AC%ED%98%84%EA%B8%B01/))',
      '**디자이너와의 협업**: Figma를 도입해 디자이너와 **비동기 커뮤니케이션**으로 작업 시간 차이를 극복',
    ],
  },
];

export const EDUCATION: OtherExperience[] = [
  {
    title: '가천대학교',
    date: '2017 03 - 2022 08',
    description: ['대학교(학사) | 컴퓨터공학 졸업'],
  },
  {
    title: '삼성 청년 SW 아카데미',
    organization: '멀티캠퍼스',
    date: '2023 06 - 2024 06',
    description: [
      '알고리즘, 웹 개발, 프로젝트 기반의 커리큘럼으로 1600시간 교육을 수료했습니다. ',
    ],
  },
];

export const CERTIFICATES_AND_AWARDS: OtherExperience[] = [
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
  {
    title: '삼성 청년 SW 아카데미 1학기 프로젝트 우수상',
    organization: '멀티캠퍼스',
    date: '2023 11',
    description: [
      'Vue.js와 Spring Boot로 여행 플래너 프로젝트로 1학기 경진대회 수상 (9팀 중 2등)',
    ],
  },
];

export const OTHER_EXPERIENCE: OtherExperience[] = [
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
    title: '청소년 코딩 멘토링 활동',
    organization: '스마일게이트',
    date: '2021 08 - 2022 03',
    description: [
      '지역 아동센터에서 마이크로비트를 활용한 코딩 멘토로 활동하며, 12명의 아이들과 매주 2시간씩 수업을 진행했습니다. 아이들이 흥미를 느끼고 몰입할 수 있는 프로젝트형 수업을 진행했습니다.',
    ],
  },
];
