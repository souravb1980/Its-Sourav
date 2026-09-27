import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/portalData';

interface AnnouncementBarProps {
  onNavigate: (tab: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-amber-50 border-b border-amber-200/70 text-stone-800 text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
          <span className="font-medium text-amber-950">Notice:</span>
          <p className="truncate text-stone-700">
            {PROFESSOR_INFO.announcement}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-xs">
          <button
            onClick={() => onNavigate('courses')}
            className="text-amber-900 font-semibold hover:text-amber-950 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
          >
            Study Materials <ArrowRight className="w-3 h-3" />
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onNavigate('exams')}
            className="text-amber-900 font-semibold hover:text-amber-950 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
          >
            Question Bank <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
