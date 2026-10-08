import React, { useEffect } from 'react';
import { X, ArrowRight, Printer, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl my-auto text-[#111111] border border-neutral-300 shadow-2xl transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar modal control */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto">
          {/* Title Area */}
          <div className="space-y-3">
            <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-snug">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image with Fallback */}
          <div className="relative w-full aspect-[16/10] bg-neutral-100 border border-neutral-200 overflow-hidden group">
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center -z-10 text-neutral-400">
              <span className="text-base font-bold tracking-wider uppercase">designdeams ARCHIVE</span>
            </div>
          </div>

          {/* Quick specs ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-6 bg-neutral-50 border border-neutral-200 text-xs">
            <div>
              <span className="text-neutral-500 block text-[11px]">Client</span>
              <span className="font-semibold text-[#111111]">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">Year</span>
              <span className="font-semibold text-[#111111]">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">Format / Pages</span>
              <span className="font-semibold text-[#111111]">{project.pages}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">Dimensions</span>
              <span className="font-semibold text-[#111111]">{project.size}</span>
            </div>
          </div>

          {/* 4-Step Narrative Breakdown */}
          <div className="space-y-8 pt-2">
            <div className="border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                Project Narrative & Process
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 01: Brief */}
              <div className="space-y-2 p-5 bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-[#111111]">01</span>
                  <span className="font-semibold">Brief — 목적 및 과제</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.brief}
                </p>
              </div>

              {/* Step 02: Approach */}
              <div className="space-y-2 p-5 bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-[#111111]">02</span>
                  <span className="font-semibold">Approach — 디자인 전략</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Step 03: Design */}
              <div className="space-y-2 p-5 bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-[#111111]">03</span>
                  <span className="font-semibold">Design — 편집·그리드·타이포</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.design}
                </p>
              </div>

              {/* Step 04: Outcome */}
              <div className="space-y-2 p-5 bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-[#111111]">04</span>
                  <span className="font-semibold">Outcome — 제작 결과 및 성과</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Print Specifications Card */}
          <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#111111] uppercase">
              <Printer className="w-4 h-4 text-neutral-600" />
              <span>Print & Production Specifications (인쇄 및 제작 사양)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-neutral-500 block text-[11px]">표지 지류 (Cover Stock)</span>
                <p className="text-[#111111] font-semibold">{project.specs.paperCover}</p>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 block text-[11px]">내지 지류 (Text Stock)</span>
                <p className="text-[#111111] font-semibold">{project.specs.paperInner}</p>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 block text-[11px]">제본 방식 (Binding)</span>
                <p className="text-[#111111] font-semibold">{project.specs.binding}</p>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 block text-[11px]">인쇄 도수 (Color Specification)</span>
                <p className="text-[#111111] font-semibold">{project.specs.printing}</p>
              </div>
              <div className="sm:col-span-2 space-y-1 pt-2 border-t border-neutral-200">
                <span className="text-neutral-500 block text-[11px]">특수 후가공 및 감리 (Finishing)</span>
                <p className="text-[#111111] font-semibold">{project.specs.finishing}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-neutral-600 pt-2">
              <span className="text-neutral-400">키워드 :</span>
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>#{tag}</span>
                  {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Bottom Conversion CTA */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-[#111111]">
                이 프로젝트와 유사한 형태의 제작물을 구상 중이신가요?
              </p>
              <p className="text-xs text-neutral-500">
                기획안과 대략적인 일정만으로도 정확한 사양과 가견적을 제안해 드립니다.
              </p>
            </div>
            <button
              onClick={() => {
                onInquireProject(project);
                onClose();
              }}
              className="px-6 py-3 text-xs font-semibold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-xs"
            >
              <span>비슷한 프로젝트 상담 신청</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
