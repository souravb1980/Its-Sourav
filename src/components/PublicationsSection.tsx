import React, { useState, useMemo } from 'react';
import { PUBLICATIONS, PROFESSOR_INFO, Publication } from '../data/portalData';
import { Search, ExternalLink, Copy, Check, Filter, BookOpen, Award, FileCode } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [citationFormat, setCitationFormat] = useState<'APA' | 'BibTeX'>('APA');

  // Extract all unique topics
  const allTopics = useMemo(() => {
    const set = new Set<string>();
    PUBLICATIONS.forEach((p) => p.topics.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchSearch =
        searchTerm === '' ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchTopic =
        selectedTopic === 'All' || pub.topics.includes(selectedTopic);

      return matchSearch && matchTopic;
    });
  }, [searchTerm, selectedTopic]);

  const copyCitation = (pub: Publication, format: 'APA' | 'BibTeX') => {
    let citation = '';
    if (format === 'APA') {
      citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}, ${pub.details}. ${pub.url ? `DOI: ${pub.url}` : ''}`;
    } else {
      const citeKey = `bhowmick${pub.year}${pub.id.replace('pub-', '')}`;
      citation = `@article{${citeKey},
  author = {${pub.authors}},
  title = {${pub.title}},
  journal = {${pub.journal}},
  year = {${pub.year}},
  note = {${pub.details}},
  url = {${pub.url || ''}}
}`;
    }

    navigator.clipboard.writeText(citation).then(() => {
      setCopiedId(`${pub.id}-${format}`);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <section id="publications" className="py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Scope */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
              Peer-Reviewed Scholarly Contributions
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
              Academic Research & Publications
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              19 peer-reviewed articles in high-impact international journals published by Elsevier, American Physical Society (APS), American Institute of Physics (AIP), and Springer.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs text-stone-500">
            <span>Citation Mode:</span>
            <div className="inline-flex rounded-lg border border-stone-200 p-0.5 bg-stone-100">
              <button
                onClick={() => setCitationFormat('APA')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                  citationFormat === 'APA' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                APA
              </button>
              <button
                onClick={() => setCitationFormat('BibTeX')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                  citationFormat === 'BibTeX' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                BibTeX
              </button>
            </div>
          </div>
        </div>

        {/* Featured Research Grants & Ph.D. Dissertation Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Grant Card */}
          <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/50 space-y-2">
            <div className="flex items-center justify-between text-xs text-amber-900 font-semibold">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-700" />
                DST-SERB Start-Up Research Grant (Young Scientists)
              </span>
              <span className="font-mono text-stone-600">{PROFESSOR_INFO.researchProject.tenure}</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              "{PROFESSOR_INFO.researchProject.title}"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sponsored by the Science and Engineering Research Board (DST-SERB), Govt. of India. File No: {PROFESSOR_INFO.researchProject.fileNo}. Sanctioned outlay: <strong className="text-stone-900">{PROFESSOR_INFO.researchProject.amount}</strong>.
            </p>
          </div>

          {/* Ph.D. Thesis Card */}
          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5 text-stone-800 font-semibold">
                <BookOpen className="w-4 h-4 text-stone-600" />
                Ph.D. Doctoral Dissertation (Jadavpur University & IICB)
              </span>
              <span className="text-emerald-700 font-medium">Awarded</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              "{PROFESSOR_INFO.education[0].title}"
            </h3>
            <p className="text-xs text-stone-600">
              {PROFESSOR_INFO.education[0].details}
            </p>
            <div className="pt-1">
              <a
                href={PROFESSOR_INFO.education[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                Access Full Dissertation via Shodhganga Repository <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Search & Topic Filters */}
        <div className="space-y-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search papers by keyword, co-author (Ghosh, Dana, Pal), journal, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
            />
          </div>

          {/* Topic Pills - Styled as interactive buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-stone-400 shrink-0 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Topics:
            </span>
            {allTopics.slice(0, 10).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTopic === topic
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.map((pub) => {
            const isCopied = copiedId === `${pub.id}-${citationFormat}`;

            return (
              <article
                key={pub.id}
                className="p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all shadow-2xs space-y-3"
              >
                {/* Meta row: Clean unboxed metadata with typographic separators */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-stone-900">[{pub.index}]</span>
                    <span className="font-semibold text-stone-900">{pub.journal}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{pub.year}</span>
                    {pub.impactFactor && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-800 font-medium">
                          Impact Factor: <strong className="font-mono tabular-nums">{pub.impactFactor}</strong>
                        </span>
                      </>
                    )}
                    {pub.issn && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-stone-400 font-mono">ISSN: {pub.issn}</span>
                      </>
                    )}
                  </div>

                  {/* Actions: Copy Citation & Open DOI */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyCitation(pub, citationFormat)}
                      className="px-2.5 py-1 text-xs text-stone-600 hover:text-stone-950 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                      title={`Copy ${citationFormat} citation to clipboard`}
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : `Cite (${citationFormat})`}</span>
                    </button>

                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 text-xs text-amber-900 font-medium hover:text-amber-950 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/70 rounded-md transition-colors flex items-center gap-1"
                      >
                        <span>View Article</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-stone-600">
                  {pub.authors.split(', ').map((author, i) => {
                    const isProf = author.includes('Sourav K. Bhowmick') || author.includes('Sourav K Bhowmick');
                    return (
                      <span key={i}>
                        {i > 0 && ', '}
                        <span className={isProf ? 'font-semibold text-stone-950 underline decoration-amber-400 decoration-2 underline-offset-2' : ''}>
                          {author}
                        </span>
                      </span>
                    );
                  })}
                </p>

                {/* Volume & Pagination */}
                <div className="text-xs text-stone-500 font-mono">
                  {pub.details}
                </div>

                {/* Topics / Keywords: unboxed metadata */}
                <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] text-stone-500">
                  <span className="font-medium text-stone-400">Research Focus:</span>
                  {pub.topics.map((t, idx) => (
                    <React.Fragment key={t}>
                      {idx > 0 && <span aria-hidden="true">/</span>}
                      <span className="text-stone-700">{t}</span>
                    </React.Fragment>
                  ))}
                </div>

              </article>
            );
          })}

          {filteredPublications.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-stone-200 p-8 space-y-2">
              <p className="text-stone-700 font-medium">No publications matched your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTopic('All');
                }}
                className="text-xs text-amber-800 underline font-semibold cursor-pointer"
              >
                Clear search and filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
