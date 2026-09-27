import React, { useState } from 'react';
import { PROFESSOR_INFO } from '../data/portalData';
import { Mail, MapPin, Send, ExternalLink, Check, Copy, Building2, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('Student Course Query');
  const [messageText, setMessageText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Academic Portal] ${subjectCategory} - ${senderName}`);
    const body = encodeURIComponent(
      `Dear Dr. Sourav Kumar Bhowmick,\n\n${messageText}\n\nSincerely,\n${senderName}\nEmail: ${senderEmail}`
    );
    window.location.href = `mailto:${PROFESSOR_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const text = `To: ${PROFESSOR_INFO.email}\nSubject: [Academic Portal] ${subjectCategory} - ${senderName}\n\nDear Dr. Sourav Kumar Bhowmick,\n\n${messageText}\n\nSincerely,\n${senderName}\nEmail: ${senderEmail}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-12 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-8">
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
            Communication & Institution Location
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
            About & Contact Information
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            For academic questions regarding electronics courses, Calcutta University examinations, laboratory experiments, or nonlinear dynamics research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Official Institutional Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Institution Card */}
            <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs">
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
                      className="text-amber-800 hover:text-amber-950 underline mt-1 inline-flex items-center gap-1"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-800">Official Correspondence:</div>
                    <a
                      href={`mailto:${PROFESSOR_INFO.email}`}
                      className="font-mono text-stone-900 hover:text-amber-800 text-sm font-medium"
                    >
                      {PROFESSOR_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <a
                  href={PROFESSOR_INFO.googleSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg text-xs font-medium text-stone-800 flex items-center justify-between transition-colors"
                >
                  <span>Visit Original Google Sites Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </div>
            </div>

            {/* Office Hours / FAQ Card */}
            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-3 text-xs shadow-2xs">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>Guidelines for Students</span>
              </div>
              <ul className="space-y-2 text-stone-600 list-disc list-inside leading-relaxed">
                <li>Check the <strong className="text-stone-800">Courses</strong> section first for Python, Scilab, C, and Arduino course materials.</li>
                <li>University question papers for past odd/even semesters are accessible directly under the <strong className="text-stone-800">Question Papers</strong> tab.</li>
                <li>For practical laboratory issues, refer to the corresponding <strong className="text-stone-800">CCF/CBCS Lab Manual</strong>.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Query Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-5">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-950">
                  Send Academic Message
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Prepare your message directly to Dr. Sourav Kumar Bhowmick ({PROFESSOR_INFO.email}).
                </p>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-stone-700 block">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-200 rounded-lg text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-stone-700 block">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@student.caluniv.ac.in"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-200 rounded-lg text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">Subject Topic</label>
                  <select
                    value={subjectCategory}
                    onChange={(e) => setSubjectCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-hidden focus:border-amber-600"
                  >
                    <option value="Student Course Query">Student Course & Lecture Query</option>
                    <option value="Calcutta Univ Examination Query">Calcutta University Examination / Paper Code Question</option>
                    <option value="Practical Laboratory Manual">Practical Laboratory Experiment Doubt</option>
                    <option value="Research & Chaos Theory Collaboration">Research Collaboration (Chaos & Complex Networks)</option>
                    <option value="General Academic Inquiry">General Academic Correspondence</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">Message Details</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your academic inquiry or doubt clearly..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded-lg text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-amber-600 leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-stone-300" />
                    <span>Send via Default Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-800 font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
