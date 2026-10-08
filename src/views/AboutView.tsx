import React from 'react';
import { ArrowRight, Check, Printer, Compass, BookOpen, Layers } from 'lucide-react';

interface AboutViewProps {
  onNavigateSection: (sectionId: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateSection }) => {
  return (
    <section id="about" className="scroll-mt-20 bg-white border-b border-neutral-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Top Banner / Philosophy */}
        <div className="space-y-6 border-b border-neutral-200 pb-16">
          <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            designdeams · 03 / ABOUT & PHILOSOPHY
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111111] leading-tight max-w-4xl text-balance">
            보기 좋은 디자인을 넘어,<br />
            <span className="text-neutral-500 font-bold">완성도 높은 결과물까지.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-3xl leading-relaxed pt-2">
            기획의 의도를 온전히 이해하고, 복잡한 정보를 명쾌하게 정리하며, 인쇄와 제본의 물성까지 책임지는 편집디자인 전문 파트너 <strong className="text-[#111111]">designdeams</strong>입니다.
            단순한 '디자인 외주 작업자'에 머무르지 않고, 처음부터 끝까지 프로젝트의 성공을 함께 고민합니다.
          </p>
        </div>

        {/* 3 Core Values: DESIGN, TRUST, CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-neutral-200 space-y-4 hover:border-black transition-colors">
            <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              PILLAR 01
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              DESIGN
            </h3>
            <div className="text-xs font-semibold text-neutral-500">시각적 완성도와 디자인 감각</div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              과한 장식보다는 활자의 비례, 수학적인 단 그리드, 숨 쉴 수 있는 여백으로 디자인의 깊이를 만듭니다. 본문 1페이지부터 300페이지까지 시각적 질서와 읽는 리듬을 유지합니다.
            </p>
          </div>

          <div className="p-8 bg-white border border-neutral-200 space-y-4 hover:border-black transition-colors">
            <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              PILLAR 02
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              TRUST
            </h3>
            <div className="text-xs font-semibold text-neutral-500">전문성, 경험, 체계적인 진행</div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              10년 이상의 출판 및 인쇄 실무 경력으로 인쇄 사고를 원천 차단합니다. 단계별 교정 일정과 납기 역산 스케줄을 클라이언트와 투명하게 공유합니다.
            </p>
          </div>

          <div className="p-8 bg-white border border-neutral-200 space-y-4 hover:border-black transition-colors">
            <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              PILLAR 03
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              CONTACT
            </h3>
            <div className="text-xs font-semibold text-neutral-500">쉽고 명확한 상담과 견적</div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              규격화된 불명확한 단가표 대신 원고 분량, 판형, 지류, 후가공, 납기에 따른 현실적인 가견적을 신속히 산출해 드리며, 프로젝트 규모가 미정인 경우에도 최적안을 제시합니다.
            </p>
          </div>
        </div>

        {/* Studio Workspace & Physical Craftsmanship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-y border-neutral-200 py-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                PHYSICAL CRAFTSMANSHIP
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
                화면 속 픽셀에서,<br />손끝에 닿는 종이의 질감으로
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              편집디자인은 화면상의 그래픽 시안만으로 평가받을 수 없습니다. 책장을 넘길 때의 종이 무게감, 펼침성, 인쇄 잉크의 발색, 척추 제본의 견고함 등 '물성(Physicality)'이 동반될 때 진정한 감동을 전달합니다.
            </p>
            <div className="space-y-2.5 text-xs text-neutral-700 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black" />
                <span>국내외 100여 종의 인쇄 지류(아르떼, 문켄, 그문드, 랑데뷰 등) 샘플 상시 보유</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black" />
                <span>양장, 사철노출, PUR, 스프링, 아코디언 병풍 접지 등 특수 제본 설계</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black" />
                <span>파주 출판단지 및 충무로 전문 인쇄소 네트워크와 1:1 현장 감리</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] bg-neutral-100 border border-neutral-200 overflow-hidden">
              <img
                src="/src/assets/images/editorial_studio_workspace_1791438364662.jpg"
                alt="designdeams 스튜디오 워크스페이스"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Career Timeline & Milestones */}
        <div className="space-y-8">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
              TIMELINE & BACKGROUND
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-1">
              스튜디오 연혁 및 실무 이력
            </h3>
          </div>

          <div className="border-l border-neutral-300 pl-6 space-y-8 ml-2">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-black" />
              <div className="text-xs font-bold text-[#111111]">2024 — 현재</div>
              <h4 className="text-lg font-bold text-[#111111]">
                공공 문화예술기관 및 대형 기획전시 전담 편집 파트너십
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                국립현대미술관, 서울시립미술관, 서울디자인재단 등 주요 미술관 및 문화재단 기획전 도록, 안내 리플렛, 예술교육 워크북 40여 종 기획·제작 완료.
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-400" />
              <div className="text-xs font-bold text-[#111111]">2021 — 2023</div>
              <h4 className="text-lg font-bold text-[#111111]">
                기업 지속가능경영(ESG) 보고서 및 종합 브로슈어 디자인 전담
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                IT 테크 및 제조 대기업 연례 보고서(Annual Report) 15종 이상 제작. LACP 스포트라이트 어워드 수상작 조판 및 인포그래픽 표준 가이드라인 정립.
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <div className="text-xs font-bold text-[#111111]">2016 — 2020</div>
              <h4 className="text-lg font-bold text-[#111111]">
                출판사 단행본 북디자인 및 designdeams 설립
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                문학, 인문, 예술 분야 단행본 180여 종 조판 및 북디자인 총괄. 2016년 편집디자인 전문 스튜디오 'designdeams' 설립.
              </p>
            </div>
          </div>
        </div>

        {/* Main Clients Logos/Listing */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
              COLLABORATIVE CLIENTS
            </span>
            <h3 className="text-2xl font-extrabold text-[#111111] mt-1">
              함께 협업한 주요 기관 및 파트너
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs font-semibold text-neutral-700">
            <div className="p-4 bg-white border border-neutral-200 text-center">국립현대미술관 (MMCA)</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">서울시립미술관 (SeMA)</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">서울디자인재단</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">한국문화예술위원회 (ARKO)</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">경기문화재단</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">SK 하이테크 미래전략실</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">현대모비스 기술연구소</div>
            <div className="p-4 bg-white border border-neutral-200 text-center">도서출판 아키폼</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-[#111111] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">
              새로운 출판 또는 인쇄 프로젝트를 계획하고 계신가요?
            </h3>
            <p className="text-xs text-neutral-300">
              기획 단계부터 인쇄 제작까지 신뢰할 수 있는 파트너와 함께 시작하세요.
            </p>
          </div>
          <button
            onClick={() => onNavigateSection('contact')}
            className="px-6 py-3 text-xs font-bold tracking-wider text-black bg-white hover:bg-neutral-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            프로젝트 상담 신청
          </button>
        </div>
      </div>
    </section>
  );
};
