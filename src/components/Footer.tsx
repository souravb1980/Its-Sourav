import React from 'react';
import { PROFESSOR_INFO } from '../data/portalData';
import { ExternalLink, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Identity & Institution */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-xl font-bold text-white tracking-tight">
              Dr. Sourav Kumar Bhowmick
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Assistant Professor, Department of Electronics, Asutosh College, Kolkata. Affiliated to the University of Calcutta. Research in Chaos Theory, Synchronization, and Nonlinear Electronic Systems.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>92, S.P. Mukherjee Road, Kolkata - 700026, WB, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <a href={`mailto:${PROFESSOR_INFO.email}`} className="text-stone-300 hover:text-white font-mono">
                  {PROFESSOR_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Academic Navigation
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('courses');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Courses & Study Materials (Python, Scilab, Arduino, C)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('academic');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  19 Peer-Reviewed Research Publications (Elsevier, APS, AIP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('exams');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Calcutta University Question Papers (CBCS & CCF 2018–2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('manuals');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Practical Laboratory Manuals & CCF Regulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Academic Qualifications & Teaching Background
                </button>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              External Repositories
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <a
                  href={PROFESSOR_INFO.googleSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Original Google Sites Homepage</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={PROFESSOR_INFO.education[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Ph.D. Thesis on Shodhganga</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://asutoshcollege.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Asutosh College Kolkata Website</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.caluniv.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>University of Calcutta</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Dr. Sourav Kumar Bhowmick. Built for student education and scholarly research dissemination.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
