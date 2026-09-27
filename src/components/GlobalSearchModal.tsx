import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, FileText, ExternalLink, ArrowRight, Activity, Terminal } from 'lucide-react';
import { PUBLICATIONS, COURSE_RESOURCES, CBCS_QUESTION_PAPERS, CCF_QUESTION_PAPERS, PRACTICAL_MANUALS, SYLLABUS_DOCS } from '../data/portalData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (ESC to close, Cmd+K / Ctrl+K to open handled in App)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Search indexing
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const items: Array<{
      id: string;
      title: string;
      category: string;
      snippet: string;
      url?: string;
      targetTab: string;
    }> = [];

    // Publications
    PUBLICATIONS.forEach((pub) => {
      if (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.journal.toLowerCase().includes(q) ||
        pub.topics.some((t) => t.toLowerCase().includes(q))
      ) {
        items.push({
          id: pub.id,
          title: pub.title,
          category: `Research Paper (${pub.year})`,
          snippet: `${pub.journal} · ${pub.authors}`,
          url: pub.url,
          targetTab: 'academic',
        });
      }
    });

    // Courses
    COURSE_RESOURCES.forEach((c) => {
      if (
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      ) {
        items.push({
          id: c.id,
          title: c.title,
          category: `Course Material (${c.category.replace('_', ' ')})`,
          snippet: c.description,
          url: c.url,
          targetTab: 'courses',
        });
      }
    });

    // Question Papers (CBCS & CCF)
    [...CBCS_QUESTION_PAPERS, ...CCF_QUESTION_PAPERS].forEach((p) => {
      if (p.title.toLowerCase().includes(q) || String(p.year).includes(q)) {
        items.push({
          id: p.id,
          title: p.title,
          category: `Calcutta Univ Exam (${p.framework} ${p.year})`,
          snippet: `Past examination paper archive for ${p.season} semester examinations.`,
          url: p.url,
          targetTab: 'exams',
        });
      }
    });

    // Lab manuals & Syllabi
    PRACTICAL_MANUALS.forEach((m) => {
      if (m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)) {
        items.push({
          id: m.id,
          title: m.title,
          category: `Practical Lab Manual (${m.framework})`,
          snippet: m.description,
          url: m.url,
          targetTab: 'manuals',
        });
      }
    });

    SYLLABUS_DOCS.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
        items.push({
          id: s.id,
          title: s.title,
          category: `Syllabus / Regulation`,
          snippet: s.description,
          url: s.url,
          targetTab: 'manuals',
        });
      }
    });

    return items.slice(0, 15);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search across all 80+ papers, course notes, question papers, and manuals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-0 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-stone-400 border border-stone-200 px-2 py-1 rounded bg-stone-50 hover:bg-stone-100"
          >
            ESC
          </button>
        </div>

        {/* Quick Hints if empty */}
        {!query && (
          <div className="p-6 text-xs text-stone-500 space-y-3 bg-stone-50/50">
            <div className="font-semibold text-stone-700 uppercase tracking-wider text-[11px]">
              Popular Quick Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Scilab', 'Arduino', 'Coupled Oscillators', '2023 Odd Sem', 'CCF Major Syllabus', 'Op-Amp Manual', 'Boolean Chaos'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-stone-700 hover:border-amber-600 hover:text-amber-900 transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-96 overflow-y-auto divide-y divide-stone-100 p-2">
            {results.map((res) => (
              <div
                key={res.id}
                className="p-3 hover:bg-stone-50 rounded-lg transition-colors flex items-start justify-between gap-3 group"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onNavigateTab(res.targetTab);
                    onClose();
                  }}
                >
                  <div className="text-[11px] font-semibold text-amber-800">
                    {res.category}
                  </div>
                  <h4 className="text-sm font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                    {res.snippet}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1">
                  {res.url && (
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-200/60 rounded-md"
                      title="Open external resource"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      onNavigateTab(res.targetTab);
                      onClose();
                    }}
                    className="p-1.5 text-stone-400 hover:text-amber-800 hover:bg-amber-50 rounded-md"
                    title="Jump to section"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {results.length === 0 && (
              <div className="text-center py-10 text-stone-500 text-xs">
                No matching results found for "{query}". Try a different term or keyword.
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
          <span>Search index includes 19 publications, 28 courses, and all Calcutta Univ exam archives.</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
};
