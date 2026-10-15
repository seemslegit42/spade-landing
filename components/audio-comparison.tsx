import React, { useState, useEffect } from 'react';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconShare,
  IconAdjustmentsHorizontal,
  IconSparkles,
  IconCheck,
  IconWaveSine,
  IconVideo,
  IconDeviceMobile
} from '@tabler/icons-react';

export default function AudioComparison() {
  // Audio Matrix player state
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  // Snark Dial state (1 to 10)
  const [snarkLevel, setSnarkLevel] = useState<number>(10);
  const [snarkPlaying, setSnarkPlaying] = useState(false);

  // Export Viral Clip modal state
  const [exportedPlatform, setExportedPlatform] = useState<string | null>(null);

  const scenarios = [
    {
      id: 'sdr-crm',
      title: 'Cold SDR Pitching CRM',
      pushover: {
        duration: '1:45',
        seconds: 105,
        transcript: '“Oh, that sounds very interesting! The business owner is out, but may I take your email and phone number so they can reach back out? I will type up a detailed 3-paragraph summary!”',
        disposition: 'Polite Pushover (Billed for 2 mins)'
      },
      spade: {
        duration: '0:08',
        seconds: 8,
        transcript: '“A synergy platform? Wow. Riveting. Hold on, let me transfer you to... nobody. Buh-bye.”',
        disposition: 'Call Terminated instantly (Billed 8s)'
      }
    },
    {
      id: 'robocall-insurance',
      title: 'Robocaller / Health Insurance Bot',
      pushover: {
        duration: '2:10',
        seconds: 130,
        transcript: '“I didn\'t quite catch that. Could you repeat which policy you are referring to for our records? Is this for group employee coverage or supplemental dental?”',
        disposition: 'Engaged the bot for 130 seconds'
      },
      spade: {
        duration: '0:05',
        seconds: 5,
        transcript: '“And you are...? Oh, a robot. Cute. Added to the Burn Book.”',
        disposition: 'Blocked network-wide in 5s'
      }
    },
    {
      id: 'real-client',
      title: 'Legitimate Client / Family Member',
      pushover: {
        duration: '1:15',
        seconds: 75,
        transcript: '“Please state the reason for your call, your company name, callback number, and your availability so I can send an appointment scheduling link.”',
        disposition: 'Friction-filled intake interrogation'
      },
      spade: {
        duration: '0:02',
        seconds: 2,
        transcript: '“Safe-List verified. Patching directly to your personal cell now.”',
        disposition: 'Direct cell pass-through in 2s'
      }
    }
  ];

  // Snark level configurations
  const snarkResponses: Record<number, { title: string; quote: string; crisisScore: string }> = {
    1: {
      title: 'Level 1: Sovereign Professional',
      quote: '“We do not review unsolicited commercial proposals by phone. Have a wonderful day.”',
      crisisScore: '0% — Standard corporate brush-off.'
    },
    3: {
      title: 'Level 3: Bored Sarcasm',
      quote: '“Yeah... no. If we wanted that, we would have searched for it like normal people. Click.”',
      crisisScore: '25% — SDR checks their notes confused.'
    },
    5: {
      title: 'Level 5: Deadpan Deflector',
      quote: '“We haven’t bought anything over the phone since 2004. You’re on speaker in an empty conference room. Buh-bye.”',
      crisisScore: '50% — SDR mutters under their breath.'
    },
    7: {
      title: 'Level 7: The Hollywood Cadence',
      quote: '“Oh great, another synergy disruptor. Look, we’re washing our hair for the next six months, maybe call back in the next century? Click.”',
      crisisScore: '75% — SDR re-reads their cold calling script in defeat.'
    },
    10: {
      title: 'Level 10: Existential Crisis Mode',
      quote: '“I’m going to let you finish, but ask yourself: did you honestly go through four years of college just to read a script about B2B merchant cash advances to someone who already hung up 4 seconds ago? Think about that on the drive home.”',
      crisisScore: '99% — SDR reconsiders their entire career path live on audio.'
    }
  };

  const currentSnarkData =
    snarkResponses[snarkLevel] ||
    (snarkLevel > 7 ? snarkResponses[10] : snarkLevel > 4 ? snarkResponses[7] : snarkLevel > 2 ? snarkResponses[5] : snarkResponses[3]);

  // Audio simulation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (playingId || snarkPlaying) {
      timer = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setPlayingId(null);
            setSnarkPlaying(false);
            return 0;
          }
          return prev + 10;
        });
      }, 300);
    } else {
      setPlaybackProgress(0);
    }
    return () => clearInterval(timer);
  }, [playingId, snarkPlaying]);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
      setPlaybackProgress(0);
    } else {
      setSnarkPlaying(false);
      setPlayingId(id);
      setPlaybackProgress(0);
    }
  };

  const toggleSnarkPlay = () => {
    if (snarkPlaying) {
      setSnarkPlaying(false);
    } else {
      setPlayingId(null);
      setSnarkPlaying(true);
      setPlaybackProgress(0);
    }
  };

  const handleExport = (platform: string) => {
    setExportedPlatform(platform);
    setTimeout(() => {
      setExportedPlatform(null);
    }, 3500);
  };

  return (
    <section id="audio-section" className="py-20 px-4 md:px-8 bg-[#121317] relative border-b border-[#4d4353]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20b2aa]/15 border border-[#20b2aa]/40 text-[#59dad1] text-xs font-mono uppercase tracking-wider mb-4">
            <IconWaveSine size={15} />
            Comparative Voice Telemetry
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5FFFA] tracking-tight mb-3">
            Polite Bot vs Spade Sentry
          </h2>
          <p className="text-sm text-[#cfc2d5] font-mono">
            Direct comparison: 2-minute message transcription vs 7-second call termination.
          </p>
        </div>

        {/* Audio Matrix Cards */}
        <div className="space-y-6 mb-20">
          {scenarios.map((item) => {
            const isPlayingPushover = playingId === `${item.id}-pushover`;
            const isPlayingSpade = playingId === `${item.id}-spade`;

            return (
              <div
                key={item.id}
                className="roman-glass rounded-2xl p-6 border border-[#4d4353]/30 hover:border-[#20b2aa]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#4d4353]/20">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#20b2aa]/20 text-[#59dad1] flex items-center justify-center font-bold text-sm">
                      VS
                    </span>
                    <h3 className="text-xl font-bold text-[#F5FFFA]">{item.title}</h3>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded bg-[#1a1b20] border border-[#4d4353]/50 text-[#cfc2d5]">
                    Spade saves {parseInt(item.pushover.duration.split(':')[0]) * 60 + parseInt(item.pushover.duration.split(':')[1]) - (parseInt(item.spade.duration.split(':')[0]) * 60 + parseInt(item.spade.duration.split(':')[1]))}s billable time
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Pushover Audio Player Box */}
                  <div className="bg-[#1a1b20]/90 rounded-xl p-5 border border-red-500/20 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        The Polite Pushover Approach
                      </span>
                      <span className="text-xs font-mono text-red-300 bg-red-950/50 px-2 py-0.5 rounded border border-red-500/30">
                        Duration: {item.pushover.duration}
                      </span>
                    </div>

                    <p className="text-sm text-[#e3e2e7] italic mb-4 min-h-[56px]">
                      {item.pushover.transcript}
                    </p>

                    <div className="pt-3 border-t border-[#4d4353]/30 flex items-center justify-between">
                      <button
                        onClick={() => togglePlay(`${item.id}-pushover`)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/60 text-red-200 border border-red-500/40 text-xs font-medium transition-colors cursor-pointer"
                      >
                        {isPlayingPushover ? <IconPlayerPause size={14} /> : <IconPlayerPlay size={14} />}
                        <span>{isPlayingPushover ? 'Pause Audio' : `Play Pushover (${item.pushover.duration})`}</span>
                      </button>

                      {isPlayingPushover && (
                        <div className="flex items-center gap-1">
                          <span className="w-1 bg-red-400 rounded-full animate-wave-1"></span>
                          <span className="w-1 bg-red-400 rounded-full animate-wave-3"></span>
                          <span className="w-1 bg-red-400 rounded-full animate-wave-2"></span>
                          <span className="w-1 bg-red-400 rounded-full animate-wave-4"></span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spade Sentry Audio Player Box */}
                  <div className="bg-[#12141A] rounded-xl p-5 border border-[#3eb991]/40 relative shadow-[0_0_20px_rgba(62,185,145,0.08)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#82f8cc] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#3eb991]"></span>
                        Spade Sentry Approach
                      </span>
                      <span className="text-xs font-mono text-[#82f8cc] bg-[#00523c]/50 px-2 py-0.5 rounded border border-[#3eb991]/40">
                        Duration: {item.spade.duration}
                      </span>
                    </div>

                    <p className="text-sm text-[#F5FFFA] font-medium mb-4 min-h-[56px]">
                      {item.spade.transcript}
                    </p>

                    <div className="pt-3 border-t border-[#3eb991]/20 flex items-center justify-between">
                      <button
                        onClick={() => togglePlay(`${item.id}-spade`)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#3eb991] hover:bg-[#65dbb1] text-[#0d0e12] text-xs font-semibold transition-colors cursor-pointer shadow-[0_0_12px_rgba(62,185,145,0.35)]"
                      >
                        {isPlayingSpade ? <IconPlayerPause size={14} /> : <IconPlayerPlay size={14} />}
                        <span>{isPlayingSpade ? 'Pause Audio' : `Play Spade (${item.spade.duration})`}</span>
                      </button>

                      {isPlayingSpade && (
                        <div className="flex items-center gap-1">
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-1"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-2"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-3"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-4"></span>
                          <span className="w-1 bg-[#3eb991] rounded-full animate-wave-5"></span>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* FEATURE: "THE HIGHLIGHT REEL" & "THE SNARK DIAL" */}
        <div className="roman-glass-elevated rounded-3xl p-6 md:p-10 border border-[#dfb7ff]/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#6a0dad]/20 via-[#20b2aa]/10 to-transparent pointer-events-none filter blur-3xl"></div>

          <div className="max-w-4xl mx-auto">
            
            {/* Reel Header */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb7ff]/15 border border-[#dfb7ff]/30 text-[#dfb7ff] text-xs font-semibold uppercase tracking-wider mb-3">
                <IconSparkles size={14} />
                Organic Distribution Moat
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#F5FFFA] mb-3">
                The Highlight Reel & The Snark Dial
              </h3>
              <p className="text-sm md:text-base text-[#cfc2d5] max-w-2xl mx-auto">
                Adjust the Snark Dial from Level 1 to Level 10, watch sales reps experience an existential crisis, and export clips directly to short-form feeds.
              </p>
            </div>

            {/* The Snark Dial Interactive Slider */}
            <div className="bg-[#12141A] rounded-2xl p-6 border border-[#4d4353]/40 mb-8 shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <IconAdjustmentsHorizontal size={20} className="text-[#3eb991]" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#e3e2e7]">
                    The Snark Dial:
                  </span>
                  <span className="text-lg font-bold text-[#3eb991] font-mono">
                    Level {snarkLevel} / 10
                  </span>
                </div>

                <span className="text-xs font-mono text-[#59dad1] bg-[#00523c]/40 px-3 py-1 rounded-full border border-[#3eb991]/30">
                  {currentSnarkData.title}
                </span>
              </div>

              {/* Slider Input */}
              <div className="mb-6">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={snarkLevel}
                  onChange={(e) => {
                    setSnarkLevel(parseInt(e.target.value));
                    setSnarkPlaying(false);
                  }}
                  aria-label="Snark Dial Level"
                  className="w-full h-3 bg-[#1a1b20] rounded-lg appearance-none cursor-pointer accent-[#3eb991] focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-[#988d9e] mt-2 font-mono">
                  <span>Level 1: Strict Corporate</span>
                  <span className="hidden sm:inline">Level 5: Deadpan Deflection</span>
                  <span className="text-[#3eb991] font-bold">Level 10: Existential Crisis</span>
                </div>
              </div>

              {/* Quote & Audio Demonstration Box */}
              <div className="p-4 rounded-xl bg-[#1a1b20] border border-[#3eb991]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-[#988d9e] uppercase font-mono tracking-wider">
                    Spade Telephony Audio Preview (Sub-100ms Neural Speech Stack):
                  </span>
                  <span className="text-xs text-[#59dad1] font-mono">
                    Telemarketer Crisis Meter: {currentSnarkData.crisisScore}
                  </span>
                </div>

                <p className="text-base font-medium text-[#F5FFFA] italic mb-4">
                  {currentSnarkData.quote}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#4d4353]/30">
                  <button
                    onClick={toggleSnarkPlay}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3eb991] text-[#0d0e12] font-semibold text-xs hover:bg-[#65dbb1] transition-colors cursor-pointer"
                  >
                    {snarkPlaying ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />}
                    <span>{snarkPlaying ? 'Pause Voice Simulation' : 'Audition Level ' + snarkLevel}</span>
                  </button>

                  {snarkPlaying && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#3eb991] font-mono mr-2">Streaming Audio</span>
                      <span className="w-1.5 bg-[#3eb991] rounded-full animate-wave-1"></span>
                      <span className="w-1.5 bg-[#3eb991] rounded-full animate-wave-3"></span>
                      <span className="w-1.5 bg-[#3eb991] rounded-full animate-wave-2"></span>
                      <span className="w-1.5 bg-[#3eb991] rounded-full animate-wave-5"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Opt-In Export directly to Short-Form Video Channels */}
            <div className="bg-[#121317] rounded-2xl p-6 border border-[#dfb7ff]/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#F5FFFA] flex items-center gap-2 mb-1">
                    <IconShare size={18} className="text-[#dfb7ff]" />
                    Export to Viral Short-Form Video
                  </h4>
                  <p className="text-xs text-[#cfc2d5] mb-2">
                    Every exported clip includes automated closed-captions and the prominent satirical watermark:
                  </p>
                  <div className="inline-block px-3 py-1 rounded bg-[#0d0e12] border border-[#20b2aa]/40 text-[#59dad1] text-xs font-mono">
                    Watermark: "Protected by Spade Sentry: $2.99/mo. Buh-bye, Pushovers."
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleExport('The Clock App')}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#e3e2e7] text-xs font-medium transition-colors cursor-pointer"
                  >
                    <IconDeviceMobile size={16} />
                    <span>The Clock App Feed</span>
                  </button>

                  <button
                    onClick={() => handleExport('Square App Reels')}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#e3e2e7] text-xs font-medium transition-colors cursor-pointer"
                  >
                    <IconVideo size={16} />
                    <span>The Visual Reels</span>
                  </button>

                  <button
                    onClick={() => handleExport('Red Video Shorts')}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#1a1b20] hover:bg-[#292a2e] border border-[#4d4353] text-[#e3e2e7] text-xs font-medium transition-colors cursor-pointer"
                  >
                    <IconDeviceMobile size={16} />
                    <span>Vertical Video Shorts</span>
                  </button>
                </div>
              </div>

              {exportedPlatform && (
                <div className="mt-4 p-3 rounded-lg bg-[#00523c]/40 border border-[#3eb991]/50 text-xs text-[#82f8cc] flex items-center gap-2 animate-fadeIn">
                  <IconCheck size={16} className="text-[#3eb991]" />
                  <span>
                    Successfully rendered 9:16 audio video reel for {exportedPlatform} with watermark: "Protected by Spade Sentry: $2.99/mo. Buh-bye, Pushovers."
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
