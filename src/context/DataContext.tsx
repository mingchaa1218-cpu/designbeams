import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Inquiry, StudioInfo, InquiryStatus } from '../types';
import { INITIAL_PROJECTS, INITIAL_INQUIRIES, INITIAL_STUDIO_INFO } from '../data/initialProjects';

interface DataContextType {
  projects: Project[];
  inquiries: Inquiry[];
  studioInfo: StudioInfo;
  isAdmin: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  toggleFeatured: (id: string) => void;
  resetProjects: () => void;
  submitInquiry: (data: Omit<Inquiry, 'id' | 'status' | 'createdAt'>) => Inquiry;
  updateInquiryStatus: (id: string, status: InquiryStatus) => void;
  deleteInquiry: (id: string) => void;
  updateStudioInfo: (info: Partial<StudioInfo>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const PROJECTS_STORAGE_KEY = 'studio_form_projects_v1';
const INQUIRIES_STORAGE_KEY = 'studio_form_inquiries_v1';
const STUDIO_STORAGE_KEY = 'studio_form_info_v1';
const ADMIN_SESSION_KEY = 'studio_form_admin_auth';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_PROJECTS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_INQUIRIES;
  });

  const [studioInfo, setStudioInfo] = useState<StudioInfo>(() => {
    try {
      const saved = localStorage.getItem(STUDIO_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_STUDIO_INFO;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch {
      // ignore
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STUDIO_STORAGE_KEY, JSON.stringify(studioInfo));
    } catch {
      // ignore
    }
  }, [studioInfo]);

  const loginAdmin = (password: string) => {
    if (password === '1234') {
      setIsAdmin(true);
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      // ignore
    }
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: `proj-${Date.now()}`
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const toggleFeatured = (id: string) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  const resetProjects = () => {
    setProjects(INITIAL_PROJECTS);
    setStudioInfo(INITIAL_STUDIO_INFO);
  };

  const submitInquiry = (data: Omit<Inquiry, 'id' | 'status' | 'createdAt'>): Inquiry => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newInq: Inquiry = {
      ...data,
      id: `inq-${Date.now()}`,
      status: 'new',
      createdAt: formattedDate
    };
    setInquiries(prev => [newInq, ...prev]);
    return newInq;
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries(prev =>
      prev.map(inq => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  const updateStudioInfo = (info: Partial<StudioInfo>) => {
    setStudioInfo(prev => ({ ...prev, ...info }));
  };

  return (
    <DataContext.Provider
      value={{
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
        submitInquiry,
        updateInquiryStatus,
        deleteInquiry,
        updateStudioInfo
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
