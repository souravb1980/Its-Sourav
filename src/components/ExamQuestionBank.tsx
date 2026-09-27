import React, { useState, useMemo } from 'react';
import { CBCS_QUESTION_PAPERS, CCF_QUESTION_PAPERS, SYLLABUS_DOCS, ExamPaper } from '../data/portalData';
import { FileText, ExternalLink, Calendar, Search, Filter, BookOpen } from 'lucide-react';

export const ExamQuestionBank: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<'ALL' | 'CBCS' | 'CCF'>('ALL');
  const [selectedSeason, setSelectedSeason] = useState<'ALL' | 'Even' | 'Odd'>('ALL');
  const [yearFilter, setYearFilter] = useState<string>('ALL');

  const combinedPapers: ExamPaper[] = useMemo(() => {
    return [...CBCS_QUESTION_PAPERS, ...CCF_QUESTION_PAPERS];
  }, []);

  const years = useMemo(() => {
    const set = new Set<number>();
    combinedPapers.forEach((p) => set.add(p.year));
    return ['ALL', ...Array.from(set).sort((a, b) => b - a).map(String)];
  }, [combinedPapers]);

  const filteredPapers = useMemo(() => {
    return combinedPapers.filter((paper) => {
      const matchFw = selectedFramework === 'ALL' || paper.framework === selectedFramework;
      const matchSeason = selectedSeason === 'ALL' || paper.season === selectedSeason;
      const matchYear = yearFilter === 'ALL' || String(paper.year) === yearFilter;
      return matchFw && matchSeason && matchYear;
    });
  }, [combinedPapers, selectedFramework, selectedSeason, yearFilter]);

  const paperCodeDoc = SYLLABUS_DOCS.find((d) => d.id === 'syl-paper-code');

  return (
    <section id="question-bank" className="py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
              University of Calcutta Examination Archives
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
              Electronics Question Papers
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Official past university examination question papers for undergraduate electronic science examinations spanning CBCS (2018–2025) and CCF 4-year undergraduate NEP framework.
            </p>
          </div>

          {paperCodeDoc && (
            <a
              href={paperCodeDoc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-900 bg-amber-100/70 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-800" />
              <span>Official Paper Code Reference (PDF)</span>
              <ExternalLink className="w-3 h-3 text-stone-600" />
            </a>
          )}
        </div>

        {/* Interactive Filtering Bar */}
        <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-4 mb-6 shadow-2xs">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Framework Filter Buttons */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                Curriculum Framework
              </label>
              <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setSelectedFramework('ALL')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedFramework === 'ALL'
                      ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  All ({combinedPapers.length})
                </button>
                <button
                  onClick={() => setSelectedFramework('CCF')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedFramework === 'CCF'
                      ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  CCF 4-Year NEP ({CCF_QUESTION_PAPERS.length})
                </button>
                <button
                  onClick={() => setSelectedFramework('CBCS')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedFramework === 'CBCS'
                      ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  CBCS Semester System ({CBCS_QUESTION_PAPERS.length})
                </button>
              </div>
            </div>

            {/* Semester Season Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                Semester Type
              </label>
              <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setSelectedSeason('ALL')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedSeason === 'ALL' ? 'bg-white text-stone-950 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Both
                </button>
                <button
                  onClick={() => setSelectedSeason('Odd')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedSeason === 'Odd' ? 'bg-white text-stone-950 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Odd Sem (1, 3, 5)
                </button>
                <button
                  onClick={() => setSelectedSeason('Even')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedSeason === 'Even' ? 'bg-white text-stone-950 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Even Sem (2, 4, 6)
                </button>
              </div>
            </div>

            {/* Year Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                Exam Year
              </label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="bg-stone-50 border border-stone-200 text-xs text-stone-800 rounded-lg px-3 py-1.5 focus:outline-hidden focus:border-amber-600 font-mono"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y === 'ALL' ? 'All Years (2018–2026)' : `Year ${y}`}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Question Papers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="p-4 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all shadow-2xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-stone-900">{paper.framework}</span>
                  <span aria-hidden="true">·</span>
                  <span>{paper.season} Semester</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums text-stone-700">{paper.year}</span>
                </div>

                <h4 className="font-serif text-base font-bold text-stone-900 leading-snug">
                  {paper.title}
                </h4>

                <p className="text-xs text-stone-500">
                  Includes theoretical question papers, internal question sets, and practical assignments.
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-mono flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Google Drive Folder
                </span>

                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-md text-xs font-semibold text-stone-800 hover:text-amber-900 transition-colors"
                >
                  <span>Access Papers</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
