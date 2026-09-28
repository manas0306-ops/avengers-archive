import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate payload
    const { sessionId, path } = body;
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    // In local mode, tracking is also handled client-side in localDb.
    // If Supabase server keys are present, we can upsert to public.visitor_sessions.
    return NextResponse.json({ success: true, timestamp: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to record tracking event' }, { status: 500 });
  }
}
