import React from 'react';
import { Search, Mail, ExternalLink, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'academic', label: 'Academic & Research' },
    { id: 'courses', label: 'Courses' },
    { id: 'exams', label: 'Question Papers' },
    { id: 'manuals', label: 'Lab Manuals & CCF' },
    { id: 'about', label: 'About & Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Single element wordmark (Display Face) */}
          <button
            onClick={() => handleNavClick('overview')}
            className="text-left group cursor-pointer"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
              Dr. Sourav Kumar Bhowmick
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors relative py-1 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-stone-950 font-semibold'
                    : 'hover:text-stone-900'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
              title="Search all publications, question papers, and course notes"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span className="hidden sm:inline">Search Portal</span>
              <kbd className="hidden md:inline-block text-[10px] text-stone-400 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-stone-300" />
              <span>Contact</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#fafaf9] px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeTab === item.id
                  ? 'bg-stone-100 text-stone-950 font-semibold'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200 mt-2 flex items-center justify-between text-xs text-stone-500 px-3">
            <span>Asutosh College, Kolkata</span>
            <a
              href="https://sites.google.com/site/souravkb1980/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 flex items-center gap-1 hover:underline"
            >
              Original Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
