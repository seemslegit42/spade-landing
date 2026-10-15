import React from 'react';
import {
  IconQuote,
  IconStar,
  IconShieldCheck,
  IconFlame,
  IconSparkles
} from '@tabler/icons-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        'Prior to Spade, my previous AI receptionist spent four hours a week politely collecting brochures from SaaS SDRs. Spade told three different venture associates I was on an indefinite spirit quest in the Andes. 10/10.',
      author: 'Marcus T. (Definitely a Real Person™)',
      role: 'Bootstrapped Founder, Logistics Platform (Whose Photo Is Definitely Stock)',
      saved: 'Saved 16 hours of listening / month',
      badge: 'Verified Sentinel Operator (In Our Dreams)'
    },
    {
      quote:
        'That overly polite AI gave my cold-callers the impression their concerns were being noted. Spade gave them an existential crisis. My calendar has never been clearer, and my blood pressure has never been lower.',
      author: 'Elena R. (A Totally Legitimate Human)',
      role: 'Independent Managing Consultant (Caffeine-Powered)',
      saved: '41 Cold Calls Neutralized in 7s',
      badge: 'Verified Sentinel Operator (Legally Fictional)'
    },
    {
      quote:
        'The best $2.99 on my corporate card. An offshore outreach agency called my DID 4 times in a single day. On the fourth call, Spade read their caller ID back to them and asked if their mother knew what they did for a living.',
      author: 'David K. (Fabricated by Copywriters at 3 AM)',
      role: 'Owner, Precision Commercial CNC (Spiritually Accurate)',
      saved: 'Zero interruptions in 3 months',
      badge: 'Verified Sentinel Operator (Completely Made Up)'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0D0E12] relative border-b border-[#4d4353]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfb7ff]/15 border border-[#dfb7ff]/30 text-[#dfb7ff] text-xs font-mono uppercase tracking-wider mb-4">
            <IconSparkles size={15} />
            Satirical Social Proof
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5FFFA] tracking-tight mb-3">
            What Builders Say (We Checked With Our Lawyers)
          </h2>
          <p className="text-sm text-[#cfc2d5] font-mono">
            Spiritually 100% factual. Legally fictional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="roman-glass rounded-2xl p-6 border border-[#4d4353]/30 hover:border-[#3eb991]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#4d4353]/20">
                  <div className="flex items-center gap-1 text-[#3eb991]">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} size={14} fill="#3eb991" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#59dad1] flex items-center gap-1">
                    <IconShieldCheck size={12} />
                    {t.badge}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#e3e2e7] leading-relaxed mb-6 italic">
                  “{t.quote}”
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#4d4353]/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5FFFA]">{t.author}</h4>
                    <p className="text-xs text-[#988d9e]">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 px-2.5 py-1 rounded bg-[#1a1b20] border border-[#3eb991]/30 text-[11px] text-[#82f8cc] font-mono flex items-center gap-1.5">
                  <IconFlame size={12} className="text-[#3eb991]" />
                  {t.saved}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Launch Manifesto Box */}
        <div className="roman-glass-elevated rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-[#dfb7ff]/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6a0dad]/30 text-[#dfb7ff] flex items-center justify-center shrink-0 border border-[#dfb7ff]/30">
              <IconQuote size={24} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#dfb7ff] font-semibold tracking-wider block mb-1">
                Founder Manifesto & Meta-Honesty Disclosure
              </span>
              <h3 className="text-xl font-bold text-[#F5FFFA] mb-3">
                Why we’re charging $2.99 instead of baiting you with “10 free calls.”
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc2d5] leading-relaxed mb-3">
                Venture-backed answering apps want to be your business’s friendly digital face. That’s fine if your dream is paying an AI to smile while cold callers pitch you SEO services.
              </p>
              <p className="text-xs sm:text-sm text-[#cfc2d5] leading-relaxed mb-4">
                We built <strong>The Spade Sentry</strong> for people who view unsolicited phone calls as an operational tax. Base fee: <strong>$2.99/mo</strong> (wholesale carrier line cost). Usage: <strong>Pure wholesale + 30%</strong>. Behavior: <strong>Ruthless gatekeeping</strong>.
              </p>
              <p className="text-xs text-[#82f8cc] font-mono">
                Set your Snark Dial. Tell the cold-callers you're busy until 2030. Buh-bye.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
