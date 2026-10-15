import React, { useState } from 'react';
import {
  IconCalculator,
  IconCheck,
  IconReceipt2,
  IconBolt
} from '@tabler/icons-react';

export default function PricingDemolition() {
  const [spamCallsCount, setSpamCallsCount] = useState<number>(65);

  // Competitor calculation:
  // Starts with ~10 free calls bait.
  // After 10 calls, mandatory $39/mo plan.
  // Average cold call duration on competitor bot: 110 seconds (~1.83 minutes) @ $0.18/min overage = ~$0.33/call.
  const competitorBase = 39.0;
  const competitorOverageCalls = Math.max(0, spamCallsCount - 10);
  const competitorTotalCost = (competitorBase + competitorOverageCalls * 0.33).toFixed(2);
  const competitorHoursWasted = ((spamCallsCount * 110) / 3600).toFixed(1);

  // Spade calculation:
  // Flat $2.99 Carrier line fee.
  // Terminated in 7 seconds @ wholesale rate $0.0008 + 30% = $0.00104 per call.
  const spadeBase = 2.99;
  const spadeUsage = spamCallsCount * 0.00104;
  const spadeTotalCost = (spadeBase + spadeUsage).toFixed(2);
  const spadeHoursWasted = ((spamCallsCount * 7) / 3600).toFixed(2);

  const monthlySavings = (parseFloat(competitorTotalCost) - parseFloat(spadeTotalCost)).toFixed(2);
  const annualSavings = (parseFloat(monthlySavings) * 12).toFixed(2);

  return (
    <section id="pricing-section" className="py-20 px-4 md:px-8 bg-[#121317] relative border-b border-[#4d4353]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3eb991]/15 border border-[#3eb991]/30 text-[#3eb991] text-xs font-mono uppercase tracking-wider mb-4">
            <IconReceipt2 size={16} />
            Radical Wholesale Transparency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5FFFA] tracking-tight mb-3">
            The "$39/mo SaaS Trap" vs. Wholesale $2.99
          </h2>
          <p className="text-sm text-[#cfc2d5] font-mono">
            Zero enterprise markups. Direct carrier cost plus 30%.
          </p>
        </div>

        {/* Side-by-side Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Competitor's Trap */}
          <div className="roman-glass-danger rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-red-500/30">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-red-500/20">
                <span className="text-xs font-mono uppercase font-bold text-red-300">
                  Their Playbook (Traditional $39/mo SaaS Apps)
                </span>
                <span className="px-2.5 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
                  $39+/mo Minimum
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5FFFA] mb-4">
                The “Free 10 Calls” Shell Game
              </h3>

              <div className="space-y-4 text-sm text-[#cfc2d5]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    <strong className="text-[#e3e2e7]">Give you ~10 free calls a month.</strong> It sounds generous on their landing page until reality hits your phone line.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <p>
                    <strong className="text-[#e3e2e7]">Burn all 10 calls by Tuesday afternoon</strong> on auto-warranty robocalls and eager SDRs pitching CRM platforms.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <p>
                    <strong className="text-[#e3e2e7]">Slap you onto a recurring $39+/mo retainer</strong> with locked-in minute pools that bill you while the bot politely transcribes sales pitches.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-500/20 text-xs text-red-300/80 italic">
              Result: You pay a premium SaaS subscription to subsidize sales pitches you never asked for.
            </div>
          </div>

          {/* Spade's Radical Wholesale */}
          <div className="roman-glass-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-[#3eb991]/50 shadow-[0_0_30px_rgba(62,185,145,0.18)]">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#3eb991]/30">
                <span className="text-xs font-mono uppercase font-bold text-[#82f8cc]">
                  The Spade Sentry Playbook
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#00523c]/50 border border-[#3eb991]/40 text-[#82f8cc] text-xs font-mono font-bold">
                  $2.99/mo Flat Carrier Line
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5FFFA] mb-4">
                Radical Wholesale + 30% Tip
              </h3>

              <div className="space-y-4 text-sm text-[#cfc2d5]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3eb991]/20 text-[#3eb991] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck size={14} />
                  </div>
                  <p>
                    <strong className="text-[#F5FFFA]">$2.99 / month flat.</strong> That covers the actual wholesale carrier phone line. That’s it. No arbitrary software markup.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3eb991]/20 text-[#3eb991] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck size={14} />
                  </div>
                  <p>
                    <strong className="text-[#F5FFFA]">Wholesale Usage + 30%.</strong> Telephony, speech recognition, and neural voice synthesis at direct cloud cost plus a transparent 30% operator fee.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3eb991]/20 text-[#3eb991] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck size={14} />
                  </div>
                  <p>
                    <strong className="text-[#F5FFFA]">Spade dismisses spam in 7 seconds,</strong> meaning unsolicited callers cost you a fraction of a penny before getting booted forever.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3eb991]/30 text-xs text-[#82f8cc] italic">
              “We don’t give you 10 free calls so we can upsell you on an answering service. We charge you what it actually costs, make our 30%, and let you get back to work.”
            </div>
          </div>

        </div>

        {/* INTERACTIVE DYNAMIC COST CALCULATOR */}
        <div className="roman-glass rounded-3xl p-6 md:p-10 border border-[#59dad1]/30 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20b2aa]/15 border border-[#20b2aa]/40 text-[#59dad1] text-xs font-semibold uppercase tracking-wider mb-2">
              <IconCalculator size={14} />
              Interactive Telephony Audit
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#F5FFFA] mb-2">
              Calculate Your Real-World Cold Call Tax
            </h3>
            <p className="text-xs sm:text-sm text-[#cfc2d5]">
              Adjust the slider to see how much the polite answering bots cost compared to Spade’s instant 7-second termination.
            </p>
          </div>

          {/* Slider */}
          <div className="bg-[#12141A] rounded-2xl p-6 border border-[#4d4353]/40 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <label htmlFor="spam-calls-range" className="text-xs font-mono uppercase text-[#988d9e]">
                Inbound Unsolicited / Pitch Calls per Month:
              </label>
              <span className="text-2xl font-bold font-mono text-[#59dad1]">
                {spamCallsCount} calls
              </span>
            </div>

            <input
              id="spam-calls-range"
              type="range"
              min="10"
              max="250"
              step="5"
              value={spamCallsCount}
              onChange={(e) => setSpamCallsCount(parseInt(e.target.value))}
              aria-label="Inbound unsolicited pitch calls per month"
              className="w-full h-3 bg-[#1a1b20] rounded-lg appearance-none cursor-pointer accent-[#59dad1] focus:outline-none"
            />

            <div className="flex justify-between text-[11px] text-[#988d9e] mt-2 font-mono">
              <span>10 calls (Solo shop)</span>
              <span>100 calls (Growing agency)</span>
              <span>250 calls (Heavy B2B inbound)</span>
            </div>
          </div>

          {/* Comparative Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="bg-[#1a1b20] p-4 rounded-xl border border-red-500/25">
              <span className="text-[10px] font-mono uppercase text-red-300 block mb-1">
                Typical SaaS App Bill
              </span>
              <span className="text-2xl font-bold font-mono text-red-400">
                ${competitorTotalCost}
              </span>
              <span className="text-[11px] text-[#988d9e] block mt-1">
                Incl. $39 base + overages
              </span>
            </div>

            <div className="bg-[#1a1b20] p-4 rounded-xl border border-[#3eb991]/30">
              <span className="text-[10px] font-mono uppercase text-[#3eb991] block mb-1">
                Spade Sentry Monthly
              </span>
              <span className="text-2xl font-bold font-mono text-[#82f8cc]">
                ${spadeTotalCost}
              </span>
              <span className="text-[11px] text-[#988d9e] block mt-1">
                $2.99 carrier line + wholesale
              </span>
            </div>

            <div className="bg-[#1a1b20] p-4 rounded-xl border border-[#dfb7ff]/30">
              <span className="text-[10px] font-mono uppercase text-[#dfb7ff] block mb-1">
                Monthly Net Savings
              </span>
              <span className="text-2xl font-bold font-mono text-[#dfb7ff]">
                ${monthlySavings}
              </span>
              <span className="text-[11px] text-[#988d9e] block mt-1">
                ${annualSavings}/yr kept
              </span>
            </div>

            <div className="bg-[#1a1b20] p-4 rounded-xl border border-[#20b2aa]/30">
              <span className="text-[10px] font-mono uppercase text-[#59dad1] block mb-1">
                Pitch Hours Eliminated
              </span>
              <span className="text-2xl font-bold font-mono text-[#59dad1]">
                {competitorHoursWasted} hrs
              </span>
              <span className="text-[11px] text-[#988d9e] block mt-1">
                Spade takes only {spadeHoursWasted}h total
              </span>
            </div>

          </div>

          {/* Action Trigger */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('demo-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#3eb991] text-[#0d0e12] font-semibold text-sm hover:bg-[#65dbb1] transition-all shadow-[0_0_20px_rgba(62,185,145,0.4)] cursor-pointer"
            >
              <IconBolt size={18} />
              <span>Claim Your Line at Wholesale: $2.99/mo</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
