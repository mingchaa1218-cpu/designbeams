import React, { useState } from 'react';
import { Lock, Menu, X, ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';

interface HeaderProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigateSection,
  onOpenAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAdmin } = useData();

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          aria-label="designdeams 홈으로 이동"
        >
          <span className="text-2xl font-bold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors lowercase">
            designdeams
          </span>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider font-semibold text-neutral-500">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 transition-colors hover:text-[#111111] cursor-pointer whitespace-nowrap ${
                activeSection === item.id ? 'text-[#111111] font-bold' : ''
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#111111]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Admin */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap border border-[#111111]"
          >
            <span>프로젝트 문의</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenAdmin}
            title={isAdmin ? '관리자 모드 활성 (클릭하여 관리)' : '관리자 모드 (비밀번호: 1234)'}
            className={`p-2 transition-colors cursor-pointer border ${
              isAdmin
                ? 'bg-neutral-100 border-neutral-400 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-100'
            }`}
            aria-label="관리자 메뉴 열기"
          >
            <Lock className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900 hover:bg-neutral-100 cursor-pointer"
            aria-label="모바일 메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-sm tracking-wider cursor-pointer ${
                  activeSection === item.id ? 'font-bold text-[#111111]' : 'text-neutral-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-xs font-semibold tracking-wider text-center text-white bg-[#111111]"
            >
              프로젝트 문의하기
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 text-xs text-neutral-700 border border-neutral-300 text-center flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>포트폴리오 관리자 (Admin)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
