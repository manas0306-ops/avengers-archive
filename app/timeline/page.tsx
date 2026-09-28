import { Suspense } from 'react';
import { TimelineView } from '@/components/timeline/TimelineView';
import { TIMELINE_EVENTS } from '@/data/timeline';

export const metadata = {
  title: 'Master MCU Timeline | Avengers Archive',
  description: 'Chronological turning points of Earth-616, from WWII Project Rebirth to the Multiverse collapse.',
};

export default function TimelinePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-mono text-xs text-marvel-gold">
          CALIBRATING TEMPORAL GPS...
        </div>
      }
    >
      <TimelineView events={TIMELINE_EVENTS} />
    </Suspense>
  );
}
