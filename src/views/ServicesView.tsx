import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check, Layers, Printer, Clock, FileCheck } from 'lucide-react';

interface ServicesViewProps {
  onNavigateSection: (sectionId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigateSection }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '원고가 아직 초안 상태인데도 견적이나 일정 상담이 가능한가요?',
      a: '네, 가능합니다. 대략적인 주제, 예상 페이지 수(혹은 단어 수), 발간 희망일만 알려주시면 유사한 이전 프로젝트 사례를 바탕으로 예상 견적 범위와 일정표를 안내해 드립니다. 원고 완성 전 판형과 구조를 먼저 잡는 것이 작업 기간 단축에 더욱 유리합니다.'
    },
    {
      q: '디자인 조판만 의뢰하고, 인쇄는 저희 기관의 지정 인쇄소에서 진행해도 되나요?',
      a: '물론 가능합니다. 지정 인쇄소의 출력 사양(PDF/X-1a, ICC 프로파일, 재단 여백 3mm 규격 등)에 완벽히 맞춘 최종 CTP 출력용 인쇄 데이터를 납품해 드립니다. 필요 시 해당 인쇄소 제작 담당자와 직접 기술 소통을 진행합니다.'
    },
    {
      q: '디자인부터 인쇄·제본 납품까지 턴키(Turnkey)로 맡기면 어떤 장점이 있나요?',
      a: '디자인 단계에서부터 종이의 두께(평량)와 제본 여백, 접지 터짐 여부를 고려하여 기획하므로 화면과 실물의 오차가 없습니다. 또한 인쇄소 발주, 감리, 후가공, 물류 배송까지 원스톱으로 관리되어 담당자의 실무 부담을 대폭 줄여드립니다.'
    },
    {
      q: '전문적인 교정·교열(오탈자 및 맞춤법 검수)도 지원되나요?',
      a: '기본적인 편집 디자이너의 레이아웃 교정(단어 꺾임, 장/절 표기 통일, 자간 정렬)은 전 과정에 기본 포함됩니다. 출판 전문 윤문 및 1급 국어 교정 교열이 필요하신 경우 전문 교정 위원 협업 옵션을 추가하여 함께 진행 가능합니다.'
    },
    {
      q: '최종 납품 시 원본 작업 데이터(Adobe InDesign 파일) 제공이 가능한가요?',
      a: '기본 납품물은 영구 보관용 고해상도 인쇄용 PDF 및 웹 열람용 경량화 PDF입니다. 차후 내부 자체 수정을 위한 원본 파일(InDesign 패키지) 납품이 필요한 경우, 폰트 라이선스 및 저작재산권 양도 협의에 따라 계약 시 포함하여 납품해 드립니다.'
    },
    {
      q: '행사나 전시 개막이 임박한 긴급 일정의 프로젝트도 가능한가요?',
      a: '스튜디오의 당시 진행 중인 프로젝트 수주 상황에 따라 긴급 스케줄 편성 여부를 판단합니다. 주말 인쇄 감리 및 특급 퀵 교정 프로세스를 적용할 수 있으며, 이 경우 일정 단축에 따른 패스트트랙 조율을 진행합니다.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="services" className="scroll-mt-20 bg-white border-b border-neutral-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200 pb-12">
          <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            designdeams · 04 / SERVICES & CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            작업 범위 및 진행 가이드
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-2xl leading-relaxed">
            어디서부터 시작해야 할지 모르는 원고 정리부터, 완성도 높은 조판, 그리고 종이의 질감을 살린 인쇄 감리까지 편집디자인의 전 과정을 체계적으로 서포트합니다.
          </p>
        </div>

        {/* 4 Scope Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category 1 */}
          <div className="p-8 bg-white border border-neutral-200 space-y-5 hover:border-black transition-colors">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold text-[#111111]">01 / PUBLICATION</span>
              <span className="text-xs text-neutral-500 font-medium">도록 · 아트북 · 단행본</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              전시 도록 및 문화예술 출판물
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              미술관, 갤러리, 예술재단의 전시 도록, 아티스트 모노그래프, 학술 비평집을 기획·디자인합니다. 작품의 뉘앙스를 왜곡하지 않는 절제된 타이포그래피와 고품질 사철양장 제본을 지향합니다.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>미술관 아카이브 및 큐레이터 비평문 최적화 조판</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>국/영문 다국어 병기 서체 시스템 설계</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>작품 색상 일치를 위한 인쇄소 현장 감리</span>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="p-8 bg-white border border-neutral-200 space-y-5 hover:border-black transition-colors">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold text-[#111111]">02 / CORPORATE</span>
              <span className="text-xs text-neutral-500 font-medium">보고서 · 백서 · 브로슈어</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              기업 연례 보고서 & 브로슈어
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              지속가능경영(ESG) 보고서, 연차 보고서, 기업 IR 브로슈어를 제작합니다. 방대한 수치 데이터와 규정을 시각적으로 체계화하여 독자의 신뢰를 확보합니다.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>GRI/SASB 공시 기준 차트 및 인포그래픽 정밀화</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>친환경 콩기름 잉크 & FSC 인증 지류 컨설팅</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>PDF 인터랙티브 링크 및 목차 책갈피 포함 납품</span>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="p-8 bg-white border border-neutral-200 space-y-5 hover:border-black transition-colors">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold text-[#111111]">03 / EDUCATION</span>
              <span className="text-xs text-neutral-500 font-medium">교재 · 워크북 · 활동지</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              교육 교재 및 활동지 시리즈
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              어린이 예술 워크북, 청소년 진로 가이드북, 대학 및 연구기관 교육 매뉴얼을 디자인합니다. 필기감과 손에 닿는 촉감, 학습 편의성을 극대화합니다.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>연령별 시각 인지 능력에 맞춘 서체 크기 및 행간 설계</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>180도 완전 펼침 스프링 / PUR 제본 구조화</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>모서리 라운딩 및 친환경 무독성 코팅 처리</span>
              </div>
            </div>
          </div>

          {/* Category 4 */}
          <div className="p-8 bg-white border border-neutral-200 space-y-5 hover:border-black transition-colors">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold text-[#111111]">04 / PRODUCTION</span>
              <span className="text-xs text-neutral-500 font-medium">인쇄 사양 · 특수 후가공</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              인쇄 및 제작 품질 관리
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              지류 공급처 및 인쇄소 직발주를 통해 중간 유통 거품을 줄이고, 숙련된 감리를 통해 제작 퀄리티를 최상으로 보장합니다.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>종이 샘플북 기반 1:1 맞춤 지류 추천</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>박, 형압, 도무송, 특수 접지 금형 발주 관리</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>파주/충무로 인쇄 현장 입회 및 색상 대조</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estimation Guide: 견적에 영향을 주는 핵심 요소 */}
        <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
              ESTIMATION FACTORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              견적은 어떤 요소에 따라 결정되나요?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              편집디자인은 일률적인 단가표를 적용하기보다, 프로젝트의 구체적인 조건에 맞춰 가장 합리적인 견적을 산출하는 것이 원칙입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold text-[#111111]">01. 분량 (Volume)</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                총 페이지 수, 책자의 판형(크기), 전면 펼침 일러스트나 도판의 수량이 작업량에 직접적인 영향을 줍니다.
              </p>
            </div>
            <div className="p-5 bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold text-[#111111]">02. 원고 상태 (Manuscript)</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                완성된 텍스트 원고인지, 정보 구조 설계 및 원고 재구조화, 다이어그램 기획이 함께 필요한지에 따라 범위가 설정됩니다.
              </p>
            </div>
            <div className="p-5 bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold text-[#111111]">03. 제작 사양 (Specs)</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                수입 특수지 사용 여부, 제본 방식(무선/양장/사철/스프링), 특수 후가공(은박/형압/에폭시 등)의 복합성에 따라 제작비가 결정됩니다.
              </p>
            </div>
            <div className="p-5 bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold text-[#111111]">04. 일정 (Lead Time)</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                충분한 검토 일정을 가진 표준 일정인지, 전시나 행사 개막에 맞춘 단기 급행(패스트트랙)인지에 따라 스케줄을 조율합니다.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-1">
              자주 묻는 질문 (FAQ)
            </h3>
          </div>

          <div className="border border-neutral-200 divide-y divide-neutral-200 bg-white">
            {faqs.map((item, idx) => (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111]">
                    {item.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="text-center p-12 bg-white border border-neutral-200 space-y-4">
          <h3 className="text-2xl font-bold text-[#111111]">
            궁금한 점이 더 있으시거나 바로 견적을 확인하고 싶으신가요?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            24시간 이내에 원고 상태에 맞는 최적의 제작 견적서와 샘플 사양을 회신해 드립니다.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigateSection('contact')}
              className="px-8 py-3.5 text-xs font-bold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>상담 및 견적 문의하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
