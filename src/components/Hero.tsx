import React from 'react';
import { PROFESSOR_INFO } from '../data/portalData';
import { BookOpen, GraduationCap, Mail, MapPin, ExternalLink, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import portraitImg from '../assets/images/skb_home_portrait.png';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic Persona & Title */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic affiliation header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
                <span>{PROFESSOR_INFO.department}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFESSOR_INFO.institution}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFESSOR_INFO.affiliation}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.15] text-balance">
                Dr. Sourav Kumar Bhowmick
              </h1>
              <p className="text-base sm:text-lg font-medium text-stone-700">
                Assistant Professor of Electronic Science & Nonlinear Dynamics Researcher
              </p>
            </div>

            {/* Authentic bio narrative */}
            <div className="prose prose-stone text-stone-600 leading-relaxed text-sm sm:text-base space-y-3">
              <p>
                Welcome to my academic homepage. I serve as Assistant Professor in the Department of Electronics at Asutosh College, Kolkata. I completed my Master’s degree in Electronic Science from Jadavpur University, followed by a Ph.D. jointly from Jadavpur University and the CSIR - Indian Institute of Chemical Biology (IICB).
              </p>
              <p>
                My scientific research centers on <strong className="font-semibold text-stone-900">Chaos Theory</strong>, <strong className="font-semibold text-stone-900">Chaos Synchronization</strong>, <strong className="font-semibold text-stone-900">Complex Networks</strong>, and <strong className="font-semibold text-stone-900">Nonlinear Phenomena in Electronic Circuits</strong>.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('courses')}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-300" />
                <span>Explore Courses & Notes</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <button
                onClick={() => onNavigate('academic')}
                className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium rounded-lg shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-amber-700" />
                <span>19 Research Publications</span>
              </button>

              <button
                onClick={() => onNavigate('exams')}
                className="px-4 py-2.5 text-stone-700 hover:text-stone-950 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Calcutta Univ Question Bank</span>
                <ArrowRight className="w-3 h-3 text-stone-400" />
              </button>
            </div>

            {/* Trust and Rigor Metrics */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-800">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-stone-950 tabular-nums">19+</div>
                <div className="text-xs text-stone-500">Journal Papers</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-stone-950 tabular-nums">5.3</div>
                <div className="text-xs text-stone-500">Highest Impact Factor</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-stone-950 tabular-nums">₹20.8L</div>
                <div className="text-xs text-stone-500">DST-SERB Grant</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-stone-950 tabular-nums">12+ Yrs</div>
                <div className="text-xs text-stone-500">Academic Teaching</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Laboratory Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-md">
                <img
                  src={portraitImg}
                  alt="Dr. Sourav Kumar Bhowmick - Assistant Professor of Electronic Science at Asutosh College"
                  className="w-full h-80 sm:h-96 object-cover object-[25%_center]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtitle Scrim */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-xs text-stone-300 mb-1">
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                    <span>Ph.D. in Science (Jadavpur University & CSIR-IICB)</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-100 leading-snug">
                    "Observation of synchronization in coupled chaotic oscillators"
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <a
                      href={PROFESSOR_INFO.education[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium transition-colors"
                    >
                      <span>Read Dissertation on Shodhganga</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Contact Card underneath */}
              <div className="mt-4 p-4 rounded-xl border border-stone-200 bg-white/80 backdrop-blur-xs text-xs text-stone-600 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>{PROFESSOR_INFO.address}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                    <a
                      href={`mailto:${PROFESSOR_INFO.email}`}
                      className="text-stone-900 font-mono hover:text-amber-800 transition-colors"
                    >
                      {PROFESSOR_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official Portal</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
