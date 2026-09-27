import React, { useState, useMemo } from 'react';
import { COURSE_RESOURCES, CourseResource } from '../data/portalData';
import { BookOpen, ExternalLink, Search, Terminal, Cpu, Radio, Sparkles, Folder, PlayCircle } from 'lucide-react';
import circuitsImg from '../assets/images/electronics_circuits_lab_1790520917210.jpg';

export const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Resources (26)' },
    { id: 'programming', label: 'Python, Scilab & C' },
    { id: 'embedded', label: 'Arduino & PSpice' },
    { id: 'core_electronics', label: 'Core Electronics & PCB' },
    { id: 'applied_science', label: 'ePG Pathshala & Applied' },
  ];

  const filteredResources = useMemo(() => {
    return COURSE_RESOURCES.filter((res) => {
      const matchesCat = activeCategory === 'all' || res.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getIconForType = (type: CourseResource['type']) => {
    switch (type) {
      case 'colab':
      case 'cloud_tool':
        return <Terminal className="w-4 h-4 text-emerald-600" />;
      case 'video':
        return <PlayCircle className="w-4 h-4 text-rose-600" />;
      case 'national_portal':
        return <Sparkles className="w-4 h-4 text-purple-600" />;
      default:
        return <Folder className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="courses" className="py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with image spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Undergraduate & Postgraduate Syllabus Materials
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
              Courses & Learning Hub
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Curated lecture notes, Google Colab notebooks, circuit design materials, Scilab cloud workspaces, and micro-controller software repositories prepared for Asutosh College electronic science students.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs relative">
              <img
                src={circuitsImg}
                alt="Electronics Laboratory Bench"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-white">
                  Department of Electronics Workbench & Simulation Facilities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted AI & Interactive Lab Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          
          {/* Gemini AI Custom Mentor Card */}
          <div className="p-5 rounded-xl border border-amber-300 bg-linear-to-br from-amber-50 to-orange-50/40 space-y-3">
            <div className="flex items-center justify-between text-xs text-amber-900 font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Featured AI Tool
              </span>
              <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-[11px]">Customized Gemini Gem</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-950">
              Python: সৌরভ স্যার (Dr. Bhowmick's AI Mentor)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              An interactive AI mentor custom-tuned by Dr. Sourav Kumar Bhowmick to assist students in mastering Python syntax, electronics algorithms, and debugging scientific code.
            </p>
            <div>
              <a
                href="https://gemini.google.com/gem/17jcV73oVe8YALhfs_bvImxVcmKcW8MGc?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Launch Python AI Mentor</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Google Colab Cloud Lab Card */}
          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-emerald-600" />
                Cloud Interactive Lab
              </span>
              <span className="font-mono text-[11px] text-stone-500">Jupyter in Browser</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-950">
              Google Colab Python Laboratory
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Execute Python electronics scripts directly in Google Cloud. Pre-seeded with matrix calculations, waveform plotting, Fourier analysis, and circuit dynamics.
            </p>
            <div>
              <a
                href="https://colab.research.google.com/drive/1DjLTHRHUvrgKD7ABD_-Kgf1oAQqRe7jR?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Open Colab Notebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Segmented Control */}
            <div className="flex items-center gap-1 overflow-x-auto p-1 bg-stone-100 rounded-lg text-xs font-medium no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-stone-950 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Keyword search input */}
            <div className="relative sm:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search course materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="p-4 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-all shadow-2xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    {getIconForType(res.type)}
                    <span className="capitalize">{res.category.replace('_', ' ')}</span>
                  </div>
                  {res.badge && (
                    <span className="text-[11px] font-medium text-amber-800">
                      {res.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-stone-900 leading-snug">
                  {res.title}
                </h4>

                <p className="text-xs text-stone-600 line-clamp-2">
                  {res.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-mono">
                  {res.type === 'drive' ? 'Google Drive Folder' : res.type.replace('_', ' ')}
                </span>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                >
                  <span>Open Resource</span>
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
