// v.2.0.0
import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const INTRO =
  `사용자의 더 나은 경험을 위해 고민하며 **약 1년간 스타트업에서 프론트엔드 개발**을 담당했습니다. 기능 구현뿐 아니라 **60여 개의 테스트 케이스 작성, 버그 리포트 대응 등을 통해 서비스 안정성 향상**에 기여했습니다.
  이제는 **개발자와 협업하며 품질을 개선하는 QA 엔지니어**로 성장하고자 합니다. **커밋 컨벤션 자동화(husky), Docker 기반 CI/CD 구축 등 자동화 경험**을 바탕으로, **재사용 가능한 테스트 케이스를 CI 파이프라인에 통합해 일관된 품질**을 유지할 수 있습니다. **신뢰받는 서비스를 만드는 QA 엔지니어**가 되겠습니다.`
    .split('\n')
    .map((x) => x.trim())
    .filter((x) => x);

export const SKILLS_AND_TOOLS = [
  {
    title: 'Jest',
    content: '유닛 테스트와 테스트 커버리지를 통한 안정성 확보 경험 보유', // TODO: 추가 설명
  },
  {
    title: 'React Testing Library',
    content: '사용자 관점의 상호작용 테스트 작성 가능',
    // TODO: 추가 설명
  },
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
    date: '2025.03 - 2025.06',
    description: [
      '플러스, 틴즈, 튜터 웹 서비스의 유지보수 및 기능 개선을 **사용자 관점**에서 수행했으며, 버그 리포트 발생 시 즉각 대응하여 안정적인 서비스 운영을 지원했습니다.',
    ],
    project: [
      {
        title: '틴즈 프로덕트, 영어 실력 진단 기능 도입',
        date: '2025.05 (2주)',
        intro:
          '10대를 위한 링글 틴즈 프로덕트에 영어 실력 진단 기능을 도입했습니다.',
        team: 'FE 1명, BE 1명',
        contribution: 80,
        link: [
          {
            url: 'https://www.ringleplus.com/',
            text: '서비스 링크',
          },
        ],
        techStack: ['Next.js', 'TypeScript', 'react-query'],
        description: [
          '틴즈 사용자 대상 영어 실력 진단 기능 과정에서 React Native 기반 복습 페이지를 웹뷰(Stackflow)로 전환하여 코드 공유성과 유지보수성을 개선',
          '신규 기능에 대해 **60개 이상의 테스트 케이스**를 작성하고 QA 진행하여 **높은 사용량에도 안정성 확보**',
          '도입 이후, 발화량 부족으로 진단이 어려운 일부 케이스를 식별, **상황에 맞는 사용자 안내 메시지를 기획·적용**해 사용자 이해도 및 불만 감소에 기여',
        ],
      },
      {
        title: 'B2B/B2C 고객 분기 로직 코드 리팩토링',
        date: '2025.03 (2주)',
        intro:
          'B2B/B2C 분기 로직이 53개 컴포넌트에 하드코딩된 코드를 정책을 반영한 코드로 리팩토링했습니다.',
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
          'B2B 고객사별 정책 차이(메뉴 노출, 출석 기준 등)를 대응하기 위해, `useCustomerType` 커스텀 훅과 정책을 표현한 변수를 통해 53개의 컴포넌트 조건 분기를 개선, TypeScript 인터페이스로 타입 안정성 확보',
          '정책 정합성을 위해 실제 페이지 기준 AS-IS / TO-BE 정책을 표로 정리하고 **유관 부서와 커뮤니케이션**했으며, 이 과정에서 운영상 문제를 식별 및 개선',
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
];
