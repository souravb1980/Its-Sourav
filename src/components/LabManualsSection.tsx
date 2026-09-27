import React, { useState } from 'react';
import { PRACTICAL_MANUALS, SYLLABUS_DOCS, PracticalManual } from '../data/portalData';
import { BookOpen, ExternalLink, FileText, Download, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const LabManualsSection: React.FC = () => {
  const [activeManualFramework, setActiveManualFramework] = useState<'ALL' | 'CCF' | 'CBCS'>('ALL');

  const filteredManuals = PRACTICAL_MANUALS.filter(
    (m) => activeManualFramework === 'ALL' || m.framework === activeManualFramework
  );

  return (
    <section id="manuals" className="py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Part 1: Official Syllabi & Curriculum Regulations */}
        <div>
          <div className="mb-6">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
              Curriculum and Credit Framework (CCF-UG) & CBCS
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
              Syllabus, Regulations & Exam Modalities
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl">
              Official regulatory documents from the University of Calcutta governing undergraduate electronics studies under the National Education Policy (NEP 2020) and CBCS curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYLLABUS_DOCS.map((doc) => (
              <div
                key={doc.id}
                className="p-5 bg-white border border-stone-200 rounded-xl hover:border-amber-400/80 transition-all shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-amber-800">
                    {doc.category}
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">
                    Official Document
                  </span>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors"
                  >
                    <span>Download / View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Practical Laboratory Manuals */}
        <div className="pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                Hands-On Laboratory Instructions
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Practical Laboratory Manuals
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Comprehensive step-by-step experiment instructions, circuit schematics, pinout tables, and viva voce question sets.
              </p>
            </div>

            {/* Framework Filter Buttons */}
            <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium self-start sm:self-auto">
              <button
                onClick={() => setActiveManualFramework('ALL')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeManualFramework === 'ALL'
                    ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Manuals ({PRACTICAL_MANUALS.length})
              </button>
              <button
                onClick={() => setActiveManualFramework('CCF')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeManualFramework === 'CCF'
                    ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                CCF 4-Year Manuals
              </button>
              <button
                onClick={() => setActiveManualFramework('CBCS')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeManualFramework === 'CBCS'
                    ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                CBCS Sem 1-6 Manuals
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredManuals.map((manual) => (
              <div
                key={manual.id}
                className="p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-stone-900">{manual.framework}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-amber-800">{manual.semester}</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-stone-900 leading-snug">
                    {manual.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {manual.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">
                    Laboratory Drive
                  </span>
                  <a
                    href={manual.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-md text-xs font-semibold text-stone-900 hover:text-amber-900 transition-colors"
                  >
                    <span>Open Manual</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
