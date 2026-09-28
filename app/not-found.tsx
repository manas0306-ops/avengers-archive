import Link from 'next/link';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="mb-6">
        <ArcReactor size="lg" interactive={false} />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-4">
        <ShieldAlert className="w-3.5 h-3.5" />
        <span>ERROR CODE: 404 • RECORD DISINTEGRATED</span>
      </div>

      <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
        THANOS HAS DESTROYED THIS PAGE
      </h1>

      <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto mb-8">
        The coordinates you entered do not exist on Earth-616, or this reality was wiped out during the Blip.
      </p>

      <Link
        href="/"
        className="px-8 py-3.5 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(226,54,54,0.5)]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO THE ARCHIVE</span>
      </Link>
    </div>
  );
}
