import React from 'react';
import { PROFESSOR_INFO } from '../data/portalData';
import { GraduationCap, Briefcase, Award, Calendar, BookOpen, Users, ExternalLink, ShieldCheck } from 'lucide-react';

export const AcademicProfile: React.FC = () => {
  return (
    <section id="profile" className="py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div>
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
            Curriculum Vitae & Scholarly Milestones
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
            Academic Background & Experience
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Education credentials, academic appointments, funded research projects, and specialized faculty development programs.
          </p>
        </div>

        {/* 2-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-700" />
              <span>Academic Qualifications</span>
            </h3>

            <div className="space-y-4">
              {PROFESSOR_INFO.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-medium text-amber-800">
                      {edu.institution.includes('Jadavpur') ? 'Kolkata' : 'West Bengal'}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-stone-700">
                    {edu.institution}
                  </p>

                  {edu.title && (
                    <div className="text-xs italic text-stone-600">
                      Dissertation: "{edu.title}"
                    </div>
                  )}

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {edu.details}
                  </p>

                  {edu.url && (
                    <div className="pt-1">
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1 hover:underline"
                      >
                        <span>View Doctoral Thesis on Shodhganga</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Professional Appointments */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-amber-700" />
              <span>Teaching & Technical Experience</span>
            </h3>

            <div className="space-y-4">
              {PROFESSOR_INFO.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-stone-500 tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-stone-700">
                    {exp.organization}
                  </p>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {exp.type}
                  </p>
                </div>
              ))}

              {/* National Awards Card */}
              <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-xl space-y-2">
                <h4 className="font-serif text-base font-bold text-amber-950 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>National Awards & Eligibility</span>
                </h4>
                <div className="space-y-2 text-xs text-stone-700 pt-1">
                  {PROFESSOR_INFO.awards.map((aw, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-stone-900">{aw.title}</strong> — {aw.issuer} ({aw.year}, {aw.subject})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Row 2: Faculty Development & Conferences Organized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Faculty Development & Induction */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>Faculty Development & Refresher Courses</span>
            </h3>

            <div className="space-y-3 text-xs">
              {PROFESSOR_INFO.facultyDevelopment.map((fd, i) => (
                <div key={i} className="border-b border-stone-100 pb-2.5 last:border-b-0 last:pb-0">
                  <div className="font-semibold text-stone-900">{fd.course}</div>
                  <div className="text-stone-600">{fd.institution}</div>
                  <div className="font-mono text-stone-400 mt-0.5">{fd.dates}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences & Academic Events Organized */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              <span>Academic Conferences Organized</span>
            </h3>

            <div className="space-y-3 text-xs">
              {PROFESSOR_INFO.conferencesOrganized.map((conf, i) => (
                <div key={i} className="border-b border-stone-100 pb-2.5 last:border-b-0 last:pb-0">
                  <div className="font-semibold text-stone-900">{conf.title}</div>
                  <div className="text-stone-600">Role: <strong className="text-stone-800">{conf.role}</strong> · {conf.location}</div>
                  <div className="font-mono text-stone-400 mt-0.5">{conf.dates}</div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-100">
              International schools and symposiums attended include ICTP Trieste (Italy), IIT Madras, Besu Shibpur, and Indian Statistical Institute (ISI) Kolkata.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
