export type ProjectCategory = 
  | 'editorial' 
  | 'brochure' 
  | 'educational' 
  | 'exhibition' 
  | 'brand';

export interface PrintSpecs {
  paperCover: string;
  paperInner: string;
  binding: string;
  printing: string;
  finishing: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  year: string;
  pages: string;
  size: string;
  coverImage: string;
  detailImages?: string[];
  featured: boolean;
  order: number;
  // 4-Step Narrative Breakdown
  brief: string;      // 01. Brief: 어떤 목적의 프로젝트였는가?
  approach: string;   // 02. Approach: 어떤 디자인 전략을 적용했는가?
  design: string;     // 03. Design: 편집, 그리드, 타이포, 그래픽 구성
  outcome: string;    // 04. Outcome: 최종 인쇄물과 실제 제작 결과
  specs: PrintSpecs;
  tags: string[];
}

export type InquiryStatus = 'new' | 'reviewing' | 'quoted' | 'completed';

export interface Inquiry {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  fileName?: string;
  status: InquiryStatus;
  createdAt: string;
}

export interface StudioInfo {
  name: string;
  subtitle: string;
  director: string;
  email: string;
  phone: string;
  address: string;
  workingHours: string;
  availabilityNotice: string;
}
