'use client';

import { useState } from 'react';
import { ShieldCheck, Lock, Trash2, EyeOff, CheckCircle } from 'lucide-react';
import { localDb } from '@/lib/store/localDb';
import { useSound } from '@/hooks/useSound';

export default function PrivacyPage() {
  const [cleared, setCleared] = useState(false);
  const { playConfirm } = useSound();

  const handleClearMyData = () => {
    playConfirm();
    if (typeof window !== 'undefined') {
      const sid = localStorage.getItem('avengers_session_id');
      if (sid) {
        localDb.deleteVisitorSession(sid);
      }
      localStorage.removeItem('avengers_session_id');
      localStorage.removeItem('avengers_display_name');
      localStorage.removeItem('avengers_favorites');
      localStorage.removeItem('avengers_sound_enabled');
      localStorage.removeItem('avengers_spoilers_enabled');
      sessionStorage.removeItem('avengers_entered');
      setCleared(true);
      setTimeout(() => setCleared(false), 4000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PRIVACY PROTOCOL &amp; DATA SECURITY</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          PRIVACY &amp; VISITOR NOTICE
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          How the Avengers Archive collects, hashes, and protects visitor intelligence in compliance with privacy-first standards.
        </p>
      </div>

      <div className="space-y-8 font-sans text-sm text-zinc-300">
        {/* Section 1 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-3">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-marvel-arc" />
            1. Zero Raw IP Exposure &amp; Cryptographic Hashing
          </h2>
          <p className="leading-relaxed text-zinc-400">
            The Avengers Archive takes user privacy seriously. We do <strong>NOT</strong> log, store,
            or display raw IP addresses. Any network identifiers used for session deduplication are
            immediately converted via a one-way cryptographic hash.
          </p>
          <p className="leading-relaxed text-zinc-400">
            Visitors are assigned an anonymous identifier (e.g., <em>&ldquo;Anonymous Visitor #042&rdquo;</em>)
            unless you voluntarily provide a custom display name in your profile settings.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-3">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-marvel-gold" />
            2. What Information Is Collected
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>
              <strong>Session Metadata:</strong> Anonymous session identifier, device category (desktop/mobile/tablet), and browser family.
            </li>
            <li>
              <strong>Archive Exploration Metrics:</strong> Visited dossier pages, favorite heroes bookmarked, and time spent exploring records.
            </li>
            <li>
              <strong>Heartbeat Status:</strong> Lightweight pulse every 30 seconds to power the live &ldquo;Currently in Archive&rdquo; admin monitor.
            </li>
            <li>
              <strong>Zero Third-Party Advertising Trackers:</strong> No commercial ad networks, third-party pixel trackers, or cross-site tracking cookies are loaded.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-3">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-marvel-red" />
            3. Data Retention &amp; Automatic 90-Day Purge
          </h2>
          <p className="leading-relaxed text-zinc-400">
            Anonymous visitor tracking sessions are automatically scheduled for permanent deletion
            after 90 days of inactivity. Only accounts with saved custom squads or persistent
            favorites retain their local operational state.
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold font-mono text-xs">ERASE LOCAL BROWSING RECORDS</div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Purge your current device&apos;s session ID, saved favorites, and local archive history.
              </div>
            </div>

            <button
              type="button"
              onClick={handleClearMyData}
              className="px-5 py-2.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-300 hover:text-white border border-red-500/40 font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              <span>{cleared ? 'DATA PURGED!' : 'PURGE MY DATA'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
