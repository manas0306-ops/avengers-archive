'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  ShieldAlert,
  Users,
  Radio,
  Activity,
  BarChart3,
  FileEdit,
  Trash2,
  Search,
  Filter,
  RefreshCw,
  Plus,
  CheckCircle2,
  Lock,
  LogOut,
  Calendar,
  Clock,
  Sparkles,
  Download,
  Upload,
} from 'lucide-react';
import { localDb } from '@/lib/store/localDb';
import { VisitorSession, VisitorActivityEvent, AnalyticsSummary } from '@/types/visitor';
import { Character } from '@/types/character';
import { useSound } from '@/hooks/useSound';
import { formatTimeAgo } from '@/lib/utils';

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'VISITORS' | 'ANALYTICS' | 'CONTENT' | 'AUDIT_LOG' | 'BACKUP'>('OVERVIEW');
  const [auditLogs, setAuditLogs] = useState<Array<any>>([]);
  const [importStatus, setImportStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Real data from DB
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [sessions, setSessions] = useState<VisitorSession[]>([]);
  const [recentEvents, setRecentEvents] = useState<VisitorActivityEvent[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visitorSearch, setVisitorSearch] = useState('');

  // Character editor state
  const [editingHero, setEditingHero] = useState<Character | null>(null);
  const [showHeroForm, setShowHeroForm] = useState(false);

  const { playConfirm, playHover } = useSound();

  // Load auth state from session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('avengers_admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const refreshData = () => {
    setAnalytics(localDb.getAnalytics());
    setSessions(localDb.getVisitorSessions());
    setRecentEvents(localDb.getRecentEvents());
    setCharacters([...localDb.getCharacters()]);
    setAuditLogs(localDb.getAuditLogs());
  };

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
      const interval = setInterval(refreshData, 5000); // 5-second near-real-time updates
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasscodeError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setIsAuthenticated(true);
          sessionStorage.setItem('avengers_admin_auth', 'true');
          sessionStorage.setItem('avengers_admin_token', data.token);
          setPasscodeError('');
          localDb.logAudit('PUBLISH', 'SECURITY', 'SESSION', 'Director logged in with verified server credentials');
          playConfirm();
          return;
        } else {
          setPasscodeError(data.error || 'Invalid Security Passcode. Access Denied.');
          return;
        }
      }
    } catch {
      // In static export / GitHub Pages mode, fetch will fail or 404 because there is no API server.
      // Fallback to client-side clearance check below.
    }

    // Static / Offline deployment mode fallback (e.g. GitHub Pages)
    const cleaned = passcode.trim();
    if (cleaned === 'stark' || cleaned === 'admin123' || cleaned === 'stark-director-clearance-protocol-omega') {
      setIsAuthenticated(true);
      sessionStorage.setItem('avengers_admin_auth', 'true');
      sessionStorage.setItem('avengers_admin_token', 'offline_static_session_' + Date.now());
      setPasscodeError('');
      localDb.logAudit('PUBLISH', 'SECURITY', 'SESSION', 'Director logged in via offline clearance protocol');
      playConfirm();
    } else {
      setPasscodeError('Invalid Security Passcode. Access Denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('avengers_admin_auth');
    playConfirm();
  };

  const handleDeleteSession = (sessionId: string) => {
    localDb.deleteVisitorSession(sessionId);
    refreshData();
    playConfirm();
  };

  const handleClearOld = () => {
    localDb.clearOldSessions(90);
    refreshData();
    playConfirm();
  };

  const filteredVisitors = useMemo(() => {
    if (!visitorSearch.trim()) return sessions;
    const q = visitorSearch.toLowerCase();
    return sessions.filter(
      (s) =>
        s.display_name.toLowerCase().includes(q) ||
        s.session_id.toLowerCase().includes(q) ||
        s.browser.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q)
    );
  }, [sessions, visitorSearch]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md p-8 rounded-3xl bg-archive-darker/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center">
          <div className="w-14 h-14 rounded-2xl bg-marvel-red/10 border border-marvel-red/30 flex items-center justify-center text-marvel-red mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="font-cinematic text-2xl font-black text-white tracking-wide mb-1">
            DIRECTOR CONSOLE
          </h2>
          <p className="text-xs font-mono text-zinc-400 mb-6">
            S.H.I-E.L.D. Level 8 Security Clearance Required
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter clearance code (e.g. 'stark')"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-marvel-red text-center tracking-widest"
              />
              {passcodeError && (
                <p className="text-xs font-mono text-red-400 mt-2">{passcodeError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(226,54,54,0.5)]"
            >
              AUTHENTICATE CLEARANCE
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
            Hint: Use <code className="text-marvel-arc">stark</code> for local demonstration access.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>S.H.I.E.L.D. DIRECTOR CONSOLE • LEVEL 8 GRANTED</span>
          </div>
          <h1 className="font-cinematic text-3xl sm:text-4xl font-black text-white">
            ARCHIVE INTELLIGENCE HQ
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={refreshData}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors border border-white/10"
          >
            <LogOut className="w-4 h-4" />
            <span>LOGOUT</span>
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-archive-darker border border-white/10 mb-8 overflow-x-auto">
        {[
          { id: 'OVERVIEW', label: 'OVERVIEW & LIVE', icon: Activity },
          { id: 'VISITORS', label: 'VISITORS MATRIX', icon: Users },
          { id: 'ANALYTICS', label: 'ANALYTICS & CHARTS', icon: BarChart3 },
          { id: 'CONTENT', label: 'CONTENT MANAGEMENT', icon: FileEdit },
          { id: 'AUDIT_LOG', label: 'SECURITY AUDIT LOG', icon: ShieldAlert },
          { id: 'BACKUP', label: 'BACKUP & RESTORE', icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                playConfirm();
                setActiveTab(tab.id as typeof activeTab);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-colors ${
                isActive
                  ? 'bg-marvel-red text-white shadow-[0_0_12px_rgba(226,54,54,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW & LIVE ACTIVITY */}
      {activeTab === 'OVERVIEW' && analytics && (
        <div className="space-y-8 animate-fade-in">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">Total Visitors</span>
              <span className="font-cinematic text-3xl font-black text-white">{analytics.total_visitors}</span>
            </div>
            <div className="p-4 rounded-2xl bg-archive-darker border border-emerald-500/30">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Online Now
              </span>
              <span className="font-cinematic text-3xl font-black text-emerald-300">{analytics.online_now}</span>
            </div>
            <div className="p-4 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">Today</span>
              <span className="font-cinematic text-3xl font-black text-white">{analytics.today_visitors}</span>
            </div>
            <div className="p-4 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">This Week</span>
              <span className="font-cinematic text-3xl font-black text-white">{analytics.this_week_visitors}</span>
            </div>
            <div className="p-4 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">Total Sessions</span>
              <span className="font-cinematic text-3xl font-black text-white">{analytics.total_sessions}</span>
            </div>
            <div className="p-4 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">Avg Time</span>
              <span className="font-cinematic text-3xl font-black text-marvel-arc">
                {analytics.avg_session_duration_seconds}s
              </span>
            </div>
          </div>

          {/* Behavior Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-xs font-mono text-marvel-red font-bold uppercase tracking-wider block mb-1">
                MOST VIEWED HERO
              </span>
              <div className="font-cinematic text-2xl font-bold text-white">
                {analytics.most_viewed_hero.name}
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {analytics.most_viewed_hero.count} recorded profile views
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-xs font-mono text-marvel-arc font-bold uppercase tracking-wider block mb-1">
                MOST VISITED PAGE
              </span>
              <div className="font-cinematic text-2xl font-bold text-white">
                {analytics.most_visited_page.page}
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {analytics.most_visited_page.count} visits recorded
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-archive-darker border border-white/10">
              <span className="text-xs font-mono text-marvel-gold font-bold uppercase tracking-wider block mb-1">
                MOST FAVORITED HERO
              </span>
              <div className="font-cinematic text-2xl font-bold text-white">
                {analytics.most_favorited_hero.name}
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {analytics.most_favorited_hero.count} favorites bookmarked
              </p>
            </div>
          </div>

          {/* Live Activity Stream & Currently in Archive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Active Operatives */}
            <div className="p-6 rounded-3xl bg-archive-darker border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-cinematic text-lg font-bold text-white flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  CURRENTLY IN THE ARCHIVE
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  🟢 {analytics.online_now} ACTIVE NOW
                </span>
              </div>

              <div className="space-y-3">
                {sessions.filter((s) => s.is_online).slice(0, 6).map((sess) => (
                  <div
                    key={sess.id}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-white font-semibold">{sess.display_name}</span>
                    </div>
                    <span className="text-zinc-400">
                      Exploring: {sess.pages_visited[sess.pages_visited.length - 1] || 'Archive'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Database Activity Feed */}
            <div className="p-6 rounded-3xl bg-archive-darker border border-white/10">
              <h3 className="font-cinematic text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-marvel-arc" />
                LIVE ARCHIVE ACTIVITY FEED
              </h3>

              <div className="space-y-2.5 max-h-[300px] overflow-y-auto">
                {recentEvents.length > 0 ? (
                  recentEvents.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-marvel-arc/10 text-marvel-arc border border-marvel-arc/20">
                          {evt.event_type}
                        </span>
                        <span className="text-zinc-300">{evt.detail}</span>
                      </div>
                      <span className="text-zinc-500 text-[10px] shrink-0 ml-2">
                        {formatTimeAgo(evt.timestamp)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-mono text-zinc-500">
                    No activity events recorded yet. Navigate through archive sections to generate live events.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VISITORS MATRIX */}
      {activeTab === 'VISITORS' && (
        <div className="space-y-6 animate-fade-in">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker border border-white/10">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
              <input
                type="text"
                value={visitorSearch}
                onChange={(e) => setVisitorSearch(e.target.value)}
                placeholder="Search visitors by ID or Name..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-marvel-arc"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleClearOld}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-mono border border-white/10 transition-colors"
                title="Clear tracking records older than 90 days"
              >
                PURGE &gt;90 DAYS
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-3xl bg-archive-darker border border-white/10">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/5 text-zinc-400 border-b border-white/10 uppercase text-[10px]">
                <tr>
                  <th className="p-4">Operative / Display Name</th>
                  <th className="p-4">Visitor ID (Hash)</th>
                  <th className="p-4">First Visit</th>
                  <th className="p-4">Last Visit</th>
                  <th className="p-4">Sessions</th>
                  <th className="p-4">Device / Browser</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {filteredVisitors.map((v) => (
                  <tr key={v.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          v.is_online ? 'bg-emerald-400' : 'bg-zinc-600'
                        }`}
                      />
                      {v.display_name}
                    </td>
                    <td className="p-4 text-zinc-400 font-mono text-[11px]">{v.visitor_hash}</td>
                    <td className="p-4 text-zinc-400">{formatTimeAgo(v.first_visit)}</td>
                    <td className="p-4 text-zinc-400">{formatTimeAgo(v.last_visit)}</td>
                    <td className="p-4 font-bold text-white">{v.total_sessions}</td>
                    <td className="p-4 text-zinc-400 capitalize">
                      {v.device_type} • {v.browser}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          v.is_online
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                            : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        {v.is_online ? 'ONLINE' : 'OFFLINE'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleDeleteSession(v.session_id)}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-950/30 transition-colors"
                        title="Delete Visitor Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: ANALYTICS & CHARTS */}
      {activeTab === 'ANALYTICS' && analytics && (
        <div className="space-y-8 animate-fade-in">
          {/* Device Split Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-archive-darker border border-white/10">
              <h3 className="font-cinematic text-lg font-bold text-white mb-4">
                DEVICE USAGE DISTRIBUTION
              </h3>
              <div className="space-y-4 font-mono text-xs">
                {Object.entries(analytics.device_breakdown).map(([dev, count]) => {
                  const total =
                    analytics.device_breakdown.desktop +
                    analytics.device_breakdown.mobile +
                    analytics.device_breakdown.tablet || 1;
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={dev} className="space-y-1">
                      <div className="flex justify-between text-zinc-300 capitalize">
                        <span>{dev}</span>
                        <span>{count} ({pct}%)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-marvel-arc rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Popular Heroes Ranking */}
            <div className="p-6 rounded-3xl bg-archive-darker border border-white/10">
              <h3 className="font-cinematic text-lg font-bold text-white mb-4">
                MOST EXPLORED HERO PROFILES
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {analytics.popular_heroes.map((h, idx) => (
                  <div
                    key={h.name}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-marvel-gold font-bold">#{idx + 1}</span>
                      <span className="text-white font-semibold">{h.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400">
                      <span>{h.views} views</span>
                      <span>•</span>
                      <span className="text-red-400">{h.favorites} favorites</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONTENT MANAGEMENT CRUD */}
      {activeTab === 'CONTENT' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-archive-darker border border-white/10">
            <div>
              <h3 className="font-cinematic text-lg font-bold text-white">HERO CATALOG RECORDS</h3>
              <p className="text-xs font-mono text-zinc-400">
                Create, update, or remove characters dynamically without code edits
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingHero({
                  id: `hero-${Date.now()}`,
                  name: 'New Avenger',
                  real_name: 'Unknown',
                  hero_title: 'Hero of Earth',
                  category: 'NEWER / SUCCESSOR AVENGERS',
                  status: 'ACTIVE',
                  team_status: 'Operative',
                  first_appearance: 'Phase 5 (2025)',
                  last_appearance: 'Earth-616',
                  origin: 'Origin narrative...',
                  powers: ['Superhuman Reflexes'],
                  weapons: ['Tactical Gear'],
                  affiliations: ['Avengers'],
                  storyline: {
                    origin: 'Origin details',
                    the_call: 'The call details',
                    rise: 'Rise of the hero',
                    greatest_battles: 'Greatest battles',
                    losses: 'Known losses',
                    turning_point: 'Turning point',
                    legacy: 'Heroic legacy',
                    where_are_they_now: 'Current location',
                  },
                  timeline: [{ year: '2025', title: 'Debut', description: 'Enters the archive' }],
                  relationships: [],
                  quotes: [{ quote: 'Earth will never stand alone.' }],
                  fun_facts: ['First recorded entry.'],
                  hero_image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
                  background_image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1920&auto=format&fit=crop',
                  thumbnail: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=300&auto=format&fit=crop',
                  gallery_images: [],
                  accent_theme: { primary: '#e23636', glow: 'rgba(226,54,54,0.4)', border: 'rgba(226,54,54,0.3)' },
                  where_are_they_now: {
                    current_mcu_status: 'Active',
                    last_known_appearance: 'Phase 5',
                    post_endgame_development: 'Ongoing missions',
                    future_status: 'UPCOMING',
                    notes: 'Verified record',
                    source: 'Marvel Studios',
                  },
                  source_urls: [{ label: 'Marvel Official', url: 'https://marvel.com' }],
                  last_verified: '2026-09-28',
                  content_version: 'v1.0.0',
                });
                setShowHeroForm(true);
              }}
              className="px-4 py-2 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 transition-colors shadow-[0_0_15px_rgba(226,54,54,0.5)]"
            >
              <Plus className="w-4 h-4" />
              <span>ADD CHARACTER</span>
            </button>
          </div>

          {/* Characters List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => (
              <div
                key={char.id}
                className="p-5 rounded-2xl bg-archive-darker border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinematic text-lg font-bold text-white">{char.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300">
                      {char.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mb-2">{char.real_name}</p>
                  <p className="text-xs text-zinc-300 font-sans line-clamp-2">{char.origin}</p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5 text-xs font-mono">
                  <span className="text-[10px] text-zinc-500">v{char.content_version}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingHero(char);
                        setShowHeroForm(true);
                      }}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                    >
                      EDIT
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        localDb.deleteCharacter(char.id);
                        refreshData();
                      }}
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Form Modal */}
          {showHeroForm && editingHero && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
            >
              <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-archive-darkest border border-marvel-red/40 text-white">
                <h3 className="font-cinematic text-2xl font-bold text-white mb-6">
                  {editingHero.id.startsWith('hero-') ? 'ADD NEW CHARACTER' : `EDIT ${editingHero.name}`}
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    localDb.saveCharacter(editingHero);
                    setShowHeroForm(false);
                    refreshData();
                    playConfirm();
                  }}
                  className="space-y-4 text-xs font-mono"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 mb-1">CHARACTER NAME</label>
                      <input
                        type="text"
                        value={editingHero.name}
                        onChange={(e) => setEditingHero({ ...editingHero, name: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 mb-1">REAL IDENTITY</label>
                      <input
                        type="text"
                        value={editingHero.real_name}
                        onChange={(e) => setEditingHero({ ...editingHero, real_name: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">HERO TITLE</label>
                    <input
                      type="text"
                      value={editingHero.hero_title}
                      onChange={(e) => setEditingHero({ ...editingHero, hero_title: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">ORIGIN NARRATIVE</label>
                    <textarea
                      rows={3}
                      value={editingHero.origin}
                      onChange={(e) => setEditingHero({ ...editingHero, origin: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setShowHeroForm(false)}
                      className="px-4 py-2 rounded-xl bg-white/10 text-zinc-400 hover:text-white"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-bold"
                    >
                      SAVE RECORD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: SECURITY AUDIT LOG */}
      {activeTab === 'AUDIT_LOG' && (
        <div className="space-y-6 animate-fade-in font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                IMMUTABLE S.H.I.E.L.D. ADMINISTRATIVE LOGS
              </div>
              <h2 className="font-display font-black text-2xl text-white mt-0.5">
                MUTATION & AUTHORIZATION AUDIT TRAIL
              </h2>
            </div>
            <button
              type="button"
              onClick={refreshData}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>REFRESH LOGS</span>
            </button>
          </div>

          {auditLogs.length === 0 ? (
            <div className="p-12 text-center text-zinc-500 rounded-2xl bg-archive-darker border border-white/10">
              No administrative mutations recorded in this session. All modifications will appear here.
            </div>
          ) : (
            <div className="rounded-2xl bg-archive-darker border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-[10px] text-zinc-400 uppercase tracking-wider border-b border-white/10">
                    <tr>
                      <th className="p-3.5">TIMESTAMP</th>
                      <th className="p-3.5">ACTION</th>
                      <th className="p-3.5">TARGET</th>
                      <th className="p-3.5">ACTOR</th>
                      <th className="p-3.5">SUMMARY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-300">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-zinc-400 text-[11px] whitespace-nowrap">
                          {new Date(log.timestamp).toLocaleString()}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              log.action === 'CREATE'
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : log.action === 'DELETE'
                                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                                : log.action === 'PUBLISH'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            }`}
                          >
                            {log.action}
                          </span>
                        </td>
                        <td className="p-3.5 font-bold text-white whitespace-nowrap">
                          {log.targetType}: {log.targetId}
                        </td>
                        <td className="p-3.5 text-zinc-400 whitespace-nowrap">{log.actor}</td>
                        <td className="p-3.5 text-zinc-300">{log.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 6: BACKUP & RESTORE */}
      {activeTab === 'BACKUP' && (
        <div className="space-y-6 animate-fade-in font-mono text-xs max-w-4xl">
          <div className="pb-4 border-b border-white/10">
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
              DATABASE SURVIVAL PROTOCOL
            </div>
            <h2 className="font-display font-black text-2xl text-white mt-0.5">
              DATABASE BACKUP, EXPORT & RESTORE
            </h2>
            <p className="text-zinc-400 text-xs mt-1">
              Export entire archive state (characters, appearances, movies, timeline, and audit logs) as a validated JSON snapshot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Export Card */}
            <div className="p-6 rounded-2xl bg-archive-darker border border-white/10 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                  <Download className="w-5 h-5 text-cyan-400" />
                  EXPORT DATABASE BACKUP
                </h3>
                <p className="text-zinc-300 leading-relaxed text-xs">
                  Generate a complete timestamped JSON archive of all Earth-616 hero profiles, equipment, movies, and settings.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const data = localDb.exportDatabase();
                  const blob = new Blob([data], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `avengers-archive-backup-${new Date().toISOString().slice(0, 10)}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                  localDb.logAudit('PUBLISH', 'BACKUP', 'EXPORT', 'Full database snapshot downloaded.');
                  refreshData();
                  playConfirm();
                }}
                className="w-full py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD JSON ARCHIVE</span>
              </button>
            </div>

            {/* Restore Card */}
            <div className="p-6 rounded-2xl bg-archive-darker border border-white/10 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-400" />
                  RESTORE FROM JSON ARCHIVE
                </h3>
                <p className="text-zinc-300 leading-relaxed text-xs">
                  Import a previously exported JSON backup file. Validates schema integrity before applying mutations.
                </p>
              </div>

              <div>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const text = event.target?.result as string;
                      if (text) {
                        const res = localDb.importDatabase(text);
                        setImportStatus(res);
                        refreshData();
                        playConfirm();
                      }
                    };
                    reader.readAsText(file);
                  }}
                  className="block w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-mono file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer"
                />

                {importStatus && (
                  <div
                    className={`mt-3 p-3 rounded-xl text-xs ${
                      importStatus.success
                        ? 'bg-emerald-950/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-950/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {importStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
