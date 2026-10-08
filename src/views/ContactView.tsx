import React, { useState, useEffect } from 'react';
import { 
  Send, Copy, Check, Upload, Paperclip, AlertCircle, CheckCircle2, Clock, Mail, Phone, MapPin
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Project } from '../types';

interface ContactViewProps {
  prefilledProject?: Project | null;
  onClearPrefilledProject?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  prefilledProject,
  onClearPrefilledProject
}) => {
  const { submitInquiry, studioInfo } = useData();

  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('도록 / 책자 / 보고서');
  const [budget, setBudget] = useState('100만~300만 원');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const [copyFeedback, setCopyFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProject) {
      if (prefilledProject.category === 'editorial') {
        setProjectType('도록 / 책자 / 보고서');
      } else if (prefilledProject.category === 'brochure') {
        setProjectType('브로슈어 / 리플렛');
      } else if (prefilledProject.category === 'educational') {
        setProjectType('교육 교재 / 활동지');
      } else {
        setProjectType('기타 디자인');
      }

      setMessage(
        `[참고 프로젝트: ${prefilledProject.title}]\n\n위 프로젝트와 유사한 형태의 제작물을 구상 중입니다.\n- 예상 분량:\n- 희망 일정:\n- 주요 내용 및 문의사항:`
      );
    }
  }, [prefilledProject]);

  const projectTypes = [
    '브로슈어 / 리플렛',
    '도록 / 책자 / 보고서',
    '교육 교재 / 활동지',
    '기타 디자인'
  ];

  const budgetOptions = [
    '100만 원 미만',
    '100만~300만 원',
    '300만 원 이상',
    '미정 / 협의'
  ];

  const handleCopyFormContent = () => {
    const text = `[designdeams 문의서 사본]\n이름/기관명: ${clientName || '미입력'}\n이메일: ${email || '미입력'}\n연락처: ${phone || '미입력'}\n프로젝트 유형: ${projectType}\n예산 범위: ${budget}\n희망 일정: ${timeline || '협의'}\n프로젝트 내용:\n${message || '미입력'}\n첨부파일: ${attachedFile ? attachedFile.name : '없음'}`;
    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('이름(기관명), 이메일, 프로젝트 내용을 모두 입력해주세요.');
      return;
    }
    if (!agreePrivacy) {
      setErrorMessage('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setErrorMessage('');

    const newInquiry = submitInquiry({
      clientName,
      email,
      phone,
      projectType,
      budget,
      timeline,
      message,
      fileName: attachedFile ? attachedFile.name : undefined
    });

    setSubmittedInquiryId(newInquiry.id);
  };

  const handleResetForm = () => {
    setClientName('');
    setEmail('');
    setPhone('');
    setTimeline('');
    setMessage('');
    setAttachedFile(null);
    setSubmittedInquiryId(null);
    if (onClearPrefilledProject) onClearPrefilledProject();
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Top Banner */}
        <div className="space-y-4 border-b border-neutral-200 pb-12">
          <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            designdeams · 05 / CONTACT & CONSULTATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            좋은 결과물은<br />
            <span className="text-neutral-500 font-bold">좋은 대화에서 시작됩니다.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-2xl leading-relaxed">
            프로젝트의 규모가 아직 정해지지 않았더라도 괜찮습니다.
            필요한 디자인과 일정, 대략적인 예산을 알려주시면 작업 가능 여부와 최적의 진행 방향을 24시간 이내에 안내드립니다.
          </p>
        </div>

        {/* Main Grid: Form + Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form or Success Card */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 p-6 sm:p-10 shadow-xs">
            {submittedInquiryId ? (
              /* Submission Success Receipt */
              <div className="space-y-8 py-8 text-center max-w-lg mx-auto">
                <div className="w-14 h-14 mx-auto bg-neutral-100 flex items-center justify-center text-[#111111] border border-neutral-300">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-neutral-500">
                    접수 번호 : #{submittedInquiryId}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    문의가 정상적으로 접수되었습니다.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    designdeams에서 내용을 꼼꼼히 검토한 후, <strong>24시간 이내</strong>에 남겨주신 이메일({email}) 또는 연락처로 상세 진행 가능 여부 및 가견적서를 회신드리겠습니다.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-left space-y-2">
                  <div className="font-bold text-[#111111] pb-1 border-b border-neutral-200">
                    접수된 기본 정보 요약
                  </div>
                  <div className="text-neutral-600">
                    <strong>신청자 / 기관 :</strong> {clientName}
                  </div>
                  <div className="text-neutral-600">
                    <strong>프로젝트 분야 :</strong> {projectType}
                  </div>
                  <div className="text-neutral-600">
                    <strong>예산 범위 :</strong> {budget}
                  </div>
                  {timeline && (
                    <div className="text-neutral-600">
                      <strong>희망 일정 :</strong> {timeline}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 text-xs font-bold text-[#111111] border border-[#111111] hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              </div>
            ) : (
              /* Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                {prefilledProject && (
                  <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs flex items-center justify-between">
                    <span className="text-neutral-600">
                      선택하신 프로젝트: <strong className="text-[#111111]">{prefilledProject.title}</strong>
                    </span>
                    {onClearPrefilledProject && (
                      <button
                        type="button"
                        onClick={onClearPrefilledProject}
                        className="text-[11px] text-neutral-500 underline hover:text-black"
                      >
                        기본 양식으로 리셋
                      </button>
                    )}
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Client Identity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#111111]">
                      이름 / 기관명 (회사명) *
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="홍길동 / ○○문화재단 전시팀"
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#111111]">
                      이메일 주소 *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@organization.kr"
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none font-medium"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="font-bold text-[#111111]">
                      연락처 (선택)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                {/* 2. Project Type Selector */}
                <div className="space-y-2 text-xs">
                  <label className="font-bold text-[#111111] block">
                    프로젝트 유형 선택 *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 text-left border text-xs font-semibold transition-colors cursor-pointer ${
                          projectType === type
                            ? 'bg-[#111111] text-white border-black'
                            : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Budget Range Selector */}
                <div className="space-y-2 text-xs">
                  <label className="font-bold text-[#111111] block">
                    예산 범위 선택 *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setBudget(opt)}
                        className={`p-3 text-center border text-xs font-semibold transition-colors cursor-pointer ${
                          budget === opt
                            ? 'bg-[#111111] text-white border-black'
                            : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Requested Timeline */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-bold text-[#111111]">
                    희망 제작 완료 및 납품 일정
                  </label>
                  <input
                    type="text"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="예: 2026년 5월 중순 배포 희망 (약 4주 소요 예상)"
                    className="w-full p-2.5 bg-white border border-neutral-300 focus:border-black focus:outline-none"
                  />
                </div>

                {/* 5. Message Body */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-bold text-[#111111]">
                    프로젝트 내용 및 세부 요청사항 *
                  </label>
                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="제작 목적, 예상 페이지 수, 선호하는 판형이나 인쇄 사양, 원고의 현재 상태(초안, 탈고 등)를 편하게 적어주세요."
                    className="w-full p-3 bg-white border border-neutral-300 focus:border-black focus:outline-none leading-relaxed"
                    required
                  />
                </div>

                {/* 6. File Attachment Simulation */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-bold text-[#111111] block">
                    기획안 또는 원고 파일 첨부 (선택)
                  </label>
                  <div className="border border-dashed border-neutral-300 bg-neutral-50 p-5 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setAttachedFile(e.target.files[0]);
                        }
                      }}
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex flex-col items-center gap-1.5"
                    >
                      <Paperclip className="w-4 h-4 text-neutral-600" />
                      <span className="text-xs text-neutral-600 font-medium">
                        클릭하여 기획서나 참고 파일 첨부 (PDF, Word, HWP, ZIP 등)
                      </span>
                      <span className="text-[10px] text-neutral-400">최대 50MB</span>
                    </label>
                    {attachedFile && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-xs font-semibold">
                        <span>{attachedFile.name}</span>
                        <button
                          type="button"
                          onClick={() => setAttachedFile(null)}
                          className="text-neutral-400 hover:text-black ml-1"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* 7. Privacy Agreement */}
                <div className="text-xs">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                      className="mt-0.5 accent-black w-4 h-4"
                    />
                    <span className="text-neutral-600 leading-relaxed font-normal">
                      [필수] 상담 및 견적 안내 목적의 개인정보(이름, 이메일, 연락처) 수집 및 이용에 동의합니다.
                    </span>
                  </label>
                </div>

                {/* 8. Action Buttons */}
                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleCopyFormContent}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs text-neutral-600 border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center gap-1.5 cursor-pointer font-semibold"
                    title="작성한 문의 내용을 클립보드에 복사합니다"
                  >
                    {copyFeedback ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>복사 완료!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>문의 내용 복사하기</span>
                      </>
                    )}
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 text-xs font-bold tracking-wider text-white bg-[#111111] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>상담 및 견적 요청 보내기</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact & Response Policy */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-4 text-xs">
              <div className="text-lg font-bold text-[#111111]">
                Direct Inquiries
              </div>
              <p className="text-neutral-600 leading-relaxed">
                긴급한 문의나 별도의 대용량 기획서 파일 전달은 직통 유선 또는 대표 이메일로 바로 연락해 주셔도 좋습니다.
              </p>

              <div className="space-y-3 pt-2 text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-600 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">이메일</span>
                    <a
                      href={`mailto:${studioInfo.email}`}
                      className="font-bold text-[#111111] hover:underline"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-600 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">직통 전화</span>
                    <span className="font-bold text-[#111111]">{studioInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-neutral-600 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">스튜디오 위치</span>
                    <span>{studioInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-neutral-600 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">운영 시간</span>
                    <span>{studioInfo.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="p-6 bg-white border border-neutral-200 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-[#111111]">수주 가능 현황 안내</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {studioInfo.availabilityNotice}
              </p>
              <div className="text-[11px] text-neutral-400 pt-1 font-medium">
                * 평균 회신 소요 시간: 접수 후 6시간 이내 (영업일 기준)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
