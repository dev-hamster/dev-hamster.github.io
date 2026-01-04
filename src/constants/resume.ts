import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const TITLE = '박진아';

export const INTRO = `
  - 결함을 예방하는 과정에 흥미를 느껴 프론트엔드 개발자에서 QA로 전환했습니다. 
  - JavaScript, Python으로 반복 업무를 자동화해 QA 생산성을 향상시킨 경험이 있습니다. 
  - 빠른 릴리즈 환경에서 테스트를 수행하며, 정책 기반 탐색적 테스트로 고위험 리스크를 조기 발견했습니다.
  - 필요한 도구를 직접 만들어 팀 전체의 품질을 높이는 QA 엔지니어를 지향합니다.
  `
  .split('\n')
  .map((x) => x.trim())
  .filter((x) => x);

export const SKILLS_AND_TOOLS = [
  {
    title: 'Playwright',
    content:
      '로그인 및 폼 입력 시나리오를 자동화 테스트로 구현하고, 로케이터 전략을 적용해 유지보수성을 높일 수 있음',
  },
  {
    title: 'React.js / Next.js',
    content:
      '프론트엔드 개발 경험을 바탕으로 QA 과정에서 버그 재현 및 자동화 테스트에 활용할 수 있음',
  },
  {
    title: 'TypeScript',
    content:
      '커스텀 타입 정의를 활용해 코드의 안정성을 높이고 프론트엔드 로직 이해를 QA에 활용할 수 있음',
  },
  {
    title: 'Figma',
    content:
      '디자이너와 협업하며 프로토타입을 검증하고, UI/UX 검수 과정에서 의견을 반영할 수 있음',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: '비바리퍼블리카',
    date: '2025.06 - 현재',
    description: [
      '앱인토스 초기 QA 팀에 합류하여, 미니앱 품질 검수 프로세스를 체계화하고 자동화·지표화 기반을 구축했습니다.',
    ],
    project: [
      {
        title: '구버전 공통 SDK 사용 여부 전수 조사 자동화',
        date: '2025.12 - 현재',
        intro:
          'SDK 버전 판별을 위한 UI 오라클을 정의하고, Page Object 패턴 기반의 안정적인 전수 조사 자동화',
        techStack: ['Appium', 'WebdriverIO', 'TypeScript', 'Allure Report'],
        description: [
          '500+개 미니앱 대상 전수 조사 자동화로 인적 리소스 대폭 절감 (약 8시간 → 약 1시간)',
          '버전별 차이가 발생하는 특정 UI 요소를 테스트 오라클로 정의하고, 공통 내비게이션 등 SDK 의존도가 높은 영역을 중심으로 검증 시나리오 설계',
          'Page Object 패턴을 적용하여 테스트 유지보수성을 확보하고, content-desc 기반 selector 및 waitForClickable 대기 전략을 활용해 테스트 안정성 강화',
          '파트너 빌드 단계에서 스모크 테스트를 사전에 검증하는 Shift-left 테스트 방향의 확장 논의에 기여',
        ],
      },
      {
        title: '게임 연령등급 검수 자동화로 QA 생산성 5배 향상',
        date: '2025.11',
        intro:
          '앱 실행 시 표시되는 게임 연령등급의 표기 여부를 전수조사해야 하는 반복 업무를 자동화로 개선하여 QA 생산성을 높임',
        techStack: ['Python', 'ADB', 'scikit-image'],
        description: [
          '테스트 대상 188개 게임 앱의 연령등급 표기 상태를 전수조사해야 하는 업무를 담당했으며, 기존 방식으로는 앱별 스크린샷 캡처에 5시간 이상 소요됨',
          '업무 효율을 높이기 위해 앱 자동 실행 및 스크린샷 캡처를 구현하고, 이미지 유사도 기반 UI 표시 여부 검증 로직을 설계',
          '전체 앱 중 약 80%의 케이스를 자동화로 커버하며, 188개 전수조사 시간을 <span class="highlight">5시간 → 1시간으로 단축(약 5배 효율화)</span>',
        ],
      },
      {
        title: '데이터 기반 QA 프로세스 개선',
        date: '2025.10 - 현재',
        intro:
          '불필요한 반려로 인해 미니앱 출시 속도가 지연되는 문제를 해결하기 위해, 데이터 기반으로 QA 기준을 재정립',
        description: [
          '반려율이 50%를 상회해 출시 병목이 발생해 품질을 유지하면서도 현실적인 QA 기준을 재정립하고 승인율 개선을 추진.',
          '주간 검수 데이터를 Looker Studio로 집계·시각화하여 반려 유형을 분석한 결과, 비핵심 결함(P2·P3)의 비중이 높음을 확인',
          'AS-IS / TO-BE 프로세스를 재설계하여, 비핵심 결함은 백로그로 관리하고 고위험 결함만 즉시 반려하도록 개선',
          '<span class="highlight">승인율이 56% → 64%로 개선</span>되었으며, 출시 속도가 향상되고 반려 사유의 일관성이 확보됨',
        ],
      },
      {
        title: '탐색적 테스트로 희귀·고위험 리스크 조기 발견',
        date: '2025.09 - 현재',
        intro:
          '정책 위반·운영 리스크와 같은 고위험 영역을 대상으로 탐색적 테스트를 수행하여 사전 차단',
        description: [
          '<span class="highlight">탐색적 테스트를 통해 AdMob 광고 정책 위반 사례 2건(발견률 약 2.2%)을 발견</span>하여 Google 계정 차단 및 광고 수익 손실 리스크를 예방',
          '약 1000건 중 1건 수준으로 드문 프로모션 구조 이상 케이스를 조기 발견해 운영 리스크를 사전 방지',
        ],
      },
      {
        title: '미니앱 검수 워크플로우 자동화',
        date: '2025.07 - 현재',
        intro:
          '매주 80+ 미니앱 검수 과정에서 반복, 수작업으로 발생하던 휴먼 에러를 자동화로 차단',
        techStack: ['JavaScript', 'Google API', 'Notion API'],
        description: [
          'Google API와 Notion API를 활용해 검수 대기 큐 등록 과정을 자동화, 휴먼 에러 예방',
          '검수 완료 앱 데이터를 별도 시트에 적재해 QA 속도·품질 지표를 추적할 수 있는 기반 마련',
          '자동화를 통해 등록 프로세스 클릭 수를 4회 → 1회로 단축 (200초 → 50초), 검수자가 UX/정책 검증에 더 집중할 수 있도록 지원',
          '<span class="highlight">실제 업무 플로우에 도입, 팀 전체의 QA 효율 향상에 기여</span>',
        ],
      },
    ],
  },
  {
    title: '(주)링글잉글리시에듀케이션서비스',
    date: '2025.03 - 2025.06',
    description: [
      '영어 회화 서비스인 링글잉글리시의 프론트엔드 개발자로 3개의 프로덕트의 신규 기능 개발 및 유지보수를 담당했습니다.',
      '',
    ],
    project: [
      {
        title: '신규 기능 QA 및 사용성 개선 주도',
        date: '2025.04 - 2025.06',
        intro:
          '틴즈 사용자에게 영어 분석 기능을 개발하고 오픈하기전, 품질을 보장하기 위해 수동 테스트를 진행했습니다.',
        techStack: ['Next.js', 'TypeScript', 'react-query', 'stackflow'],
        description: [
          '틴즈 사용자에게 고도화된 영어 분석 기능을 제공하기 위해, 복습 페이지를 웹뷰로 전환하여 앱·웹 간 기능 일관성과 유지보수 효율성을 확보함',
          '보호와 아이 각 계정에서 60개의 테스트 케이스를 시나리오 기반으로 수동 테스트 수행하고 틴즈 팀과 2차 QA 진행',
          '틴즈 사용자의 낮은 발화량으로 분석 결과가 미노출되는 상황에서 사용자 문의가 반복됨을 인지하고, PO와 소통하여 안내 메시지 UI를 제안 및 적용',
          '그 결과, <span class="highlight">재직 기간 동안 해당 기능에 대한 버그 리포트가 발생하지 않았으며</span>, 안정적인 서비스 오픈을 달성함',
        ],
      },
      {
        title: '버그 핫픽스 및 실시간 장애 대응',
        date: '2025.03 - 2025.06',
        intro:
          '운영 단계에서 발생하는 버그를 신속히 파악하고, 재현 및 원인 분석을 통해 안정적인 서비스 품질 유지에 기여',
        techStack: [],
        description: [
          '매주 약 5건 이상의 운영 이슈를 Slack 알림 수신 후 10분 내 확인 및 대응',
          'DataDog 세션 리플레이와 API 응답 로그를 활용해 프론트/백엔드 이슈를 신속히 구분',
          '원인 분석 및 재현 경로를 정리해 개발팀에 전달, 수정 요청으로 빠른 해결을 지원',
        ],
      },
      {
        title: 'B2B/B2C 고객 분기 로직 리팩토링',
        date: '2025.03 (2주)',
        intro:
          'B2B/B2C 분기 로직이 53개 컴포넌트에 하드코딩되어 유지보수와 버그 수정이 비효율적인 문제를 해결했습니다.',
        team: 'FE 1명, PM 1명',
        contribution: 50,
        techStack: ['Next.js', 'TypeScript', 'react-query'],
        description: [
          '`useCustomerType` 커스텀 훅과 상수 기반 로직 설계로 53개의 컴포넌트의 조건 분기를 통합, TypeScript 인터페이스로 타입 안정성 확보.',
          '출석체크 인증이 누락되던 특정 B2B 고객 케이스를 식별 및 수정하여 실제 운영 이슈 해결',
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
      'Jest, Next.js, TypeScript, Redux, React Query, Styled-Components'.split(
        ','
      ),
    team: 'FE 2명, BE 2명, 디자이너 1명',
    intro:
      '북마크 링크를 공유하는 SNS로,  PO로서 칸반보드 로 프로젝트를 관리했습니다.',
    contribution: 30,
    description: [
      '<span class="highlight">Jest 기반 폼 유닛 테스트 학습 및 적용</span>: 프로젝트 이후, 폼 입력 로직의 결함을 사전에 예방하기 위해 Jest로 유닛 테스트를 작성, API 요청은 MSW(Mock Service Worker)로 모킹하여 네트워크 의존성을 제거하고 안정적인 테스트 환경을 구축 [관련 블로그 글](https://dev-hamster.github.io/Jest%EC%97%90%EC%84%A0%20%EC%84%B1%EA%B3%B5%EC%9D%B8%EB%8D%B0%20%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%A0%20%EC%8B%A4%ED%8C%A8/)',
      'API 성능 최적화: 중복 API 호출을 줄이기 위해  React Query의 서버 데이터 캐싱 을 적용,  API 호출량 50% 절감 ',
      'UX 개선: ‘좋아요’ 피드백을 즉시 반영하기 위해  낙관적 업데이트 도입 (600ms → 0ms)  으로  사용자 경험 향상 ',
      '코드 구조 개선:  Redux 의존성 제거  및  useToast 커스텀 훅 도입 으로  컴포넌트 복잡성 감소 ',
      '유지보수성 향상: 디자인 변경에 유연하게 대응할 수 있도록  LinkItem을 합성 컴포넌트로 개선 ',
    ],
  },
];

export const EDUCATION: OtherExperience[] = [
  {
    title: '삼성 청년 SW 아카데미',
    organization: '멀티캠퍼스',
    date: '2023.06 - 2024.06',
    description: [
      '알고리즘, 웹 개발, 프로젝트 기반의 커리큘럼으로 1600시간 교육을 수료했습니다. ',
    ],
  },
  {
    title: '가천대학교',
    date: '2017.03 - 2022.08',
    description: ['대학교(학사) | 컴퓨터공학 졸업'],
  },
];

export const CERTIFICATES_AND_AWARDS: OtherExperience[] = [
  {
    title: 'ISTQB CTFL',
    organization: 'KSTQB',
    date: '2025.08',
  },
  {
    title: 'OPIc',
    organization: 'ACTFL',
    date: '2024.02',
    description: ['IM1 취득'],
  },
  {
    title: '삼성 청년 SW 아카데미 1학기 프로젝트 우수상',
    organization: '멀티캠퍼스',
    date: '2023.11',
    description: [
      'Vue.js와 Spring Boot로 여행 플래너 프로젝트로 1학기 경진대회 수상 (9팀 중 2등)',
    ],
  },
  {
    title: '정보처리기사',
    organization: '한국산업인력공단',
    date: '2021.06',
  },
];

export const OTHER_EXPERIENCE: OtherExperience[] = [
  {
    title: 'Playwright E2E 테스트 학습 및 공유',
    date: '2025.06',
    description: [
      '초대 링크 회원가입 버그를 계기로 Playwright로 자동화 시나리오 작성하여 팀 위클리에서 접근성 셀렉터와 테스트 자동화의 필요성을 공유했습니다.',
    ],
  },
  {
    title: '《모던 리액트 Deep Dive》책 스터디',
    description: [
      '《모던 리액트 Deep Dive》책 스터디를 운영하여 리액트의 렌더링 및 훅에 대한 개념을 학습했습니다.',
    ],
    date: '2024.06 - 2024.10',
    link: [
      {
        url: 'https://github.com/fe-deep-dive/study-react-deep-dive',
      },
    ],
  },
  {
    title: '함수형 프로그래밍 스터디',
    organization: '우아한 형제들',
    date: '2023.06 - 2023.08',
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
    date: '2022.10',
    description: ['MDN kr 문서 오타를 수정해 오픈소스 기여'],
  },
];
