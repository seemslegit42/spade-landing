import React, { useState } from 'react';
import {
  IconPhoneCall,
  IconPhoneOff,
  IconCopy,
  IconCheck,
  IconPlayerPlay,
  IconBolt,
  IconFlame,
  IconScale
} from '@tabler/icons-react';

export default function DemoCTA() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [activeDialer, setActiveDialer] = useState<'competitor' | 'spade' | null>(null);
  const [callProgress, setCallProgress] = useState<number>(0);
  const [provisionModalOpen, setProvisionModalOpen] = useState(false);
  const [provisionSuccess, setProvisionSuccess] = useState(false);

  // Provisioning form state
  const [areaCode, setAreaCode] = useState('415');
  const [forwardNumber, setForwardNumber] = useState('');
  const [dialSnark, setDialSnark] = useState(10);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedNumber(label);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const handleStartSim = (type: 'competitor' | 'spade') => {
    setActiveDialer(type);
    setCallProgress(1);
    const interval = setInterval(() => {
      setCallProgress((prev) => {
        if (prev >= 6) {
          clearInterval(interval);
          return 6;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleStopSim = () => {
    setActiveDialer(null);
    setCallProgress(0);
  };

  const handleProvisionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProvisionSuccess(true);
    setTimeout(() => {
      setProvisionSuccess(false);
      setProvisionModalOpen(false);
    }, 3000);
  };

  return (
    <section id="demo-section" className="py-20 px-4 md:px-8 bg-[#121317] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20b2aa]/15 border border-[#20b2aa]/40 text-[#59dad1] text-xs font-mono uppercase tracking-wider mb-4">
            <IconPhoneCall size={16} />
            Live Comparative Verification
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5FFFA] tracking-tight mb-3">
            Don't Take Our Word For It. Call Both.
          </h2>
          <p className="text-sm text-[#cfc2d5] font-mono">
            Test the polite answering bot vs. Spade Sentry's 7-second gauntlet.
          </p>
        </div>

        {/* The Two Numbers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Card 1: Call That Polite Answering Bot */}
          <div className="roman-glass-danger rounded-3xl p-6 sm:p-8 border border-red-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-red-300">
                  Step 1: Test The Pushover
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30 font-mono">
                  Public Toll-Free Demo Line
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5FFFA] mb-2">
                Call That Polite AI Bot: (888) 297-7662
              </h3>
              <p className="text-sm text-[#cfc2d5] mb-6 leading-relaxed">
                Pitch her a fake enterprise product called <strong className="text-red-300">“SynergyFlow Enterprise.”</strong> Watch her take notes, apologize for the owner being away, and eagerly ask how your SDRs can follow up.
              </p>

              <div className="bg-[#121317] rounded-xl p-4 border border-red-500/20 mb-6">
                <span className="text-[11px] text-[#988d9e] uppercase font-mono block mb-1">Recommended Script:</span>
                <p className="text-xs text-[#e3e2e7] italic">
                  “Hi, I'm calling about our Q4 omnichannel marketing AI synergy platform. We offer 14 integration points and want to book a 45-minute demo with your VP.”
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-red-500/20 flex flex-wrap items-center gap-3">
              <a
                href="tel:8882977662"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <IconPhoneCall size={16} />
                <span>Dial (888) 297-7662</span>
              </a>

              <button
                onClick={() => handleCopy('888-297-7662', 'competitor')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#cfc2d5] text-xs transition-colors cursor-pointer"
              >
                {copiedNumber === 'competitor' ? <IconCheck size={14} className="text-[#3eb991]" /> : <IconCopy size={14} />}
                <span>{copiedNumber === 'competitor' ? 'Copied' : 'Copy Number'}</span>
              </button>

              <button
                onClick={() => handleStartSim('competitor')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#cfc2d5] text-xs transition-colors cursor-pointer"
              >
                <IconPlayerPlay size={14} />
                <span>Simulate Call In Browser</span>
              </button>
            </div>
          </div>

          {/* Card 2: Call Spade Sentry */}
          <div className="roman-glass-elevated rounded-3xl p-6 sm:p-8 border-2 border-[#3eb991]/50 shadow-[0_0_30px_rgba(62,185,145,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-[#82f8cc]">
                  Step 2: Test The Gauntlet
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#00523c]/60 text-[#82f8cc] border border-[#3eb991]/40 font-mono font-bold">
                  Spade Live Sentinel
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5FFFA] mb-2">
                Call Spade: 1 (800) BUH-BYE
              </h3>
              <p className="text-sm text-[#cfc2d5] mb-6 leading-relaxed">
                Try the exact same cold pitch. See how many seconds you last before you get hit with our deadpan cadence and an immediate call sever.
              </p>

              <div className="bg-[#12141A] rounded-xl p-4 border border-[#3eb991]/30 mb-6">
                <span className="text-[11px] text-[#3eb991] uppercase font-mono block mb-1">Expected Outcome:</span>
                <p className="text-xs text-[#F5FFFA] font-medium">
                  “A synergy platform? Wow. Riveting. Hold on, let me transfer you to... nobody. Buh-bye.” (Call severed in 7 seconds. Added to Global Burn Book.)
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3eb991]/30 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleStartSim('spade')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3eb991] hover:bg-[#65dbb1] text-[#0d0e12] text-xs font-bold transition-all shadow-[0_0_16px_rgba(62,185,145,0.4)] cursor-pointer"
              >
                <IconPhoneCall size={16} />
                <span>Simulate In-Browser Test</span>
              </button>

              <button
                onClick={() => setProvisionModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#20b2aa]/20 hover:bg-[#20b2aa]/30 border border-[#20b2aa]/50 text-[#59dad1] text-xs font-semibold transition-colors cursor-pointer"
              >
                <IconBolt size={15} />
                <span>Claim Dedicated Line ($2.99)</span>
              </button>
            </div>
          </div>

        </div>

        {/* IN-BROWSER SIMULATOR DISPLAY (If active) */}
        {activeDialer && (
          <div className="max-w-2xl mx-auto mb-16 roman-glass-elevated rounded-2xl p-6 border border-[#dfb7ff]/40 animate-fadeIn">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4d4353]/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3eb991] animate-ping"></span>
                <h4 className="font-bold text-sm text-[#F5FFFA] font-mono">
                  {activeDialer === 'competitor' ? 'In-Browser Call: The Polite Answering Bot' : 'In-Browser Call: Spade Sentry Gauntlet'}
                </h4>
              </div>
              <button
                onClick={handleStopSim}
                className="text-xs text-red-300 hover:text-red-200 px-2 py-1 rounded bg-red-950/60 border border-red-500/30 flex items-center gap-1 cursor-pointer"
              >
                <IconPhoneOff size={14} />
                <span>Hang Up</span>
              </button>
            </div>

            {activeDialer === 'competitor' ? (
              <div className="space-y-3 text-xs">
                <p className="text-[#988d9e]">Caller: "Hi, I'm pitching our enterprise CRM platform..."</p>
                <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/20 text-red-200">
                  <span className="font-bold block mb-1">The Polite Bot (38 seconds in):</span>
                  "Oh thank you so much for calling! That sounds wonderful. The CEO is in a board meeting right now, but what is your email, phone number, and company address so I can write down a full proposal?"
                </div>
                <div className="text-[11px] text-[#988d9e] flex items-center justify-between pt-2">
                  <span>Voice Meter: Active ($0.22 billed)</span>
                  <span className="text-red-300 font-bold">Wasted Time: Continuing...</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <p className="text-[#988d9e]">Caller: "Hi, I'm pitching our enterprise CRM platform..."</p>
                <div className="p-3 rounded-lg bg-[#00523c]/40 border border-[#3eb991]/30 text-[#82f8cc]">
                  <span className="font-bold block mb-1">Spade Sentry (Elapsed: 00:06):</span>
                  "A synergy platform? Wow. Riveting. Hold on, let me transfer you to... nobody. Buh-bye."
                </div>
                <div className="p-2.5 rounded-lg bg-[#12141A] border border-[#4d4353]/30 text-[11px] text-[#59dad1] flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <IconCheck size={14} className="text-[#3eb991]" />
                    Call severed automatically. Caller ID logged in Global Burn Book.
                  </span>
                  <span className="font-mono text-[#3eb991] font-bold">Cost: $0.0003</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="roman-glass-purple rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#dfb7ff]/30 shadow-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6a0dad]/40 border border-[#dfb7ff]/40 text-[#dfb7ff] text-xs font-semibold uppercase tracking-wider mb-4">
            <IconFlame size={15} />
            The $2.99/mo Carrier Line
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5FFFA] mb-4">
            Ready to Stop Paying Bots to Listen to Telemarketers?
          </h2>
          <p className="text-base text-[#cfc2d5] max-w-2xl mx-auto mb-8">
            Get your own dedicated wholesale carrier line provisioned in 60 seconds. Set your Snark Dial, activate the Global Burn Book, and reclaim your peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setProvisionModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#3eb991] text-[#0d0e12] font-bold text-base hover:bg-[#65dbb1] transition-all shadow-[0_0_24px_rgba(62,185,145,0.5)] cursor-pointer"
            >
              <IconBolt size={20} />
              <span>Claim Your Sentry Line: $2.99/mo</span>
            </button>

            <a
              href="#pricing-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#e3e2e7] text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Review Wholesale Rates (+30%)</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#cfc2d5] pt-6 border-t border-[#dfb7ff]/20">
            <span className="flex items-center gap-1.5">
              <IconCheck size={14} className="text-[#3eb991]" /> 60-Second Setup
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={14} className="text-[#3eb991]" /> No 10-Call Traps
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={14} className="text-[#3eb991]" /> Cancel Anytime
            </span>
          </div>
        </div>

        {/* PROVISIONING MODAL */}
        {provisionModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="roman-glass-elevated rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#3eb991]/40 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#4d4353]/30">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-[#3eb991]/20 text-[#3eb991]">
                    <IconBolt size={20} />
                  </span>
                  <h3 className="text-xl font-bold text-[#F5FFFA]">Provision Dedicated DID</h3>
                </div>
                <button
                  onClick={() => setProvisionModalOpen(false)}
                  className="text-xs text-[#988d9e] hover:text-[#e3e2e7] px-2 py-1 rounded bg-[#1a1b20] border border-[#4d4353]/40 cursor-pointer"
                >
                  Close
                </button>
              </div>

              {provisionSuccess ? (
                <div className="p-6 rounded-2xl bg-[#00523c]/40 border border-[#3eb991]/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#3eb991]/20 text-[#3eb991] flex items-center justify-center mx-auto">
                    <IconCheck size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-[#F5FFFA]">Sentinel Line Provisioned!</h4>
                  <p className="text-xs text-[#82f8cc]">
                    Your wholesale carrier DID has been secured for area code ({areaCode}). SIP trunking and sub-100ms speech stream connected with Snark Level {dialSnark}.
                  </p>
                  <p className="text-[11px] font-mono text-[#59dad1]">
                    DID Assigned: +1 ({areaCode}) 555-0199
                  </p>
                </div>
              ) : (
                <form onSubmit={handleProvisionSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="area-code-input" className="block text-xs font-mono uppercase text-[#988d9e] mb-1.5">
                      Preferred Area Code (US/Canada):
                    </label>
                    <input
                      id="area-code-input"
                      type="text"
                      maxLength={3}
                      value={areaCode}
                      onChange={(e) => setAreaCode(e.target.value)}
                      placeholder="e.g. 415, 212, 312"
                      className="w-full bg-[#12141A] rounded-xl px-4 py-2.5 text-sm border border-[#4d4353] focus:border-[#3eb991] focus:outline-none text-[#F5FFFA]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cell-forwarding-input" className="block text-xs font-mono uppercase text-[#988d9e] mb-1.5">
                      Personal Cell for Safe-Listed Forwarding:
                    </label>
                    <input
                      id="cell-forwarding-input"
                      type="tel"
                      value={forwardNumber}
                      onChange={(e) => setForwardNumber(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#12141A] rounded-xl px-4 py-2.5 text-sm border border-[#4d4353] focus:border-[#3eb991] focus:outline-none text-[#F5FFFA]"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="snark-dial-input" className="text-xs font-mono uppercase text-[#988d9e]">
                        Default Snark Dial:
                      </label>
                      <span className="text-xs font-bold text-[#3eb991] font-mono">
                        Level {dialSnark} (Existential Crisis)
                      </span>
                    </div>
                    <input
                      id="snark-dial-input"
                      type="range"
                      min="1"
                      max="10"
                      value={dialSnark}
                      onChange={(e) => setDialSnark(parseInt(e.target.value))}
                      aria-label="Default Snark Dial"
                      className="w-full h-2 bg-[#1a1b20] rounded-lg appearance-none cursor-pointer accent-[#3eb991]"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#1a1b20] border border-[#4d4353]/30 text-xs text-[#cfc2d5]">
                    <div className="flex items-center justify-between mb-1">
                      <span>Monthly Line Cost:</span>
                      <span className="font-mono font-bold text-[#82f8cc]">$2.99 / mo</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#988d9e]">
                      <span>Usage Fee:</span>
                      <span>Wholesale (+30% tip)</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#3eb991] hover:bg-[#65dbb1] text-[#0d0e12] font-bold text-sm transition-all shadow-[0_0_20px_rgba(62,185,145,0.4)] cursor-pointer"
                  >
                    Activate Line in 60s ($2.99/mo)
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* PERSISTENT FOOTER DISCLAIMER */}
        <footer className="mt-20 pt-8 border-t border-[#4d4353]/30 text-xs text-[#988d9e]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F5FFFA] font-heading text-sm tracking-wider">
                THE SPADE SENTRY
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1f1f24] text-[#59dad1] font-mono">
                PROTOCOL v4.8
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[11px]">
              <a href="#features-section" className="hover:text-[#e3e2e7] transition-colors">
                Global Burn Book
              </a>
              <a href="#audio-section" className="hover:text-[#e3e2e7] transition-colors">
                Snark Dial
              </a>
              <a href="#pricing-section" className="hover:text-[#e3e2e7] transition-colors">
                Wholesale Breakdown
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0d0e12] border border-[#4d4353]/30 leading-relaxed text-[11px]">
            <p className="flex items-start gap-2">
              <IconScale size={16} className="text-[#59dad1] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#cfc2d5]">Mandatory Satirical Disclaimer:</strong> The Spade Sentry is an independent parody and operational utility. It is not affiliated with, endorsed by, or in any way officially connected to any venture-backed VoIP reception apps, traditional answering services, or carrier networks. All product comparisons are satirical critiques of published commercial answering models.
              </span>
            </p>
          </div>

          <div className="text-center mt-6 text-[10px] text-[#988d9e]">
            © 2026 The Spade Sentry Protocol. Engineered for sovereign builders. Buh-bye, pushovers.
          </div>
        </footer>

      </div>
    </section>
  );
}
