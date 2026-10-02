import React from 'react';
import { ArrowRight, Bell, Sparkles } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/portalData';

interface AnnouncementBarProps {
  onNavigate: (tab: string) => void;
}

const NOTICES = [
  {
    id: 'welcome',
    badge: 'Portal Update',
    text: PROFESSOR_INFO.announcement,
    actionTab: 'courses',
  },
  {
    id: 'ccf-courses',
    badge: 'CCF 2022',
    text: 'University of Calcutta 4-Year B.Sc. Electronic Science (Major & Minor) study materials, lecture slides, and Python/Scilab computational modules are now accessible.',
    actionTab: 'courses',
  },
  {
    id: 'questions',
    badge: 'CU Question Bank',
    text: 'University of Calcutta Semester Examination past question papers (Odd & Even Semesters) available for download.',
    actionTab: 'exams',
  },
  {
    id: 'practical-lab',
    badge: 'Lab Manuals',
    text: 'Practical laboratory experiment sheets & CircuitLab circuit simulation guides updated under Courses & Syllabi.',
    actionTab: 'courses',
  },
  {
    id: 'research',
    badge: 'Research',
    text: 'Nonlinear Dynamics & Chaos Synchronization Research Lab: 19 peer-reviewed publications with open citation archives & BibTeX citations.',
    actionTab: 'publications',
  },
];

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-stone-50 to-amber-50 border-b border-amber-200/80 text-stone-800 text-xs py-2 px-3 sm:px-4 select-none overflow-hidden relative shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Fixed Notice Badge */}
        <div className="flex items-center gap-1.5 shrink-0 z-10 bg-amber-100/90 text-amber-950 font-bold px-2.5 py-1 rounded-md border border-amber-300/80 text-[11px] uppercase tracking-wider shadow-3xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          <span className="flex items-center gap-1">
            <Bell className="w-3 h-3 text-amber-800" />
            <span>Notice</span>
          </span>
        </div>

        {/* Center: Continuously Scrolling Ticker Area */}
        <div className="flex-1 overflow-hidden relative py-0.5">
          {/* Subtle gradient fades on left and right edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-amber-50 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-amber-50 to-transparent z-10 hidden sm:block" />

          {/* Marquee Container with duplicate track for seamless continuous loop */}
          <div 
            className="animate-marquee-notice flex items-center cursor-default"
            style={{ animationDuration: '80s' }}
            title="Hover to pause notice"
          >
            {/* First Set */}
            <div className="flex items-center gap-8 pr-8 shrink-0">
              {NOTICES.map((notice) => (
                <div 
                  key={`track1-${notice.id}`}
                  className="flex items-center gap-2 text-stone-700 whitespace-nowrap hover:text-stone-950 transition-colors"
                >
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-stone-200/70 text-stone-800 border border-stone-300/60 uppercase">
                    {notice.badge}
                  </span>
                  <span 
                    onClick={() => onNavigate(notice.actionTab)}
                    className="hover:underline cursor-pointer font-medium"
                  >
                    {notice.text}
                  </span>
                  <span className="text-amber-400 font-bold ml-4">✦</span>
                </div>
              ))}
            </div>

            {/* Second Set (identical duplicate for seamless infinite loop) */}
            <div className="flex items-center gap-8 pr-8 shrink-0" aria-hidden="true">
              {NOTICES.map((notice) => (
                <div 
                  key={`track2-${notice.id}`}
                  className="flex items-center gap-2 text-stone-700 whitespace-nowrap hover:text-stone-950 transition-colors"
                >
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-stone-200/70 text-stone-800 border border-stone-300/60 uppercase">
                    {notice.badge}
                  </span>
                  <span 
                    onClick={() => onNavigate(notice.actionTab)}
                    className="hover:underline cursor-pointer font-medium"
                  >
                    {notice.text}
                  </span>
                  <span className="text-amber-400 font-bold ml-4">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quick Action Links */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0 z-10 pl-2 border-l border-amber-200/60 text-xs">
          <button
            onClick={() => onNavigate('courses')}
            className="text-amber-900 font-semibold hover:text-amber-950 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Study Materials</span>
            <ArrowRight className="w-3 h-3 text-amber-700" />
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onNavigate('exams')}
            className="text-amber-900 font-semibold hover:text-amber-950 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Question Bank</span>
            <ArrowRight className="w-3 h-3 text-amber-700" />
          </button>
        </div>

      </div>
    </div>
  );
};
