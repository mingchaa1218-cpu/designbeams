import React, { useState } from 'react';
import { ArrowRight, Filter, Search, Printer, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project, ProjectCategory } from '../types';

interface WorkViewProps {
  onSelectProject: (project: Project) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectProject, onNavigateSection }) => {
  const { projects } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryFilters = [
    { id: 'all', label: '전체 프로젝트' },
    { id: 'editorial', label: '전시 도록 · 문화예술 출판' },
    { id: 'brochure', label: '브로슈어 · 연례 보고서' },
    { id: 'educational', label: '교육 교재 · 활동지' },
    { id: 'exhibition', label: '전시 그래픽 · 리플렛' },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery = 
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="work" className="scroll-mt-20 bg-white border-b border-neutral-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top Header */}
        <div className="space-y-4 border-b border-neutral-200 pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            <span>designdeams · 02 / ARCHIVE & CASE STUDIES</span>
            <span aria-hidden="true">·</span>
            <span>총 {projects.length}개 프로젝트</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Selected Works & Archives
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-2xl leading-relaxed">
            국립미술관 도록, 기업 ESG 지속가능경영 보고서, 교육재단 교재, 비엔날레 전시 안내물 등
            기획 의도를 살리고 인쇄 물성을 극대화한 designdeams의 실물 편집디자인 포트폴리오입니다.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-200">
            {categoryFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-[#111111] text-white'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="프로젝트, 기관명, 지류 검색"
              className="w-full pl-8 pr-4 py-2 bg-white border border-neutral-300 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-black"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-[10px] text-neutral-400 hover:text-black"
              >
                지우기
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center bg-white border border-neutral-200 space-y-3">
            <p className="text-sm text-neutral-500">
              선택한 조건에 일치하는 프로젝트가 없습니다.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#111111] underline font-bold"
            >
              전체 목록 다시 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Media Image with Fallback */}
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden border-b border-neutral-200">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {proj.featured && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 text-[10px] text-white font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                      <span>{proj.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{proj.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{proj.client}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111111] group-hover:text-neutral-600 transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                {/* Specs and Call to Action */}
                <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-neutral-500 truncate max-w-[190px] font-medium">
                    {proj.specs.binding}
                  </span>
                  <span className="font-bold text-[#111111] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[11px]">
                    케이스 스터디 <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Inquiry prompt at bottom of work archive */}
        <div className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#111111]">
              원하시는 스타일이나 형태의 출판물이 있으신가요?
            </h3>
            <p className="text-xs text-neutral-600">
              포트폴리오에 등록되지 않은 특수 제본 및 비규격 사양도 제작 가능 여부를 상담해 드립니다.
            </p>
          </div>
          <button
            onClick={() => onNavigateSection('contact')}
            className="px-6 py-3 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            제작 사양 문의하기
          </button>
        </div>
      </div>
    </section>
  );
};
