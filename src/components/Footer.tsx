import React from 'react';
import { useData } from '../context/DataContext';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAdmin }) => {
  const { studioInfo } = useData();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          {/* Col 1: Studio Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold text-[#111111] tracking-tight lowercase">
              {studioInfo.name}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              보기 좋은 디자인을 넘어, 완성도 높은 결과물까지.
              기획의 의도를 깊이 이해하고, 복잡한 정보를 명쾌하게 구조화하며, 인쇄 공정과 제본의 물성까지 책임지는 편집디자인 전문 파트너 designdeams입니다.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-medium">
              <span>SEOUL, KR</span>
              <span className="mx-2">·</span>
              <span>EST. 2016</span>
              <span className="mx-2">·</span>
              <span>EDITORIAL & PRINT DESIGN</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold tracking-widest text-[#111111] uppercase">
              Index
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Home (첫인상 · 대표작)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('work')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Work (프로젝트 · 인쇄 사례)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  About (소개 · 작업 철학 · 경력)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Services (작업 범위 · 진행 프로세스)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Contact (상담 및 견적 문의)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold tracking-widest text-[#111111] uppercase">
              Studio Contact
            </div>
            <div className="space-y-2 text-xs text-neutral-600 leading-relaxed">
              <p>
                <span className="text-neutral-400 block text-[11px]">E-mail</span>
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="font-semibold text-[#111111] hover:underline"
                >
                  {studioInfo.email}
                </a>
              </p>
              <p>
                <span className="text-neutral-400 block text-[11px]">Direct</span>
                <span className="font-semibold text-[#111111]">{studioInfo.phone}</span>
              </p>
              <p>
                <span className="text-neutral-400 block text-[11px]">Address</span>
                <span>{studioInfo.address}</span>
              </p>
              <p className="text-[11px] text-neutral-500 pt-1">
                {studioInfo.workingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright & admin link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} designdeams. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateSection('services')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              인쇄 및 제작 가이드
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              견적 요청서
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#111111] transition-colors cursor-pointer text-neutral-600"
            >
              관리자 모드 (Admin)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
