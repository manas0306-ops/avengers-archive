'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { withBase } from '@/lib/utils';

function HeroRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id') || 'iron-man';
    const targetUrl = withBase(`/#${id}`);
    window.location.replace(targetUrl);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono text-sm text-zinc-400 gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-marvel-arc border-t-transparent animate-spin" />
      <span>REDIRECTING TO HERO DOSSIER...</span>
    </div>
  );
}

export default function HeroesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HeroRedirect />
    </Suspense>
  );
}
