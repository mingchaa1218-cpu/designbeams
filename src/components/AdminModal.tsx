import React, { useState } from 'react';
import { 
  X, Lock, Plus, Edit2, Trash2, Star, Check, Copy, AlertCircle, RefreshCw, Eye, ExternalLink, ShieldCheck, Mail
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project, Inquiry, ProjectCategory, InquiryStatus } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectForPreview: (project: Project) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectForPreview
}) => {
  const {
    projects,
    inquiries,
    studioInfo,
    isAdmin,
    loginAdmin,
    logoutAdmin,
    addProject,
    updateProject,
    deleteProject,
    toggleFeatured,
    resetProjects,
    updateInquiryStatus,
    deleteInquiry,
    updateStudioInfo
  } = useData();

  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'inquiries' | 'studio'>('projects');
  
  // Project editing state
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formError, setFormError] = useState('');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Form fields
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('editorial');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2025');
  const [pages, setPages] = useState('160 pages');
  const [size, setSize] = useState('180 × 250 mm');
  const [coverImage, setCoverImage] = useState('/src/assets/images/editorial_art_catalogue_1791438301738.jpg');
  const [featured, setFeatured] = useState(false);
  const [brief, setBrief] = useState('');
  const [approach, setApproach] = useState('');
  const [design, setDesign] = useState('');
  const [outcome, setOutcome] = useState('');
  const [paperCover, setPaperCover] = useState('');
  const [paperInner, setPaperInner] = useState('');
  const [binding, setBinding] = useState('');
  const [printing, setPrinting] = useState('');
  const [finishing, setFinishing] = useState('');
  const [tagsStr, setTagsStr] = useState('');

  // Studio fields
  const [studioEmail, setStudioEmail] = useState(studioInfo.email);
  const [studioPhone, setStudioPhone] = useState(studioInfo.phone);
  const [studioAddress, setStudioAddress] = useState(studioInfo.address);
  const [studioNotice, setStudioNotice] = useState(studioInfo.availabilityNotice);
  const [studioSavedMsg, setStudioSavedMsg] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passwordInput)) {
      setPasswordError(false);
      setPasswordInput('');
    } else {
      setPasswordError(true);
    }
  };

  const handleOpenEdit = (proj: Project) => {
    setEditingProject(proj);
    setIsAddingNew(false);
    setTitle(proj.title);
    setSubtitle(proj.subtitle);
    setCategory(proj.category);
    setClient(proj.client);
    setYear(proj.year);
    setPages(proj.pages);
    setSize(proj.size);
    setCoverImage(proj.coverImage);
    setFeatured(proj.featured);
    setBrief(proj.brief);
    setApproach(proj.approach);
    setDesign(proj.design);
    setOutcome(proj.outcome);
    setPaperCover(proj.specs.paperCover);
    setPaperInner(proj.specs.paperInner);
    setBinding(proj.specs.binding);
    setPrinting(proj.specs.printing);
    setFinishing(proj.specs.finishing);
    setTagsStr(proj.tags.join(', '));
  };

  const handleOpenAdd = () => {
    setEditingProject(null);
    setIsAddingNew(true);
    setTitle('');
    setSubtitle('');
    setCategory('editorial');
    setClient('');
    setYear(new Date().getFullYear().toString());
    setPages('180 pages');
    setSize('190 × 260 mm');
    setCoverImage('/src/assets/images/editorial_art_catalogue_1791438301738.jpg');
    setFeatured(true);
    setBrief('');
    setApproach('');
    setDesign('');
    setOutcome('');
    setPaperCover('아르떼 울트라화이트 310g');
    setPaperInner('문켄 퓨어 120g');
    setBinding('사철 양장 제본');
    setPrinting('옵셋 4도 인쇄');
    setFinishing('표지 무광 은박, 형압 가공');
    setTagsStr('전시 도록, 양장 제본');
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFormError('프로젝트 제목을 입력해주세요.');
      return;
    }
    setFormError('');

    const categoryLabels: Record<ProjectCategory, string> = {
      editorial: '전시 도록 · 문화예술 출판물',
      brochure: '브로슈어 · 보고서',
      educational: '교육 교재 · 활동지',
      exhibition: '전시 그래픽 · 안내물',
      brand: '브랜드 간행물'
    };

    const tags = tagsStr
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const projectData = {
      title,
      subtitle,
      category,
      categoryLabel: categoryLabels[category] || '편집디자인',
      client: client || '자체 기획',
      year: year || '2025',
      pages: pages || '160 pages',
      size: size || '180 × 250 mm',
      coverImage: coverImage || '/src/assets/images/editorial_art_catalogue_1791438301738.jpg',
      featured,
      order: 1,
      brief: brief || '기획 의도 및 목적이 등록되었습니다.',
      approach: approach || '디자인 전략과 조판 그리드 설계.',
      design: design || '타이포그래피 및 레이아웃 구성.',
      outcome: outcome || '최종 인쇄 및 배포 완료.',
      specs: {
        paperCover: paperCover || '고급 인쇄용지',
        paperInner: paperInner || '고급 본문지',
        binding: binding || '무선제본',
        printing: printing || '옵셋 4도 인쇄',
        finishing: finishing || '표지 코팅'
      },
      tags: tags.length ? tags : ['편집디자인']
    };

    if (isAddingNew) {
      addProject(projectData);
      setIsAddingNew(false);
    } else if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    }
  };

  const handleCopyInquiry = (inq: Inquiry) => {
    const text = `[문의 번호: ${inq.id}]\n고객명: ${inq.clientName}\n이메일: ${inq.email}\n연락처: ${inq.phone || '미기재'}\n유형: ${inq.projectType}\n예산: ${inq.budget}\n희망일정: ${inq.timeline}\n내용:\n${inq.message}\n접수일시: ${inq.createdAt}`;
    navigator.clipboard.writeText(text);
    setCopyFeedback(inq.id);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleSaveStudioInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudioInfo({
      email: studioEmail,
      phone: studioPhone,
      address: studioAddress,
      availabilityNotice: studioNotice
    });
    setStudioSavedMsg(true);
    setTimeout(() => setStudioSavedMsg(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-admin-heading"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-5xl my-auto text-[#111111] border border-neutral-300 shadow-2xl transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-neutral-800" />
            <h2 id="modal-admin-heading" className="text-base font-bold tracking-tight text-[#111111]">
              designdeams — 관리자 콘솔 (Admin)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Not Authenticated: Password Gate */}
        {!isAdmin ? (
          <div className="p-8 sm:p-14 max-w-md mx-auto text-center space-y-6">
            <div className="w-14 h-14 mx-auto bg-neutral-100 flex items-center justify-center text-[#111111] border border-neutral-200">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111111]">
                관리자 인증
              </h3>
              <p className="text-xs text-neutral-600">
                포트폴리오 등록, 수정 및 상담 문의 내역을 관리합니다.
              </p>
              <p className="text-[11px] font-semibold text-neutral-800 bg-neutral-100 border border-neutral-300 py-1.5 px-3 mt-2">
                테스트 관리자 비밀번호: 1234
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="비밀번호를 입력하세요 (1234)"
                  className="w-full px-4 py-2.5 bg-white border border-neutral-300 text-sm text-[#111111] focus:outline-none focus:border-black text-center font-semibold"
                  autoFocus
                />
                {passwordError && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>비밀번호가 올바르지 않습니다. (1234 입력)</span>
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-bold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                관리자 로그인
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div>
            {/* Admin Nav Tabs */}
            <div className="flex items-center justify-between px-6 pt-3 border-b border-neutral-200 bg-white">
              <div className="flex items-center gap-6 text-xs font-semibold">
                <button
                  onClick={() => {
                    setActiveTab('projects');
                    setIsAddingNew(false);
                    setEditingProject(null);
                  }}
                  className={`pb-3 relative cursor-pointer ${
                    activeTab === 'projects'
                      ? 'text-[#111111] font-bold border-b-2 border-[#111111]'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  포트폴리오 관리 ({projects.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('inquiries');
                    setIsAddingNew(false);
                    setEditingProject(null);
                  }}
                  className={`pb-3 relative cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'inquiries'
                      ? 'text-[#111111] font-bold border-b-2 border-[#111111]'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <span>고객 문의 내역 ({inquiries.length})</span>
                  {inquiries.some((i) => i.status === 'new') && (
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveTab('studio');
                    setIsAddingNew(false);
                    setEditingProject(null);
                  }}
                  className={`pb-3 relative cursor-pointer ${
                    activeTab === 'studio'
                      ? 'text-[#111111] font-bold border-b-2 border-[#111111]'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  스튜디오 설정
                </button>
              </div>

              <button
                onClick={logoutAdmin}
                className="text-[11px] font-medium text-neutral-500 hover:text-red-700 pb-3 cursor-pointer"
              >
                로그아웃
              </button>
            </div>

            {/* TAB 1: Projects Management */}
            {activeTab === 'projects' && (
              <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
                {/* Action Bar */}
                {!(isAddingNew || editingProject) ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-200">
                      <div className="text-xs text-neutral-600">
                        총 <strong className="text-[#111111]">{projects.length}</strong>개의 프로젝트가 등록되어 있습니다.
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleOpenAdd}
                          className="px-3.5 py-2 text-xs font-semibold text-white bg-[#111111] hover:bg-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>새 프로젝트 등록</span>
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('기본 포트폴리오 데이터 6개로 초기화하시겠습니까? (수정 내역이 초기화됩니다)')) {
                              resetProjects();
                            }
                          }}
                          className="px-3 py-2 text-xs text-neutral-600 border border-neutral-300 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                          title="샘플 프로젝트 원본 복원"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>초기 데이터 복원</span>
                        </button>
                      </div>
                    </div>

                    {/* Projects Table / Card List */}
                    <div className="space-y-3">
                      {projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-4 bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-start sm:items-center gap-4">
                            <div className="w-16 h-12 bg-neutral-100 overflow-hidden flex-shrink-0 border border-neutral-200">
                              <img
                                src={proj.coverImage}
                                alt={proj.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                                <span>{proj.categoryLabel}</span>
                                <span aria-hidden="true">·</span>
                                <span>{proj.client}</span>
                                <span aria-hidden="true">·</span>
                                <span>{proj.year}</span>
                              </div>
                              <h4 className="text-base font-bold text-[#111111]">
                                {proj.title}
                              </h4>
                              <p className="text-xs text-neutral-600 line-clamp-1 max-w-xl">
                                {proj.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                              onClick={() => toggleFeatured(proj.id)}
                              className={`p-1.5 text-xs border ${
                                proj.featured
                                  ? 'bg-neutral-100 border-neutral-400 text-black'
                                  : 'text-neutral-400 border-neutral-200 hover:text-black'
                              }`}
                              title={proj.featured ? '메인 추천작 해제' : '메인 추천작으로 설정'}
                            >
                              <Star className={`w-3.5 h-3.5 ${proj.featured ? 'fill-black' : ''}`} />
                            </button>
                            <button
                              onClick={() => onSelectProjectForPreview(proj)}
                              className="p-1.5 text-xs text-neutral-600 hover:text-black border border-neutral-200 hover:bg-neutral-100"
                              title="미리보기"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleOpenEdit(proj)}
                              className="px-2.5 py-1.5 text-xs text-[#111111] border border-neutral-300 hover:bg-neutral-100 flex items-center gap-1 font-semibold"
                            >
                              <Edit2 className="w-3 h-3" />
                              <span>수정</span>
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`'${proj.title}' 프로젝트를 삭제하시겠습니까?`)) {
                                  deleteProject(proj.id);
                                }
                              }}
                              className="p-1.5 text-xs text-red-600 hover:bg-red-50 border border-red-200"
                              title="삭제"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Project Edit / Add Form */
                  <form onSubmit={handleSaveProject} className="space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                      <h3 className="text-base font-bold text-[#111111]">
                        {isAddingNew ? '새 포트폴리오 프로젝트 등록' : '프로젝트 내용 수정'}
                      </h3>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingNew(false);
                          setEditingProject(null);
                        }}
                        className="text-xs text-neutral-600 hover:text-black underline cursor-pointer"
                      >
                        목록으로 돌아가기
                      </button>
                    </div>

                    {formError && (
                      <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200">
                        {formError}
                      </div>
                    )}

                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">프로젝트 제목 *</label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="예: 국립현대미술관 기획전 도록 〈경계의 시간〉"
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">서브타이틀 (한 줄 설명)</label>
                        <input
                          type="text"
                          value={subtitle}
                          onChange={(e) => setSubtitle(e.target.value)}
                          placeholder="예: 동시대 예술가 12인의 장소 특정적 설치 작업을 기록한 양장 도록"
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">카테고리</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                        >
                          <option value="editorial">전시 도록 · 문화예술 출판물</option>
                          <option value="brochure">브로슈어 · 보고서</option>
                          <option value="educational">교육 교재 · 활동지</option>
                          <option value="exhibition">전시 그래픽 · 안내물</option>
                          <option value="brand">브랜드 간행물 · 아카이브</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">클라이언트 / 기관명</label>
                        <input
                          type="text"
                          value={client}
                          onChange={(e) => setClient(e.target.value)}
                          placeholder="예: 국립현대미술관"
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">제작 연도 / 판형</label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="연도 (2025)"
                            className="p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                          <input
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="판형 (185 × 250 mm)"
                            className="p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-[#111111]">페이지 수 / 분량</label>
                        <input
                          type="text"
                          value={pages}
                          onChange={(e) => setPages(e.target.value)}
                          placeholder="예: 280 pages"
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-1">
                        <label className="font-semibold text-[#111111]">대표 이미지 URL</label>
                        <input
                          type="text"
                          value={coverImage}
                          onChange={(e) => setCoverImage(e.target.value)}
                          className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* 4-Step Narrative */}
                    <div className="space-y-4 pt-4 border-t border-neutral-200">
                      <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                        4-Step 케이스 스터디 상세 내용
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">01. Brief — 어떤 목적의 프로젝트였는가?</label>
                          <textarea
                            rows={3}
                            value={brief}
                            onChange={(e) => setBrief(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">02. Approach — 어떤 디자인 전략을 적용했는가?</label>
                          <textarea
                            rows={3}
                            value={approach}
                            onChange={(e) => setApproach(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">03. Design — 편집, 그리드, 타이포, 그래픽 구성</label>
                          <textarea
                            rows={3}
                            value={design}
                            onChange={(e) => setDesign(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">04. Outcome — 최종 인쇄물과 실제 제작 결과</label>
                          <textarea
                            rows={3}
                            value={outcome}
                            onChange={(e) => setOutcome(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Print Specs */}
                    <div className="space-y-4 pt-4 border-t border-neutral-200">
                      <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                        인쇄 및 제작 사양 (Print & Production Specs)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">표지 지류</label>
                          <input
                            type="text"
                            value={paperCover}
                            onChange={(e) => setPaperCover(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">내지 지류</label>
                          <input
                            type="text"
                            value={paperInner}
                            onChange={(e) => setPaperInner(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">제본 방식</label>
                          <input
                            type="text"
                            value={binding}
                            onChange={(e) => setBinding(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#111111]">인쇄 도수</label>
                          <input
                            type="text"
                            value={printing}
                            onChange={(e) => setPrinting(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2 space-y-1">
                          <label className="font-semibold text-[#111111]">특수 후가공 및 코팅</label>
                          <input
                            type="text"
                            value={finishing}
                            onChange={(e) => setFinishing(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Metadata & featured */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                      <div className="flex items-center gap-4 text-xs">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={featured}
                            onChange={(e) => setFeatured(e.target.checked)}
                            className="rounded-none accent-black w-4 h-4"
                          />
                          <span className="font-semibold text-[#111111]">홈 화면 대표 프로젝트로 노출</span>
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingNew(false);
                            setEditingProject(null);
                          }}
                          className="px-4 py-2 text-xs border border-neutral-300 text-neutral-600 hover:bg-neutral-100 cursor-pointer"
                        >
                          취소
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 cursor-pointer"
                        >
                          저장 및 반영하기
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* TAB 2: Inquiries Management */}
            {activeTab === 'inquiries' && (
              <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs">
                  <div className="text-neutral-600">
                    접수된 온라인 견적 및 상담 문의 <strong className="text-[#111111]">{inquiries.length}</strong>건
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    최신 접수순 자동 정렬
                  </div>
                </div>

                {inquiries.length === 0 ? (
                  <div className="py-12 text-center text-xs text-neutral-500">
                    아직 접수된 문의가 없습니다.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-5 bg-white border border-neutral-200 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold text-[#111111]">
                                {inq.clientName}
                              </span>
                              <span className="text-xs text-neutral-500">({inq.email})</span>
                              {inq.phone && (
                                <span className="text-xs text-neutral-500">· {inq.phone}</span>
                              )}
                            </div>
                            <div className="text-[11px] text-neutral-400 font-medium">
                              접수일시: {inq.createdAt}
                            </div>
                          </div>

                          {/* Status changer */}
                          <div className="flex items-center gap-2">
                            <select
                              value={inq.status}
                              onChange={(e) => updateInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                              className={`text-xs px-2.5 py-1 border font-medium cursor-pointer ${
                                inq.status === 'new'
                                  ? 'bg-red-50 text-red-700 border-red-200'
                                  : inq.status === 'reviewing'
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : inq.status === 'quoted'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              }`}
                            >
                              <option value="new">신규 접수</option>
                              <option value="reviewing">검토 중</option>
                              <option value="quoted">견적 발송</option>
                              <option value="completed">상담 완료</option>
                            </select>

                            <button
                              onClick={() => handleCopyInquiry(inq)}
                              className="p-1 text-neutral-600 hover:text-black border border-neutral-200 hover:bg-neutral-50"
                              title="문의 내용 전체 클립보드 복사"
                            >
                              {copyFeedback === inq.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            <button
                              onClick={() => {
                                if (window.confirm('이 문의 내역을 삭제하시겠습니까?')) {
                                  deleteInquiry(inq.id);
                                }
                              }}
                              className="p-1 text-red-600 hover:bg-red-50 border border-red-200"
                              title="삭제"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Inquiry detail body */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 px-3 bg-neutral-50 border border-neutral-200 text-xs">
                          <div>
                            <span className="text-neutral-500 block text-[11px]">프로젝트 유형</span>
                            <span className="font-semibold text-[#111111]">{inq.projectType}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[11px]">예산 범위</span>
                            <span className="font-semibold text-[#111111]">{inq.budget}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[11px]">희망 일정</span>
                            <span className="font-semibold text-[#111111]">{inq.timeline || '협의'}</span>
                          </div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <span className="text-neutral-400 text-[11px] block">상담 내용 및 요청사항</span>
                          <p className="text-neutral-800 leading-relaxed whitespace-pre-line p-3 bg-white border border-neutral-200">
                            {inq.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: Studio Settings */}
            {activeTab === 'studio' && (
              <form onSubmit={handleSaveStudioInfo} className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                  <h3 className="text-base font-bold text-[#111111]">
                    스튜디오 기본 정보 및 안내 문구 수정
                  </h3>
                  <p className="text-xs text-neutral-500">
                    웹사이트 하단 푸터 및 문의 섹션에 즉시 반영됩니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#111111]">대표 이메일</label>
                    <input
                      type="email"
                      value={studioEmail}
                      onChange={(e) => setStudioEmail(e.target.value)}
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none font-semibold"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-[#111111]">대표 유선 전화</label>
                    <input
                      type="text"
                      value={studioPhone}
                      onChange={(e) => setStudioPhone(e.target.value)}
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none font-semibold"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-semibold text-[#111111]">스튜디오 주소</label>
                    <input
                      type="text"
                      value={studioAddress}
                      onChange={(e) => setStudioAddress(e.target.value)}
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-semibold text-[#111111]">현재 프로젝트 수주 가능 일정 안내</label>
                    <input
                      type="text"
                      value={studioNotice}
                      onChange={(e) => setStudioNotice(e.target.value)}
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  {studioSavedMsg ? (
                    <span className="text-xs text-emerald-700 font-semibold">
                      ✓ 스튜디오 정보가 성공적으로 저장되었습니다.
                    </span>
                  ) : <span />}
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 cursor-pointer"
                  >
                    스튜디오 정보 저장
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
