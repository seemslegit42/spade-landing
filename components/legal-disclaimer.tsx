import React, { useState } from 'react';
import { IconScale, IconInfoCircle, IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function LegalDisclaimer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-[#12141A]/95 backdrop-blur-md border-b border-[#4d4353]/40 py-2.5 px-4 text-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-[#cfc2d5]">
          <span className="inline-flex items-center justify-center p-1 rounded bg-[#20B2AA]/15 text-[#59dad1]">
            <IconScale size={16} stroke={1.75} />
          </span>
          <p className="leading-snug">
            <strong className="text-[#e3e2e7] font-semibold tracking-wide uppercase text-[11px] mr-1">
              Satirical Parody & Independent Utility Notice:
            </strong>
            The Spade Sentry is an independent operational utility. It is not affiliated with, authorized, endorsed by, or connected to any venture-backed VoIP apps, gullible "polite AI" receptionists, or legacy SaaS answering services.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] text-[#59dad1] hover:text-[#82f8cc] flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Hide Parody Protections' : 'Parody & First Amendment Notice'}</span>
            {expanded ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#4d4353]/30 text-[11px] text-[#988d9e] grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-start gap-1.5">
            <IconInfoCircle size={14} className="text-[#59dad1] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#cfc2d5]">1. Protected Satire:</strong> First Amendment protected critique of conversational answering personas and traditional SaaS minute pools.
            </span>
          </div>
          <div className="flex items-start gap-1.5">
            <IconInfoCircle size={14} className="text-[#59dad1] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#cfc2d5]">2. No Trade Dress Imitation:</strong> All personas depicted are archetypal caricatures of corporate push-over AI assistants.
            </span>
          </div>
          <div className="flex items-start gap-1.5">
            <IconInfoCircle size={14} className="text-[#59dad1] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#cfc2d5]">3. Independent Architecture:</strong> Carrier lines and neural pipelines operate autonomously on neutral wholesale infrastructure.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
