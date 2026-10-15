import React, { useState, useEffect } from 'react';
import {
  IconPhoneCall,
  IconPhoneOff,
  IconShieldLock,
  IconFlame,
  IconPlayerPlay,
  IconPlayerPause,
  IconClock,
  IconBolt,
  IconSparkles,
  IconCheck,
  IconAlertTriangle,
  IconWaveSine
} from '@tabler/icons-react';

interface HeroSectionProps {
  onScrollToSection?: (id: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  // Live Gauntlet vs Pushover simulation state
  const [simulationActive, setSimulationActive] = useState(true);
  const [pushoverSeconds, setPushoverSeconds] = useState(142);
  const [spadeSeconds, setSpadeSeconds] = useState(7);
  const [currentPitchIndex, setCurrentPitchIndex] = useState(0);

  const pitches = [
    {
      caller: 'Brad @ SynergyFlow CRM',
      pitch: '“Hey! I know you weren’t expecting my call, but quick question about your Q4 sales stack pipeline—”',
      pushoverReaction: '“Oh hello Brad! That sounds very intriguing. Let me pull out my notebook and write down your 14 bullet points so the owner can review them!”',
      spadeReaction: '“SynergyFlow? Never heard of it, sounds exhausting. Hold on, let me connect you to... nobody. Buh-bye.”'
    },
    {
      caller: 'Rachel @ Automated Merchant Funding',
      pitch: '“Hi there, I’m following up on the pre-approved $250,000 line of credit with zero collateral—”',
      pushoverReaction: '“Thank you Rachel! Could you repeat the interest terms and underwriting matrix so I can log this lead for our CEO?”',
      spadeReaction: '“Line of credit? Cute. We’re washing our hair for the next six months. Goodbye.”'
    },
    {
      caller: 'Offshore Backlink Outreach Bot',
      pitch: '“Sir, we noticed your domain is missing critical PageRank backlinks for top ranking keywords—”',
      pushoverReaction: '“I didn’t catch the second keyword, could you spell that out while our voice minute meter bills at full rate?”',
      spadeReaction: '“A bot pitching backlinks? Added to the Global Burn Book. Call severed. Click.”'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulationActive) {
      interval = setInterval(() => {
        setPushoverSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [simulationActive]);

  const handleNextPitch = () => {
    setCurrentPitchIndex((prev) => (prev + 1) % pitches.length);
    setPushoverSeconds(125 + Math.floor(Math.random() * 40));
    setSpadeSeconds(6 + Math.floor(Math.random() * 3));
    setSimulationActive(true);
  };

  const scrollTo = (id: string) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const activePitch = pitches[currentPitchIndex];
  const pushoverCost = ((pushoverSeconds / 60) * 0.18 + 0.39).toFixed(2);
  const spadeCost = ((spadeSeconds / 60) * 0.008).toFixed(4);

  return (
    <section className="relative pt-8 pb-20 px-4 md:px-8 aurora-bg overflow-hidden border-b border-[#4d4353]/30">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Operational Pill / Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#4d4353]/20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3eb991] shadow-[0_0_8px_#3eb991] animate-pulse"></span>
            <span className="text-xs uppercase font-semibold tracking-wider text-[#59dad1]">
              Sentry Status: Active Sentinel Fleet • Version 4.8
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#cfc2d5]">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <IconFlame size={14} className="text-[#3eb991]" />
              <strong>14,892</strong> Cold Calls Terminated Today
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#dfb7ff]">
              <IconShieldLock size={14} />
              $2.99 Carrier Wholesale Guarantee
            </span>
          </div>
        </div>

        {/* Hero Narrative & Typography */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6a0dad]/25 border border-[#dfb7ff]/40 text-[#dfb7ff] text-xs font-mono uppercase tracking-widest mb-5 shadow-[0_0_15px_rgba(106,13,173,0.3)]">
            <IconSparkles size={14} />
            Autonomous Gatekeeper • 7-Second Intercept
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5FFFA] tracking-tight leading-[1.1] mb-6">
            Keep Customers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb7ff] via-[#59dad1] to-[#3eb991]">
              Eject Telemarketers Instantly.
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 text-left">
            <div className="roman-glass p-3.5 rounded-xl border border-[#4d4353]/30 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-red-500/20 text-red-300"><IconPhoneCall size={18} /></span>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#988d9e] block">Polite Bot</span>
                <span className="text-xs font-bold text-red-400">Smiles & Wastes 2 Mins</span>
              </div>
            </div>

            <div className="roman-glass p-3.5 rounded-xl border border-[#3eb991]/40 flex items-center gap-3 shadow-[0_0_15px_rgba(62,185,145,0.15)]">
              <span className="p-2 rounded-lg bg-[#3eb991]/20 text-[#3eb991]"><IconBolt size={18} /></span>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#988d9e] block">Spade Sentry</span>
                <span className="text-xs font-bold text-[#82f8cc]">Terminates in 7 Seconds</span>
              </div>
            </div>

            <div className="roman-glass p-3.5 rounded-xl border border-[#20b2aa]/30 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[#20b2aa]/20 text-[#59dad1]"><IconShieldLock size={18} /></span>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#988d9e] block">Carrier Cost</span>
                <span className="text-xs font-bold text-[#59dad1]">$2.99/mo Wholesale</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo('pricing-section')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#3eb991] text-[#0d0e12] font-bold text-xs uppercase tracking-wider hover:bg-[#65dbb1] transition-all shadow-[0_0_20px_rgba(62,185,145,0.4)] cursor-pointer"
            >
              <IconPhoneCheck size={18} stroke={2.2} />
              <span>Claim Line ($2.99/mo)</span>
            </button>

            <button
              onClick={() => scrollTo('audio-section')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1a1b20] text-[#e3e2e7] border border-[#4d4353] hover:border-[#59dad1] text-xs font-semibold transition-all cursor-pointer"
            >
              <span>Hear Audio Demo</span>
            </button>

            <button
              onClick={handleNextPitch}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#1f1f24] text-[#cfc2d5] hover:text-[#e3e2e7] border border-[#4d4353] text-xs font-mono cursor-pointer"
            >
              <IconBolt size={15} className="text-[#dfb7ff]" />
              <span>Next Pitch</span>
            </button>
          </div>
        </div>

        {/* Visual: THE GAUNTLET vs THE PUSHOVER SIDE-BY-SIDE CALL DASHBOARD */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-[#6a0dad]/30 text-[#dfb7ff]">
                <IconWaveSine size={18} />
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5FFFA]">
                The Gauntlet: Live Intercept Cockpit
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#cfc2d5]">
              <span className="hidden sm:inline">Current Target Scenario:</span>
              <span className="px-2.5 py-1 rounded bg-[#1a1b20] border border-[#4d4353] text-[#59dad1] font-mono text-xs">
                {activePitch.caller}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT: The Polite Answering Bot */}
            <div className="roman-glass-danger rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-red-500/30">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-950/70 text-red-300 text-[11px] font-mono tracking-wider border-b border-l border-red-500/30 rounded-bl-lg uppercase font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                Pushover Voice Meter Running
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-300 border border-red-500/30">
                      <IconPhoneCall size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5FFFA] text-lg flex items-center gap-2">
                        The Smiling Pushover Bot
                        <span className="text-xs font-normal text-red-300/80 px-2 py-0.5 rounded bg-red-900/40 border border-red-500/20">
                          $39/mo SaaS Retainer
                        </span>
                      </h3>
                      <p className="text-xs text-[#cfc2d5]">Disposition: Endlessly Polite Note-Taker (You Know The One)</p>
                    </div>
                  </div>
                </div>

                {/* Pushover Live Telemetry Display */}
                <div className="bg-[#121317]/90 rounded-xl p-4 border border-red-500/20 mb-4">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#4d4353]/30">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#988d9e] block">Call Duration</span>
                      <span className="text-2xl font-mono font-bold text-red-400 flex items-center gap-2">
                        <IconClock size={20} />
                        {formatTime(pushoverSeconds)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#988d9e] block">Voice Minutes Wasted</span>
                      <span className="text-xl font-mono font-bold text-red-300">
                        ${pushoverCost}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs">
                      <span className="text-[#988d9e] block text-[10px] uppercase font-mono mb-1">Cold Pitcher (SDR):</span>
                      <p className="text-[#e3e2e7] bg-[#1a1b20] p-2.5 rounded-lg border border-[#4d4353]/40 italic">
                        {activePitch.pitch}
                      </p>
                    </div>

                    <div className="text-xs">
                      <span className="text-red-400 block text-[10px] uppercase font-mono mb-1">Pushover Reaction (Passive Listening):</span>
                      <p className="text-red-200 bg-red-950/30 p-2.5 rounded-lg border border-red-500/25">
                        {activePitch.pushoverReaction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome Footer */}
              <div className="pt-3 border-t border-red-500/20 flex items-center justify-between text-xs text-red-300">
                <span className="flex items-center gap-1.5">
                  <IconAlertTriangle size={15} />
                  Result: Transcribed sales brochure sent to your inbox
                </span>
                <span className="font-mono text-red-400 font-bold">10-Call Limit Burned</span>
              </div>
            </div>

            {/* RIGHT: Spade Sentry The Gauntlet */}
            <div className="roman-glass-elevated rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border-2 border-[#3eb991]/40 shadow-[0_0_30px_rgba(62,185,145,0.15)]">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00523c]/90 text-[#82f8cc] text-[11px] font-mono tracking-wider border-b border-l border-[#3eb991]/40 rounded-bl-lg uppercase font-semibold flex items-center gap-1.5">
                <IconShieldLock size={14} />
                The Gauntlet Intercepted
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00a8a0]/20 flex items-center justify-center text-[#59dad1] border border-[#20b2aa]/40">
                      <IconPhoneOff size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5FFFA] text-lg flex items-center gap-2">
                        The Spade Sentry
                        <span className="text-xs font-normal text-[#82f8cc] px-2 py-0.5 rounded bg-[#00523c]/40 border border-[#3eb991]/30">
                          $2.99/mo Carrier Line + Wholesale 30%
                        </span>
                      </h3>
                      <p className="text-xs text-[#cfc2d5]">Disposition: Ruthless Autonomous Gatekeeper</p>
                    </div>
                  </div>
                </div>

                {/* Spade Live Telemetry Display */}
                <div className="bg-[#12141A]/95 rounded-xl p-4 border border-[#3eb991]/30 mb-4">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#4d4353]/30">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#988d9e] block">Time to Termination</span>
                      <span className="text-2xl font-mono font-bold text-[#3eb991] flex items-center gap-2">
                        <IconBolt size={20} />
                        00:0{spadeSeconds}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#988d9e] block">Total Wholesale Cost</span>
                      <span className="text-xl font-mono font-bold text-[#59dad1]">
                        ${spadeCost}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs">
                      <span className="text-[#988d9e] block text-[10px] uppercase font-mono mb-1">Cold Pitcher (SDR):</span>
                      <p className="text-[#e3e2e7] bg-[#1a1b20] p-2.5 rounded-lg border border-[#4d4353]/40 italic">
                        {activePitch.pitch}
                      </p>
                    </div>

                    <div className="text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#3eb991] text-[10px] uppercase font-mono">
                          Spade Response (Sub-100ms Neural Voice):
                        </span>
                        <div className="flex items-center gap-0.5">
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-1"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-2"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-3"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-4"></span>
                        </div>
                      </div>
                      <p className="text-[#F5FFFA] bg-[#00523c]/30 p-2.5 rounded-lg border border-[#3eb991]/40 font-medium">
                        {activePitch.spadeReaction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spade Outcome Footer */}
              <div className="pt-3 border-t border-[#3eb991]/30 flex flex-wrap items-center justify-between text-xs gap-2">
                <span className="flex items-center gap-1.5 text-[#82f8cc]">
                  <IconCheck size={16} className="text-[#3eb991]" />
                  Call terminated. Added to Global Burn Book network-wide.
                </span>
                <span className="font-mono text-[#59dad1] font-bold">Time Saved: {formatTime(pushoverSeconds - spadeSeconds)}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function IconPhoneCheck(props: { size?: number; stroke?: number; className?: string }) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={props.stroke || 2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      <path d="M15 6l2 2l4 -4" />
    </svg>
  );
}

function IconVolume(props: { size?: number; stroke?: number; className?: string }) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={props.stroke || 2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 8a5 5 0 0 1 0 8" />
      <path d="M17.7 5a9 9 0 0 1 0 14" />
      <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    </svg>
  );
}
