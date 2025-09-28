import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const INTRO =
  `프론트엔드 개발 경험을 바탕으로, 사전에 결함을 차단해 안정적인 서비스를 보장합니다. 반복 작업을 자동화해 휴먼에러를 줄이고, 품질 기준을 내재화 하는 것에 관심있습니다.`
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
      '앱인토스 Tester로서 초기 팀에 합류하여 입점하는 게임, 비게임 다양한 카테고리의 미니앱을 정책/UX 관점에서 검수하고 체계화했습니다.',
    ],
    project: [
      {
        title: 'QA 현황 대시보드 구현',
        date: '2025.09',
        intro: '',
        description: [
          '<span class="highlight">Google Sheets와 Looker Studio를 연동해 QA 소요시간 및 반려율 시각화 대시보드 구현</span>',
          '검수 효율화 지표를 제시할 수 있는 기반 마련',
        ],
      },
      {
        title: 'AdMob 정책 리스크 사전 발견',
        date: '2025.09',
        intro:
          '담당 범위 밖의 리스크까지 능동적으로 탐지하여 서비스 안정성에 기여',
        description: [
          '매주 약 90건의 미니앱을 검수하는 과정에서 <span class="highlight">탐색적 테스트를 통해 광고 정책 위반 사례 2건(탐지율 약 2.2%)</span>을 사전에 발견',
          '애드몹 광고 정책 위반 사례를 발견하여, <span class="highlight">계정 차단 가능 성을 사전에 예방</span>하고 안정적인 운영에 기여',
        ],
      },
      {
        title: '미니앱 검수 워크플로우 자동화',
        date: '2025.07',
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
          '운영 단계에서 발생하는 휴저서비스 버그를 신속히 파악하고, 재현 및 원인 분석을 통해 안정적인 서비스 품질 유지에 기여',
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
