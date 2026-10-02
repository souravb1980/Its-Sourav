import React, { useState } from 'react';
import { PROFESSOR_INFO } from '../data/portalData';
import { Mail, MapPin, ExternalLink, Building2, HelpCircle, Copy, Check, GraduationCap, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFESSOR_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-12 bg-stone-50/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-8">
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
            Institutional Affiliation & Academic Office
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
            About & Contact Information
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Department of Electronic Science, Asutosh College (Affiliated to the University of Calcutta).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Official Institutional Location */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    Asutosh College, Kolkata
                  </h3>
                  <p className="text-xs text-stone-500">
                    Department of Electronic Science
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-800">Campus Address:</div>
                    <p className="leading-relaxed">{PROFESSOR_INFO.address}</p>
                    <a
                      href="https://maps.google.com/?q=Asutosh+College+92+SP+Mukherjee+Road+Kolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-amber-950 underline mt-1 inline-flex items-center gap-1 font-medium"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <div className="font-semibold text-stone-800">Official Email:</div>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <a
                        href={`mailto:${PROFESSOR_INFO.email}`}
                        className="font-mono text-stone-900 hover:text-amber-800 text-sm font-medium break-all"
                      >
                        {PROFESSOR_INFO.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 text-stone-400 hover:text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded transition-colors"
                        title="Copy email address"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <a
                href={PROFESSOR_INFO.googleSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg text-xs font-medium text-stone-800 flex items-center justify-between transition-colors"
              >
                <span>Archived Google Sites Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
              </a>
            </div>
          </div>

          {/* Card 2: Student Guidelines & Office Consultations */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    Academic Inquiries
                  </h3>
                  <p className="text-xs text-stone-500">
                    University of Calcutta (CCF / CBCS)
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100 leading-relaxed">
                <p>
                  Students enrolled in Electronic Science (Major, Minor, or General) can consult during college hours regarding:
                </p>
                <ul className="space-y-2 list-disc list-inside text-stone-700">
                  <li><strong className="text-stone-900">Course Materials:</strong> Computational programming (Python, Scilab, C) and Microcontroller/Arduino modules.</li>
                  <li><strong className="text-stone-900">Lab Experiments:</strong> Hardware interfacing, circuit analysis, and digital/analog experiments.</li>
                  <li><strong className="text-stone-900">Examination Preparation:</strong> University question patterns and previous semester archives.</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>For doubts, refer to the Courses & Question Papers sections on this portal.</span>
            </div>
          </div>

          {/* Card 3: Research Collaborations */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    Research & Collaboration
                  </h3>
                  <p className="text-xs text-stone-500">
                    Nonlinear Dynamics & Chaos
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100 leading-relaxed">
                <p>
                  Research scholars and academic collaborators interested in joint investigations, seminar invitations, or manuscript inquiries are welcome to write directly to:
                </p>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <div className="font-semibold text-stone-800 text-xs mb-1">Key Research Domains:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Chaos Synchronization', 'Chimeras & Spiral Waves', 'Complex Networks', 'Electronic Circuits', 'Extreme Events'].map((topic) => (
                      <span key={topic} className="px-2 py-0.5 bg-white border border-stone-200 text-stone-700 rounded text-[11px] font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <a
                href={`mailto:${PROFESSOR_INFO.email}?subject=${encodeURIComponent('[Research Collaboration Inquiry] Dr. Sourav Kumar Bhowmick')}`}
                className="w-full py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Dr. Sourav Kumar Bhowmick</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
