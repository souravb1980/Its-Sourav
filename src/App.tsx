import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Hero } from './components/Hero';
import { ChaosSimulator } from './components/ChaosSimulator';
import { PublicationsSection } from './components/PublicationsSection';
import { CoursesSection } from './components/CoursesSection';
import { ExamQuestionBank } from './components/ExamQuestionBank';
import { LabManualsSection } from './components/LabManualsSection';
import { AcademicProfile } from './components/AcademicProfile';
import { ContactSection } from './components/ContactSection';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { Footer } from './components/Footer';
import { BookOpen, FileText, ArrowRight, Activity, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';
import heroChaosImg from './assets/images/hero_chaos_dynamics_1790520903823.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Keyboard shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation Bar with strict 3-zone contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Notice Ribbon */}
      <AnnouncementBar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Tab 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div>
            <Hero onNavigate={handleNavigate} />

            {/* Research Lab Simulation Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ChaosSimulator />
            </div>

            {/* Editorial Showcase of Sections */}
            <section className="py-12 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                
                <div>
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                    Academic Portals & Repositories
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                    Explore Study Materials & Research Works
                  </h2>
                  <p className="text-sm text-stone-600 mt-1 max-w-2xl">
                    Direct access to university exam archives, computational laboratories, course syllabi, and published journal articles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1: Courses & Labs */}
                  <div className="p-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-400/80 transition-all shadow-2xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900">
                        Courses & Study Materials
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        28 verified course resources including Python Google Colab lab, customized Gemini AI mentor, Scilab cloud, Arduino sketches, PSpice simulations, and ePG Pathshala notes.
                      </p>
                    </div>

                    <button
                      onClick={() => handleNavigate('courses')}
                      className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900 hover:text-amber-950 group cursor-pointer"
                    >
                      <span>Browse 28 Courses</span>
                      <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Card 2: Question Papers */}
                  <div className="p-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-400/80 transition-all shadow-2xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900">
                        Calcutta Univ Question Papers
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Full archive of University of Calcutta Electronic Science examination papers for CBCS (2018–2025) and CCF 4-Year Undergraduate framework (2023–2026) with official paper codes.
                      </p>
                    </div>

                    <button
                      onClick={() => handleNavigate('exams')}
                      className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900 hover:text-amber-950 group cursor-pointer"
                    >
                      <span>Access Question Bank</span>
                      <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Card 3: Research Papers */}
                  <div className="p-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-400/80 transition-all shadow-2xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                        <Activity className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900">
                        19 Research Publications
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Articles in Chaos Solitons & Fractals (IF 5.3), Physical Review E, Physics Letters A, and CHAOS. Includes 1-click APA/BibTeX citation generator and DOI links.
                      </p>
                    </div>

                    <button
                      onClick={() => handleNavigate('academic')}
                      className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900 hover:text-amber-950 group cursor-pointer"
                    >
                      <span>View All Publications</span>
                      <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* Banner: Hero chaos dynamics illustration */}
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm relative">
                  <img
                    src={heroChaosImg}
                    alt="Chaotic Phase Space Visualization"
                    className="w-full h-56 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-transparent flex items-center p-6 sm:p-10">
                    <div className="max-w-lg space-y-2 text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Nonlinear Science & Complex Networks
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                        Pioneering Experiments in Chaos Synchronization & Delay Dynamics
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        Research supported by the Department of Science and Technology (DST-SERB) on Boolean Chaos and coupled oscillator networks.
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={() => handleNavigate('academic')}
                          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                        >
                          Explore Research Work
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Practical Manuals & Syllabus Quick Preview */}
            <LabManualsSection />

            {/* Contact Section */}
            <ContactSection />
          </div>
        )}

        {/* Tab 2: ACADEMIC & RESEARCH */}
        {activeTab === 'academic' && (
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <ChaosSimulator />
            </div>
            <PublicationsSection />
            <AcademicProfile />
          </div>
        )}

        {/* Tab 3: COURSES */}
        {activeTab === 'courses' && (
          <div>
            <CoursesSection />
          </div>
        )}

        {/* Tab 4: EXAMS */}
        {activeTab === 'exams' && (
          <div>
            <ExamQuestionBank />
          </div>
        )}

        {/* Tab 5: LAB MANUALS & CCF */}
        {activeTab === 'manuals' && (
          <div>
            <LabManualsSection />
          </div>
        )}

        {/* Tab 6: ABOUT & CONTACT */}
        {activeTab === 'about' && (
          <div>
            <AcademicProfile />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Global Quick Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateTab={handleNavigate}
      />

      {/* Informative Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
