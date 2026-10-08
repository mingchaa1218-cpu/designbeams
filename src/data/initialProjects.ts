import { Project, StudioInfo } from '../types';

export const INITIAL_STUDIO_INFO: StudioInfo = {
  name: 'designdeams',
  subtitle: 'Editorial Design & Print Production',
  director: 'Editorial Design Specialist',
  email: 'contact@designdeams.kr',
  phone: '02-732-8410',
  address: '서울특별시 마포구 독막로 42, 3F (상수동)',
  workingHours: '월-금 10:00 - 18:30 (주말 및 공휴일 휴무)',
  availabilityNotice: '현재 2026년 상반기 기획 출판 및 인쇄 프로젝트 상담 진행 중입니다.'
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: '국립현대미술관 기획전 도록 〈경계의 시간〉',
    subtitle: '동시대 예술가 12인의 장소 특정적 설치 작업을 기록한 양장 도록',
    category: 'editorial',
    categoryLabel: '전시 도록 · 문화예술 출판물',
    client: '국립현대미술관 (MMCA)',
    year: '2025',
    pages: '280 pages',
    size: '185 × 250 mm',
    coverImage: '/src/assets/images/editorial_art_catalogue_1791438301738.jpg',
    featured: true,
    order: 1,
    brief: '전시의 핵심 주제인 "경계의 모호함과 시간의 중첩"을 책이라는 물성으로 구현해야 했습니다. 일반적인 도록의 정형화된 액자식 레이아웃에서 벗어나, 관람객이 전시장을 걷듯 여백과 시각적 호흡을 느낄 수 있는 아카이브 북을 목표로 했습니다.',
    approach: '작품 사진과 비평 텍스트 간의 위계를 새롭게 조율했습니다. 작가별 인터뷰와 에세이 섹션은 1단 좁은 판형 그리드로 가독성을 극대화하고, 도판 섹션은 전면 펼침면(Double-page spread)과 비대칭 3단 그리드를 교차하여 전시 현장의 밀도를 지면으로 번역했습니다.',
    design: '타이포그래피는 한국어 본문에 정제된 명조체(Noto Serif KR 9.5pt, 자간 -20, 행간 175%)를 적용하고, 영역 번역본에는 클래식 세리프를 병치했습니다. 판형 상하좌우 마진을 35mm 이상 확보하여 종이 자체의 질감이 독서 경험의 일부가 되도록 설계했습니다.',
    outcome: '표지에는 촉감이 두드러지는 아르떼 울트라화이트 310g에 흑박과 깊은 형압 가공을 적용했으며, 본문은 비침이 적고 인쇄 재현율이 높은 문켄 퓨어 120g을 사용하여 작가와 미술관 모두에게 높은 만족도를 이끌어냈습니다. 전시 기간 중 전량 완판되었습니다.',
    specs: {
      paperCover: '아르떼(Arte) 울트라화이트 310g + 흑박(Black Foil) & 엠보싱 형압',
      paperInner: '문켄 퓨어(Munken Pure) 120g, 인스퍼 M 러프 105g',
      binding: '노출 사철 양장 제본 (Singer-sewn Exposed Spine Binding, 실 색상: 차콜그레이)',
      printing: '옵셋 4도 (본문 특수 먹 1도 추가 5도 인쇄)',
      finishing: '표지 정밀 디보싱, 면지 앤티크 드라이 그레이 140g'
    },
    tags: ['전시 도록', '미술관 아카이브', '사철양장', '타이포그래피']
  },
  {
    id: 'proj-02',
    title: 'SK 미래하이테크 지속가능경영 보고서 & 브로슈어',
    subtitle: '방대한 ESG 데이터와 비전을 직관적인 인포그래픽과 체계적인 그리드로 정리한 연례 보고서',
    category: 'brochure',
    categoryLabel: '브로슈어 · 보고서',
    client: 'SK 하이테크 미래전략실',
    year: '2025',
    pages: '144 pages',
    size: '210 × 280 mm',
    coverImage: '/src/assets/images/editorial_annual_report_1791438327099.jpg',
    featured: true,
    order: 2,
    brief: '공시용 보고서 특유의 딱딱하고 읽기 힘든 원고를 임직원, 투자자, 글로벌 파트너 모두가 명확히 이해할 수 있도록 친화적이고 신뢰감 있는 비주얼 커뮤니케이션 도구로 재구성하는 것이 과제였습니다.',
    approach: 'GRI(Global Reporting Initiative) 가이드라인을 준수하면서도 3대 핵심 축인 환경, 사회, 거버넌스 챕터를 명확한 인덱스 시스템과 색채 팔레트로 구조화했습니다. 복잡한 수치 데이터는 모듈형 인포그래픽 카드로 규격화했습니다.',
    design: '12단 복합 그리드 시스템을 구축하여 표, 다이어그램, 사진, 본문이 한 페이지 내에서 유기적으로 조화되도록 했습니다. 가독성을 위해 본문은 현대적인 고딕(Sandoll 고딕Neo1 9pt)과 숫자 전용 타뷸라 폰트를 조합했습니다.',
    outcome: '국제 LACP 스포트라이트 어워드 금상 수상에 기여하였으며, 재생 펄프 100% 친환경 FSC 인증 지류를 사용하여 지속가능경영 보고서의 진정성을 인쇄물 물성 자체로 입증했습니다.',
    specs: {
      paperCover: '그문드(Gmund) 바우하우스 웜그레이 270g + 매트 실버박',
      paperInner: '한솔 백상지 FSC 인증 친환경지 100g',
      binding: 'PUR 무선제본 (펼침성이 뛰어난 친환경 폴리우레탄 제본)',
      printing: '옵셋 4도 콩기름 잉크(Soy Ink) 인쇄',
      finishing: '표지 3단 날개 가공, 친환경 무광 코팅'
    },
    tags: ['지속가능경영 보고서', '연례 브로슈어', '인포그래픽', '친환경 인쇄']
  },
  {
    id: 'proj-03',
    title: '서울문화재단 어린이 예술교육 워크북 시리즈 (전 3종)',
    subtitle: '시각적 흥미와 교육적 체계성을 조화시킨 자기주도형 예술 탐구 워크북',
    category: 'educational',
    categoryLabel: '교육 교재 · 활동지',
    client: '서울문화재단 예술교육본부',
    year: '2025',
    pages: '88 pages × 3권 세트',
    size: '210 × 260 mm',
    coverImage: '/src/assets/images/editorial_educational_workbook_1791438339352.jpg',
    featured: true,
    order: 3,
    brief: '초등학생 대상의 창의 워크북으로, 아이들이 쉽게 낙서하고 붙이고 그릴 수 있으면서도 교사와 학부모에게는 공신력 있는 교육 커리큘럼으로서의 신뢰감을 주어야 했습니다.',
    approach: '학습 단계별 아이콘과 컬러 코딩을 도입하고, 지시문과 자유 활동 영역의 여백 비례를 엄격히 분리했습니다. 글씨를 쓰는 선의 두께와 눈의 피로도를 낮추는 인쇄 톤을 연구하여 최적의 지면을 설계했습니다.',
    design: '귀엽기만 한 유아풍 디자인을 지양하고, 조형미와 타이포그래피의 균형을 중시하는 유럽 교재 스타일을 차용했습니다. 펜, 마카, 색연필 등 다양한 필기구를 사용해도 뒷면 비침이 없도록 130g 고평량 모조지를 채택했습니다.',
    outcome: '서울시 내 45개 예술교육기관에 배포되어 "아이들이 책을 아끼며 스스로 기록하고 싶어 한다"는 교사 평가 최고점을 획득했습니다. 2쇄 증쇄 인쇄 제작까지 성공적으로 총괄 납품했습니다.',
    specs: {
      paperCover: '스노우화이트 300g + 벨벳 무광 라미네이팅 코팅 (내구성 강화)',
      paperInner: '미색 모조지 130g (필기감 및 잉크 번짐 방지 특수지)',
      binding: '와이어 오링 트윈 스프링 제본 (180도 완전 펼침 설계)',
      printing: '옵셋 4도 양면 풀컬러 인쇄',
      finishing: '표지 둥근 모서리(라운딩 8R) 안전 가공, 스티커 별지 포함'
    },
    tags: ['교육 교재', '워크북', '스프링 제본', '활동지']
  },
  {
    id: 'proj-04',
    title: '서울 디자인 비엔날레 종합 안내 리플렛 & 도면 가이드',
    subtitle: '방문객 동선과 6개 특별관 정보를 한눈에 파악할 수 있는 12단 아코디언 병풍 접지물',
    category: 'exhibition',
    categoryLabel: '전시 그래픽 · 안내물',
    client: '서울디자인재단 비엔날레 기획단',
    year: '2024',
    pages: '12면 양면 리플렛 (펼침 840 × 210 mm)',
    size: '접지 105 × 210 mm',
    coverImage: '/src/assets/images/editorial_exhibition_leaflet_1791438353424.jpg',
    featured: true,
    order: 4,
    brief: '축구장 2배 면적의 복합 전시 공간을 탐색하는 수만 명의 관람객이 주머니에 넣고 다니며 언제든 쉽게 접고 펼칠 수 있는 콤팩트하면서도 견고한 리플렛이 필요했습니다.',
    approach: '단순한 정보 나열 대신 관람 시간별(1시간, 3시간, 종일 코스) 추천 동선 맵을 중앙 전면 펼침면에 배치하고, 접힌 상태의 각 면이 독립적인 전시관 인덱스 카드로 작동하도록 접지 시퀀스를 수학적으로 계산했습니다.',
    design: '비엔날레의 상징적인 시각 아이덴티티와 그리드 시스템을 계승하여 정밀한 아이소메트릭 지도 그래픽과 다국어(국·영·중) 타이포그래피를 빈틈없이 정렬했습니다.',
    outcome: '현장 배포 10만 부 전량 인쇄 감리를 무사고로 완료하였으며, 관람객 분실율을 현저히 낮추고 재수거율을 높인 우수 전시 안내물로 평가받았습니다.',
    specs: {
      paperCover: '랑데뷰 내추럴 130g (접힘 터짐 방지 및 우수한 텐션감)',
      paperInner: '단일 지류 양면 인쇄',
      binding: '12단 병풍형 아코디언 정밀 오시(Creasing) 접지 가공',
      printing: '옵셋 4도 + 별색 팬톤 네온 오렌지(PMS 021C) 1도 추가',
      finishing: '고속 정밀 도무송 컷팅'
    },
    tags: ['전시 리플렛', '아코디언 접지', '별색 인쇄', '지도 그래픽']
  },
  {
    id: 'proj-05',
    title: '건축과 도시 공간 아카이브 〈STRUCTURES〉 Vol. 04',
    subtitle: '근현대 서울 건축 유산을 조망하는 독립 건축 저널 겸 단행본',
    category: 'editorial',
    categoryLabel: '전시 도록 · 문화예술 출판물',
    client: '도서출판 아키폼 & 서울도시건축전시관',
    year: '2024',
    pages: '220 pages',
    size: '170 × 240 mm',
    coverImage: '/src/assets/images/editorial_studio_workspace_1791438364662.jpg',
    featured: false,
    order: 5,
    brief: '사라져가는 서울의 근현대 건축물을 사진과 실측 도면, 구술 인터뷰로 엮어내는 아카이브 단행본으로, 도서관 장서로서의 보존성과 서점 매대에서의 주목도를 동시에 충족해야 했습니다.',
    approach: '도면의 선 굵기와 흑백 사진의 계조가 뭉개지지 않도록 정밀한 인쇄 도수와 스크린선수(175선)를 지정하고, 본문 조판의 3분할 열 너비를 황금비로 분배하여 읽는 리듬을 부여했습니다.',
    design: '커버는 거친 린넨 패브릭 질감의 특수지 위에 흑색 실크스크린을 인쇄하여 건물의 콘크리트 질감을 연상시키도록 연출했습니다. 척추 부분에는 붉은색 가늠끈을 삽입하여 클래식한 서책의 품격을 더했습니다.',
    outcome: '한국출판문화산업진흥원 우수출판콘텐츠로 선정되었으며, 주요 독립서점 및 대형서점 예술 부문 베스트셀러에 진입했습니다.',
    specs: {
      paperCover: '엔젤클로스 린넨 질감 블랙 120g 합지 하드커버 양장',
      paperInner: '그린라이트지 90g (은은한 미색, 눈부심 방지)',
      binding: '전통 양장 제본 (Hardcover Case Binding) + 고급 가늠끈(Bookmark Ribbon)',
      printing: '본문 흑백 듀오톤(Duotone) 고정밀 인쇄',
      finishing: '표지 백색 & 은색 2중 실크 스크린 인쇄, 헤드밴드 패브릭 매칭'
    },
    tags: ['건축 단행본', '하드커버 양장', '흑백 사진집', '아카이브']
  },
  {
    id: 'proj-06',
    title: '지역 문화재단 문화예술 정책 포럼 백서 & 정책 브리프',
    subtitle: '복잡한 정책 연구 데이터와 통계를 명쾌하게 전달하는 공공기관 연구 보고서',
    category: 'brochure',
    categoryLabel: '브로슈어 · 보고서',
    client: '경기문화재단 정책기획실',
    year: '2024',
    pages: '196 pages',
    size: '190 × 260 mm',
    coverImage: '/src/assets/images/editorial_annual_report_1791438327099.jpg',
    featured: false,
    order: 6,
    brief: '공공기관의 연례 연구 보고서는 캐비닛에 보관만 되고 읽히지 않는 경우가 많습니다. 정책 입안자와 일반 시민이 모두 손쉽게 발췌독할 수 있는 실용적인 브리프 형태의 백서가 요구되었습니다.',
    approach: '각 챕터 도입부에 2페이지 분량의 "Key Takeaways(핵심 요약)" 브리프를 신설하고, 요약부와 본문 연구 데이터의 지류와 색상을 명확히 차별화하여 직관적인 브라우징을 가능하게 했습니다.',
    design: '데이터 시각화 차트에 일관된 단색조 그라데이션을 적용하고, 통계 테이블의 불필요한 테두리를 전면 제거하여 정보의 순수한 수치 비교가 돋보이도록 타이포그래피 정렬을 엄격히 적용했습니다.',
    outcome: '공공기관 평가에서 "연구 성과 확산력이 가장 뛰어난 간행물"로 선정되었으며, 후속 연구 간행물 4종의 디자인 표준 가이드라인으로 채택되었습니다.',
    specs: {
      paperCover: '로얄아이보리 350g + 친환경 에코 무광 코팅',
      paperInner: '뉴플러스지 100g (차트 발색력과 가벼운 휴대성)',
      binding: 'PUR 무선 제본 + 챕터별 인덱스 커팅 가공',
      printing: '옵셋 4도 인쇄 (식물성 잉크)',
      finishing: '제목 에폭시(부분 UV) 코팅'
    },
    tags: ['정책 백서', '공공기관 간행물', '데이터 시각화', 'PUR 제본']
  }
];

export const INITIAL_INQUIRIES = [
  {
    id: 'inq-01',
    clientName: '박서현 실장 (아트센터 나비 전시팀)',
    email: 'sh.park@nabi-art.org',
    phone: '010-8291-3820',
    projectType: '도록 / 책자 / 보고서',
    budget: '300만 원 이상',
    timeline: '2026년 4월 말 전시 개막 (인쇄 납품 희망: 4월 20일)',
    message: '가을 미디어아트 기획전시 도록 200페이지 내외 제작을 준비 중입니다. 국립현대미술관 도록 사례처럼 감각적이면서도 비평문과 도판이 단정하게 배치된 사철양장 형태를 희망합니다. 기획안 및 원고 초안 검토 후 견적서 및 일정 협의 가능할까요?',
    fileName: '2026_미디어아트기획전_도록기획안.pdf',
    status: 'reviewing' as const,
    createdAt: '2026-10-06 14:20'
  },
  {
    id: 'inq-02',
    clientName: '이진우 책임 (테크놀로지 파트너스 홍보팀)',
    email: 'jw.lee@tech-partners.kr',
    phone: '010-3341-9921',
    projectType: '브로슈어 / 리플렛',
    budget: '100만~300만 원',
    timeline: '2026년 5월 글로벌 컨퍼런스 배포',
    message: '기업 IR 소개 브로슈어 국·영문 2종 제작 건입니다. 기존 자료가 텍스트 위주라 다이어그램과 인포그래픽 정리가 시급합니다. 인쇄 감리까지 함께 진행해주시는 조건으로 일정 문의드립니다.',
    fileName: 'IR_Brochure_Draft_2026.docx',
    status: 'quoted' as const,
    createdAt: '2026-10-04 11:05'
  }
];
