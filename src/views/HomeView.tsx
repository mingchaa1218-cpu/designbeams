import React from 'react';
import { 
  ArrowRight, ArrowUpRight, Printer, CheckCircle2, Shield, Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface HomeViewProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectProject: (project: Project) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateSection,
}) => {
  return (
    <section id="home" className="scroll-mt-20 bg-white border-b border-neutral-200 pb-20 pt-12 sm:pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-2">
                <span>designdeams · EDITORIAL DESIGN & PRINT PARTNER</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#111111] leading-[1.12] text-balance">
                내용을 읽고,<br />
                구조를 설계하고,<br />
                <span className="text-neutral-500 font-bold">디자인으로 완성합니다.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl text-pretty">
              편집디자인부터 인쇄 제작까지, 프로젝트의 목적과 메시지를 명확하게 전달하는 디자인을 만듭니다.
              단순한 시각적 외주를 넘어 원고의 의도를 파악하고 인쇄 물성까지 책임지는 편집디자인 전문 파트너 <strong className="text-[#111111] font-semibold">designdeams</strong>입니다.
            </p>

            {/* Action Buttons: Scroll to corresponding sections */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigateSection('work')}
                className="px-6 py-3.5 text-xs font-bold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>대표 프로젝트 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateSection('contact')}
                className="px-6 py-3.5 text-xs font-bold tracking-wider text-[#111111] bg-white border border-[#111111] hover:bg-neutral-100 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>프로젝트 문의하기</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-8 border-t border-neutral-200 grid grid-cols-3 gap-6 text-xs">
              <div>
                <span className="block text-xl font-bold text-[#111111]">10+ Years</span>
                <span className="text-neutral-500 text-[11px]">기획 출판 및 인쇄 실무</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#111111]">280+</span>
                <span className="text-neutral-500 text-[11px]">완성된 편집 프로젝트</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#111111]">100%</span>
                <span className="text-neutral-500 text-[11px]">인쇄 감리 품질 보증</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => onNavigateSection('work')}
              className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden group cursor-pointer"
            >
              <img
                src="/src/assets/images/editorial_art_catalogue_1791438301738.jpg"
                alt="전시 도록 아카이브 북"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                <div className="text-[11px] font-semibold text-neutral-300">
                  FEATURED PUBLICATION · MMCA
                </div>
                <div className="text-base font-bold">
                  국립현대미술관 기획전 도록 〈경계의 시간〉
                </div>
              </div>
            </div>

            {/* Sub-note on craft */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-start gap-3 text-xs text-neutral-600">
              <Printer className="w-4 h-4 text-neutral-800 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                화면상의 시안에 머무르지 않고 종이 지류 선정, 사철 바인딩, 특수 박 가공 및 감리까지 실물 인쇄의 완성도를 엄격하게 검증합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
