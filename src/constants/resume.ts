import { OtherExperience, Project, WorkExperience } from 'types/resume';

export const TITLE = '박진아';

export const ONE_LINE_INTRO = `
개발 경험을 바탕으로 반복적인 QA 업무를 자동화하여 품질 효율을 \n
높이는 QA 엔지니어입니다.`;

export const INTRO = `   
  - HTIL 방식으로 AI와 테스트합니다. 테스트 케이스 작성과 실행은 AI가 맡고, 실행 결과를 검토해 유효한 결함만 티켓으로 작성합니다.
  - 필요한 도구와 지표를 직접 설계해 팀 단위 QA 생산성을 개선하는 것을 지향합니다.
  - Appium기반 자동화로 대규모 미니앱 검수를 효율화한 경험이 있습니다.
  `
  .split('\n')
  .map((x) => x.trim())
  .filter((x) => x);

export const SKILLS_AND_TOOLS = [
  {
    title: 'Appium / WebdriverIO',
    content: '플라키를 최소화한 안정적인 Android UI 자동화 경험',
  },
  {
    title: 'TypeScript',
    content: '테스트 코드 타입 안정성 확보 및 Page Object 패턴 적용',
  },
  {
    title: 'Looker Studio',
    content: '스프레드시트 기반 QA 지표 시각화',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    color: '#50F',
    title: '리트머스',
    date: '2026.02 -',
    description: [
      'AI 네이티브 외주 개발 에이전시에서 챗봇·예약·뱅킹 CMS·풀필먼트 등 다양한 프로젝트의 QA 계획 수립부터 테스트 설계·실행·결과 공유를 담당했습니다.',
    ],
    project: [
      {
        title: '외부 금융 API 연동 파이프라인 회복성 테스트 설계',
        date: '2026.05 - 2026.06',
        techStack: ['Vitest', 'TypeScript', 'Supabase'],
        description: [
          '외부 금융기관과 연동해 자금이 오가는 시스템이라, 장애나 외부 기관 운영 시간 종료로 처리가 끊기면 자원이 중복 할당되거나 방치될 위험이 있었음',
          '장애 상황을 운영 환경에서 직접 재현할 수 없어, 장애 시나리오 6개는 mock으로 검증하고 실제 연동은 smoke 테스트 2건으로 확인함',
          'AI가 작성한 mock 테스트 코드 6개를 검증해 5개는 의도대로 동작하는 걸 확인했고, 운영 시간 종료 케이스 1개는 AI가 실제 구현과 다른 결과를 기대하고 있었음',
          '실제로는 API가 예외를 던졌는데 바로 버그로 보지 않고 DB를 직접 확인해 데이터가 복구 가능한 상태로 남는 걸 확인했고, 이 기준에 맞게 assertion을 고침',
        ],
      },
      {
        title: 'AI 테스트케이스 생성 파이프라인 설계',
        date: '2026.02 - 현재',
        techStack: ['TypeScript', 'Claude Code Skill', 'Mermaid'],
        description: [
          'AI로 만든 테스트 케이스는 우선순위, 실행 가능성, 커버리지를 보장하지 못해 실무에 바로 쓰기 어려웠음',
          'SSOT 문서와 코드베이스로 테스트케이스를 생성했더니 500개가 나와, 자체 Risk Score 공식으로 우선순위 기준을 세움',
          'AI가 테스트 스텝을 실행할 때 코드베이스를 참고하도록 해, 조작할 UI 요소를 추측해야 했던 항목 비율을 21%로 줄임',
          '생성된 TC가 커버리지 기준을 실제로 만족하는지 자동으로 대조하는 가드를 추가함'
        ]
      }
    ],
  },
  {
    color: '#0064FF',
    title: '비바리퍼블리카',
    date: '2025.06 - 2026.02',
    description: [
      '앱인토스 팀에서 미니앱 검수 자동화, 데이터 기반 QA 기준 수립, 운영 리스크 사전 차단을 담당했습니다.',
    ],
    project: [
      {
        title: '500+ 미니앱 구버전 SDK 사용 여부 전수 조사 자동화',
        date: '2025.12',
        techStack: ['Appium', 'WebdriverIO', 'TypeScript', 'Allure Report'],
        description: [
          '헤더 UI 대폭 변경에 따른 SDK 업데이트 필요 여부를 500+개 미니앱 대상으로 자동 검증, 검수 시간 4시간 → 1시간으로 75% 단축',
          'SDK 내부 접근이 불가한 환경에서 버전별 UI 차이를 테스트 오라클로 정의하여 판별 기준 수립',
        ],
      },
      {
        title: '게임 연령등급 검수 자동화로 QA 생산성 5배 향상',
        date: '2025.11',
        techStack: ['Python', 'ADB', 'scikit-image'],
        description: [
          '188개 게임 앱 연령등급 전수 조사를 자동화하여 검수 시간 <span class="highlight">5시간 → 1시간으로 단축</span> (80% 자동화 커버리지)',
          '스토어 정책 변경에 따른 긴급 컴플라이언스 점검으로, 정밀도보다 속도를 우선한 일회성 자동화를 설계',
          'ADB 기반 앱 자동 실행 + scikit-image 이미지 유사도 비교로 연령등급 UI 표시 여부 판별',
          '자동 판별 신뢰도가 낮은 20%는 수동 검증으로 전환하는 하이브리드 전략으로 정확도 확보',
        ],
      },
      {
        title: '데이터 기반 QA 기준 재정립 및 승인율 개선',
        date: '2025.10 - 2026.02',
        techStack: ['Looker Studio', 'Google Sheets'],
        description: [
          '미니앱 <span class="highlight">승인율을 56% → 64%로 개선</span>하여 출시 병목 해소',
          '반려율 50% 초과로 인한 출시 지연 문제를 데이터 기반으로 진단',
          '주간 검수 데이터를 Looker Studio로 시각화한 결과, 반려 건의 다수가 비핵심 결함(P2·P3)임을 확인',
          '결함 등급별 처리 기준을 재정의하여 P1만 즉시 반려, P2·P3는 조건부 승인으로 프로세스 전환',
        ],
      },
      {
        title: '탐색적 테스트로 희귀·고위험 리스크 조기 발견',
        date: '2025.09 - 2026.02',
        description: [
          '<span class="highlight">AdMob 광고 정책 위반 2건</span>을 조기 발견하여 계정 차단·수익 손실 리스크 사전 예방',
          '500+개 미니앱 환경에서 자동화·체크리스트로 커버할 수 없는 정책·운영 리스크 영역에 탐색적 테스트 도입',
          '약 1,000건 중 1건 수준의 희귀 프로모션 구조 이상 케이스를 사전 차단',
        ],
      },
      {
        title: '미니앱 검수 워크플로우 자동화 및 QA 운영 효율화',
        date: '2025.07 - 2026.02',
        techStack: ['JavaScript', 'Google API', 'Notion API'],
        description: [
          '200+개 미니앱 검수 현황을 팀 전체가 실시간 공유 가능한 상태(대기/진행/승인/거절) 기반 워크플로우로 개편',
          '개인별 분산 관리되던 검수 현황을 상태 자동 추적으로 전환하여 구두 확인 없이 진행 상황 파악 가능',
          'Google API·Notion API 연동으로 검수 대상 등록을 자동화, 건당 수동 입력 4회 → 1회로 축소',
          '중요도 라벨 기반 우선순위 시스템 도입으로 긴급 배포 앱 식별 시간 단축',
        ],
      },
    ],
  },
  {
    color: '#3c2bac',
    title: '(주)링글잉글리시에듀케이션서비스',
    date: '2025.03 - 2025.06',
    description: [
      '영어 회화 서비스 링글에서 신규 기능 개발 및 QA, 운영 이슈 대응, 재현·원인 분석을 통해 서비스 품질 안정화에 기여했습니다.',
    ],
    project: [
      {
        title: '신규 기능 QA 및 사용성 개선',
        date: '2025.04 - 2025.06',
        techStack: ['Next.js', 'TypeScript', 'react-query', 'stackflow'],
        description: [
          '신규 영어 분석 기능 오픈 전 QA를 주도하여 <span class="highlight">재직 기간 동안 관련 버그 리포트 0건</span> 달성',
          '보호자·자녀 계정 기준으로 60개 테스트 케이스를 시나리오 기반으로 설계·수행하고, 틴즈 팀과 2차 QA 진행',
          '발화량 부족으로 분석 결과가 미노출되는 예외 케이스를 발견하고, PO와 협업해 사용자 안내 UI를 설계·적용',
          '웹뷰 전환 과정에서 앱·웹 간 동작 차이를 점검해 기능 일관성 확보',
        ],
      },
      {
        title: '운영 이슈 실시간 대응 및 장애 재현·원인 분석',
        date: '2025.03 - 2025.06',
        techStack: [],
        description: [
          '운영 단계에서 발생하는 이슈를 Slack 알림 기반으로 모니터링하고 평균 10분 내 초기 대응',
          'DataDog 세션 리플레이와 API 로그를 활용해 프론트엔드/백엔드 원인을 신속히 구분',
          '재현 경로와 원인 분석 결과를 정리해 개발팀에 전달, 핫픽스 및 장애 확산 방지에 기여',
        ],
      },
      {
        title: 'B2B/B2C 고객 분기 로직 정비로 운영 결함 예방',
        date: '2025.03',
        team: 'FE 1명, PM 1명',
        contribution: 50,
        techStack: ['Next.js', 'TypeScript', 'react-query'],
        description: [
          '53개 컴포넌트에 분산된 B2B/B2C 분기 로직을 통합해 결함 발생 가능성을 구조적으로 제거',
          '`useCustomerType` 커스텀 훅과 상수 기반 로직 설계로 53개의 컴포넌트의 조건 분기를 통합, TypeScript 인터페이스로 타입 안정성 확보.',
          '출석체크 인증이 누락되던 특정 B2B 고객 케이스를 식별 및 수정하여 실제 운영 이슈 해결',
        ],
      },
    ],
  },
  {
    color: '#ED1C24',
    title: '주식회사 에프엘이에스',
    date: '2022.01 - 2022.12',
    description: [
      '프론트엔드 개발자로 SI 프로젝트 및 "보라" 운세 서비스 리뉴얼을 담당했습니다.',
    ],
    project: [
      {
        title: '',
        date: '',
        intro: '',
        description: [
          '상태 관리 도입: recoil·react-query 등 여러 라이브러리 비교 후 러닝커브를 고려해 기술 스택 선정',
          '라이브러리 커스터마이징: 제한적인 무료 라이브러리 코드를 분석해 요구에 맞는 스크롤 이벤트 직접 구현',
          '백오피스 UI 구축(MUI): 여러 도메인이 재사용 가능한 엑셀 다운로드 공통 컴포넌트 개발  기획자 업무 시간 수시간 → 몇 분으로 단축',
          '동적 UI·애니메이션 개발: styled-components·react-spring 기반 카드 리스트/타로 카드 선택 인터랙션 구현',
          'NHpay 사주 페이지 개발: yup 기반 입력값 검증, 웹뷰 환경 대응(meta 태그·핀치줌 방지)',
        ],
      },
    ],
  },
] as const;

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
    title: '알바몬 AI QA 챌린지 참여',
    date: '2025.11',
    description: [
      'PRD 기반 테스트 케이스 생성부터 Playwright 로그인 자동화까지 AI와 협업하는 QA 워크플로우를 실험하고 회고를 공유했습니다.',
    ],
    link: [
      {
        url: 'https://dev-hamster.github.io/처음으로%20AI와%20협업해본%20QA%20경험',
      },
    ],
  },
];
