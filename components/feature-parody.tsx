import React, { useState } from 'react';
import {
  IconFlame,
  IconShieldLock,
  IconDeviceMobileMessage,
  IconFingerprint,
  IconServer,
  IconCpu,
  IconReceipt2,
  IconCheck,
  IconPhoneCheck,
  IconPhoneX,
  IconHeartbeat,
  IconUserCheck
} from '@tabler/icons-react';

export default function FeatureParody() {
  const [activeTab, setActiveTab] = useState<'parody' | 'burnbook' | 'digest' | 'architecture'>('parody');

  const parodyItems = [
    {
      competitorClaim: '“Smarter than voicemail, more affordable than an answering service”',
      spadeReality: '“Cheaper than your morning coffee, ruder than an actual NYC receptionist.”',
      description: 'Voicemail leaves you with homework; that smiling answering bot leaves you with transcribed sales pitches. Spade leaves you with uninterrupted peace of mind.'
    },
    {
      competitorClaim: '“Instruct the bot to handle specific scenarios”',
      spadeReality: '“The Snark Dial (Levels 1 to 10).”',
      description: 'Slide to Level 1 for high-value clients who pay on time. Crank to Level 10 to unleash lethal sarcasm on recurring B2B merchant cash advance reps.'
    },
    {
      competitorClaim: '“Send a text mid-call with a scheduling link”',
      spadeReality: '“The Immediate Ejection.”',
      description: 'Why would you send a calendar scheduling link to someone you never want to meet? Spade logs them in the Global Burn Book so they never ring your phone again.'
    },
    {
      competitorClaim: '“Every Wednesday at 10 AM: Join our live onboarding webinar”',
      spadeReality: '“No Webinars. Ever.”',
      description: 'If an AI phone receptionist requires a weekly webinar to explain how it operates, it’s not an AI—it’s an administrative burden. Provision your line in 60 seconds and walk away.'
    }
  ];

  // Global Burn book live simulation data
  const burnBookEntries = [
    {
      phone: '+1 (415) 890-3419',
      carrier: 'Wholesale Commercial VoIP',
      fingerprint: 'fp_a982f1b_sdr_crm',
      verifications: 142,
      terminatedIn: '4.8s',
      status: 'PERMANENTLY SILENCED NETWORK-WIDE',
      timestamp: '2 mins ago'
    },
    {
      phone: '+1 (888) 492-0193',
      carrier: 'Aggregated Robodialer Trunk',
      fingerprint: 'fp_77c001a_health_scam',
      verifications: 914,
      terminatedIn: '3.2s',
      status: 'PERMANENTLY SILENCED NETWORK-WIDE',
      timestamp: '6 mins ago'
    },
    {
      phone: '+1 (312) 550-9844',
      carrier: 'Virtual Cloud PBX Pool',
      fingerprint: 'fp_33b890e_merchant_loan',
      verifications: 68,
      terminatedIn: '6.1s',
      status: 'PERMANENTLY SILENCED NETWORK-WIDE',
      timestamp: '14 mins ago'
    },
    {
      phone: '+1 (917) 304-8172',
      carrier: 'International SIP Gateway',
      fingerprint: 'fp_11f442d_seo_spam',
      verifications: 388,
      terminatedIn: '5.0s',
      status: 'PERMANENTLY SILENCED NETWORK-WIDE',
      timestamp: '22 mins ago'
    }
  ];

  return (
    <section id="features-section" className="py-20 px-4 md:px-8 bg-[#0D0E12] relative border-b border-[#4d4353]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('parody')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'parody'
                ? 'bg-[#3eb991] text-[#0d0e12] shadow-[0_0_16px_rgba(62,185,145,0.4)]'
                : 'bg-[#1a1b20] text-[#cfc2d5] hover:text-[#e3e2e7] border border-[#4d4353]/40'
            }`}
          >
            Feature Parody Matrix
          </button>

          <button
            onClick={() => setActiveTab('burnbook')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'burnbook'
                ? 'bg-[#6a0dad] text-[#f1daff] border border-[#dfb7ff]/40 shadow-[0_0_16px_rgba(106,13,173,0.4)]'
                : 'bg-[#1a1b20] text-[#cfc2d5] hover:text-[#e3e2e7] border border-[#4d4353]/40'
            }`}
          >
            <IconFlame size={16} />
            The Global Burn Book
          </button>

          <button
            onClick={() => setActiveTab('digest')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'digest'
                ? 'bg-[#20b2aa] text-[#00201e] shadow-[0_0_16px_rgba(32,178,170,0.4)]'
                : 'bg-[#1a1b20] text-[#cfc2d5] hover:text-[#e3e2e7] border border-[#4d4353]/40'
            }`}
          >
            <IconDeviceMobileMessage size={16} />
            The 5 PM Daily Digest Moat
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-[#343439] text-[#e3e2e7] border border-[#dfb7ff]/50'
                : 'bg-[#1a1b20] text-[#cfc2d5] hover:text-[#e3e2e7] border border-[#4d4353]/40'
            }`}
          >
            <IconCpu size={16} />
            Engineering Milestones
          </button>
        </div>

        {/* TAB 1: FEATURE PARODY GRID */}
        {activeTab === 'parody' && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#F5FFFA] mb-2">
                Feature Parody Matrix
              </h3>
              <p className="text-xs text-[#cfc2d5] font-mono">
                Traditional SaaS claims vs. Spade Sentry reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parodyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="roman-glass rounded-2xl p-6 border border-[#4d4353]/30 hover:border-[#20b2aa]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Competitor claim */}
                    <div className="mb-4 pb-3 border-b border-[#4d4353]/25">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-300 block mb-1">
                        Typical Venture-Backed SaaS Claim:
                      </span>
                      <p className="text-sm text-[#988d9e] italic font-medium">
                        {item.competitorClaim}
                      </p>
                    </div>

                    {/* Spade counter-strike */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#3eb991] block mb-1">
                        The Spade Sentry Counter-Strike:
                      </span>
                      <h4 className="text-lg font-bold text-[#F5FFFA] mb-2">
                        {item.spadeReality}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#cfc2d5] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#4d4353]/20 flex items-center justify-between text-[11px] text-[#59dad1]">
                    <span>Outcome: Zero billable minutes wasted</span>
                    <IconCheck size={14} className="text-[#3eb991]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CROWDSOURCED DEFENSIBILITY: THE GLOBAL BURN BOOK */}
        {activeTab === 'burnbook' && (
          <div className="roman-glass-purple rounded-3xl p-6 md:p-10 border border-[#dfb7ff]/30">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6a0dad]/40 border border-[#dfb7ff]/40 text-[#dfb7ff] text-xs font-semibold uppercase tracking-wider mb-3">
                  <IconFingerprint size={16} />
                  Crowdsourced Defensibility Moat
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#F5FFFA] mb-4">
                  The Global Burn Book
                </h2>
                <p className="text-base text-[#cfc2d5] max-w-2xl mx-auto mb-4">
                  Every time a Spade instance shuts down a telemarketer or cold pitch, the caller ID and voice acoustic fingerprint are flagged.
                </p>
                <div className="p-3 rounded-xl bg-[#0d0e12]/80 border border-[#dfb7ff]/30 text-sm text-[#dfb7ff] font-medium max-w-xl mx-auto">
                  “Traditional answering apps isolate you on your own island. Spade Sentry networks you into a collective wall of defense.”
                </div>
              </div>

              {/* Live Network Stream Table */}
              <div className="bg-[#0d0e12] rounded-2xl p-4 sm:p-6 border border-[#4d4353]/50 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4d4353]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#dfb7ff] animate-ping"></span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#dfb7ff] font-bold">
                      Live Network Quarantine Stream
                    </span>
                  </div>
                  <span className="text-xs text-[#988d9e] font-mono">
                    Node: us-east1 • Cross-Verification Engine Active
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-[#4d4353]/40 text-[#988d9e]">
                        <th className="py-2.5 px-3">Caller DID</th>
                        <th className="py-2.5 px-3">Carrier / Origin</th>
                        <th className="py-2.5 px-3">Voice Fingerprint</th>
                        <th className="py-2.5 px-3">Sentries Verified</th>
                        <th className="py-2.5 px-3">Ejected In</th>
                        <th className="py-2.5 px-3 text-right">Defense Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#4d4353]/20">
                      {burnBookEntries.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#1a1b20]/60 transition-colors">
                          <td className="py-3 px-3 font-bold text-[#e3e2e7]">{row.phone}</td>
                          <td className="py-3 px-3 text-[#cfc2d5]">{row.carrier}</td>
                          <td className="py-3 px-3 text-[#59dad1]">{row.fingerprint}</td>
                          <td className="py-3 px-3 text-[#dfb7ff] font-bold">{row.verifications} Sentries</td>
                          <td className="py-3 px-3 text-[#3eb991] font-bold">{row.terminatedIn}</td>
                          <td className="py-3 px-3 text-right">
                            <span className="px-2.5 py-1 rounded-full bg-red-950/60 text-red-300 border border-red-500/30 text-[10px] font-semibold">
                              SILENCED NETWORK-WIDE
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-[#4d4353]/30 flex flex-wrap items-center justify-between text-xs text-[#988d9e]">
                  <span>Total Network Blocklist: <strong>418,291</strong> verified telemarketing DIDs</span>
                  <span className="text-[#3eb991] flex items-center gap-1">
                    <IconShieldLock size={14} />
                    Auto-Synced to your personal line in real time
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: THE 5 PM DAILY DIGEST MOAT */}
        {activeTab === 'digest' && (
          <div className="roman-glass rounded-3xl p-6 md:p-10 border border-[#20b2aa]/30">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20b2aa]/15 border border-[#20b2aa]/40 text-[#59dad1] text-xs font-semibold uppercase tracking-wider mb-3">
                  <IconDeviceMobileMessage size={16} />
                  Zero Voicemail Homework
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#F5FFFA] mb-4">
                  The Daily Digest Moat
                </h2>
                <p className="text-base text-[#cfc2d5] max-w-2xl mx-auto mb-2">
                  Replace standard, rambling audio voicemails with the <strong>"Spade Summary"</strong>.
                </p>
                <p className="text-sm text-[#82f8cc]">
                  Delivered automatically at 5:00 PM every weekday. Categorized with clinical precision and deadpan dry wit.
                </p>
              </div>

              {/* Interactive Phone SMS Mock */}
              <div className="max-w-md mx-auto bg-[#12141A] rounded-3xl p-5 border-2 border-[#4d4353]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Phone Top Notch */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#4d4353]/30 text-xs text-[#988d9e] font-mono">
                  <span>5:00 PM</span>
                  <span className="px-3 py-0.5 rounded-full bg-[#1a1b20] text-[#59dad1] text-[10px]">
                    Spade Sentry Bot (Line: 2.99)
                  </span>
                  <span>100% 5G</span>
                </div>

                {/* SMS Bubble */}
                <div className="space-y-4">
                  <div className="bg-[#1f1f24] rounded-2xl rounded-tl-sm p-4 border border-[#4d4353]/40 text-xs text-[#e3e2e7] space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#4d4353]/30">
                      <span className="font-bold text-[#dfb7ff] text-sm">
                        📬 Spade Daily Dispatch — Today
                      </span>
                      <span className="text-[10px] text-[#988d9e]">5:00 PM</span>
                    </div>

                    {/* Mom / Clients */}
                    <div className="p-2.5 rounded-lg bg-[#00523c]/30 border border-[#3eb991]/30">
                      <span className="font-bold text-[#82f8cc] flex items-center gap-1.5 mb-1">
                        <IconUserCheck size={14} />
                        1. Family & VIP Clients (Forwarded)
                      </span>
                      <p className="text-[#cfc2d5] leading-relaxed text-[11px]">
                        • <strong>Family Line (2:14 PM):</strong> Safe-listed. Patched straight to your cell without delay.
                        <br />• <strong>Retained Corporate Counsel (4:02 PM):</strong> Verified caller. Connected seamlessly without AI delay.
                      </p>
                    </div>

                    {/* Urgent / Doctor */}
                    <div className="p-2.5 rounded-lg bg-[#6a0dad]/20 border border-[#dfb7ff]/30">
                      <span className="font-bold text-[#dfb7ff] flex items-center gap-1.5 mb-1">
                        <IconHeartbeat size={14} />
                        2. Urgent / Healthcare (Logged & Pinned)
                      </span>
                      <p className="text-[#cfc2d5] leading-relaxed text-[11px]">
                        • <strong>Specialist Clinic (11:15 AM):</strong> Medical follow-up confirmed for Thursday 10:00 AM. Added to agenda.
                      </p>
                    </div>

                    {/* Deadweight (Destroyed) */}
                    <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30">
                      <span className="font-bold text-red-300 flex items-center gap-1.5 mb-1">
                        <IconPhoneX size={14} />
                        3. Deadweight (Destroyed with Sarcasm)
                      </span>
                      <p className="text-red-200/90 leading-relaxed text-[11px]">
                        • <strong>3 SDRs & 2 Robocalls:</strong> Ejected in an average of 6.2 seconds.
                        <br />• <em>"Told a payroll cold-caller you've retired to Belize. Saved you 14 minutes and $3.80 in talk time. Buh-bye."</em>
                      </p>
                    </div>

                    <div className="text-[10px] text-[#988d9e] text-center pt-1">
                      Reply <strong className="text-[#59dad1]">"CALL [NAME]"</strong> to dial back instantly or swipe to clear.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 4: ARCHITECTURE & IMPLEMENTATION MILESTONES */}
        {activeTab === 'architecture' && (
          <div className="roman-glass-elevated rounded-3xl p-6 md:p-10 border border-[#3eb991]/30">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3eb991]/20 border border-[#3eb991]/40 text-[#3eb991] text-xs font-semibold uppercase tracking-wider mb-3">
                  <IconServer size={16} />
                  Production-Grade Telephony Stack
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#F5FFFA] mb-4">
                  Implementation Milestones
                </h2>
                <p className="text-base text-[#cfc2d5] max-w-2xl mx-auto">
                  Built on bare-metal VoIP primitives, sub-300ms neural streaming, and radical wholesale pricing transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Milestone 1 */}
                <div className="bg-[#12141A] rounded-2xl p-5 border border-[#4d4353]/40 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#20b2aa]/20 text-[#59dad1] flex items-center justify-center mb-4">
                      <IconPhoneCheck size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-[#59dad1] uppercase block mb-1">Milestone 1</span>
                    <h4 className="text-base font-bold text-[#F5FFFA] mb-2">Carrier SIP & 10DLC Automation</h4>
                    <p className="text-xs text-[#cfc2d5] leading-relaxed mb-4">
                      Automated carrier sub-account provisioning, SIP trunking, and instantaneous 10DLC campaign registration. Users acquire a dedicated carrier line for $2.99/mo within 60 seconds.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#4d4353]/30 text-[11px] text-[#3eb991] font-mono flex items-center gap-1">
                    <IconCheck size={14} /> Provisioning Time: &lt; 60s
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="bg-[#12141A] rounded-2xl p-5 border border-[#dfb7ff]/40 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#6a0dad]/30 text-[#dfb7ff] flex items-center justify-center mb-4">
                      <IconCpu size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-[#dfb7ff] uppercase block mb-1">Milestone 2</span>
                    <h4 className="text-base font-bold text-[#F5FFFA] mb-2">Ultra-Low Latency Pipeline</h4>
                    <p className="text-xs text-[#cfc2d5] leading-relaxed mb-4">
                      Direct raw audio media streams routed to sub-100ms neural speech recognition via bidirectional WebSockets. System prompt enforces deadpan cadence with zero hesitation, returned via 120ms high-speed TTS.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#4d4353]/30 text-[11px] text-[#dfb7ff] font-mono flex items-center gap-1">
                    <IconCheck size={14} /> End-to-End Latency: ~280ms
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="bg-[#12141A] rounded-2xl p-5 border border-[#3eb991]/40 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#00523c]/40 text-[#82f8cc] flex items-center justify-center mb-4">
                      <IconReceipt2 size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-[#82f8cc] uppercase block mb-1">Milestone 3</span>
                    <h4 className="text-base font-bold text-[#F5FFFA] mb-2">Usage Billing Engine</h4>
                    <p className="text-xs text-[#cfc2d5] leading-relaxed mb-4">
                      Real-time metering engine tracking exact millisecond duration, token count, and carrier line fees with an automated 30% markup. No hidden tiers or $39 lock-in retainers.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#4d4353]/30 text-[11px] text-[#82f8cc] font-mono flex items-center gap-1">
                    <IconCheck size={14} /> Pure Wholesale + 30% Tip
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
