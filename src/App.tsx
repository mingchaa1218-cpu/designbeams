import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ContactView } from './views/ContactView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminModal } from './components/AdminModal';
import { Project } from './types';

function MainLayout() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [prefilledProject, setPrefilledProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history.pushState) {
        window.history.pushState(null, '', '#home');
      }
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  // Scroll spy to highlight active section in Header navigation
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['contact', 'services', 'about', 'work', 'home'];
      const scrollPosition = window.scrollY + 160;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check initial hash on load
  useEffect(() => {
    const initialHash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'work', 'about', 'services', 'contact'].includes(initialHash)) {
      setTimeout(() => {
        scrollToSection(initialHash);
      }, 100);
    }
  }, []);

  const handleInquireProject = (project: Project) => {
    setPrefilledProject(project);
    setSelectedProject(null);
    setTimeout(() => {
      scrollToSection('contact');
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <Header
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Unified One-Page Continuous Content */}
      <main className="flex-grow bg-white">
        <HomeView
          onNavigateSection={scrollToSection}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <WorkView
          onSelectProject={(proj) => setSelectedProject(proj)}
          onNavigateSection={scrollToSection}
        />
        <AboutView
          onNavigateSection={scrollToSection}
        />
        <ServicesView
          onNavigateSection={scrollToSection}
        />
        <ContactView
          prefilledProject={prefilledProject}
          onClearPrefilledProject={() => setPrefilledProject(null)}
        />
      </main>

      <Footer
        onNavigateSection={scrollToSection}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquireProject}
      />

      {/* Admin Panel Modal (Password: 1234) */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onSelectProjectForPreview={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <MainLayout />
    </DataProvider>
  );
}
