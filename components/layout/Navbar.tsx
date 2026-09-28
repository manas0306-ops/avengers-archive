'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Film,
  Clock,
  Image as ImageIcon,
  Users,
  Compass,
  HelpCircle,
  Search,
  Heart,
  User,
  Settings,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { useSpoilerMode } from '@/hooks/useSpoilerMode';
import { useFavorites } from '@/hooks/useFavorites';
import { ArcReactor } from '@/components/ui/ArcReactor';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenJarvis?: () => void;
}

export function Navbar({ onOpenSearch, onOpenJarvis }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, toggleSound, playHover, playConfirm } = useSound();
  const { showSpoilers, toggleSpoilers } = useSpoilerMode();
  const { favorites } = useFavorites();

  const navLinks = [
    { label: 'HOME', href: '/', icon: Shield },
    { label: 'HEROES', href: '/heroes', icon: Users },
    { label: 'TIMELINE', href: '/timeline', icon: Clock },
    { label: 'MOVIES', href: '/movies', icon: Film },
    { label: 'GALLERY', href: '/gallery', icon: ImageIcon },
    { label: 'WALLPAPERS', href: '/wallpapers', icon: Sparkles },
    { label: 'MISSIONS', href: '/squad', icon: Compass },
    { label: 'TRIVIA', href: '/trivia', icon: HelpCircle },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-40 mx-auto w-[96%] max-w-7xl">
      <nav
        aria-label="Avengers Archive Navigation"
        className="relative flex items-center justify-between px-4 py-2.5 rounded-2xl bg-archive-darker/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.7)] transition-all duration-300"
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => playConfirm()}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <ArcReactor size="sm" onJarvisTrigger={onOpenJarvis} />
            <div className="flex flex-col">
              <span className="font-cinematic text-lg font-black tracking-widest text-white group-hover:text-marvel-red transition-colors flex items-center gap-1.5">
                AVENGERS
                <span className="text-[10px] font-mono px-1 py-0.5 rounded bg-marvel-red/20 text-marvel-red border border-marvel-red/30">
                  ARCHIVE
                </span>
              </span>
              <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:inline">
                Earth-616 Intelligence
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => playHover()}
                onClick={() => playConfirm()}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-bold bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)] border border-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-marvel-red' : 'text-zinc-400'}`} />
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-marvel-red to-transparent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search */}
          <button
            type="button"
            onClick={() => {
              playConfirm();
              onOpenSearch();
            }}
            aria-label="Search Archive (Cmd+K)"
            title="Search Archive (Cmd+K)"
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 border border-transparent hover:border-white/10"
          >
            <Search className="w-4 h-4 text-marvel-arc" />
            <span className="hidden xl:inline text-[11px] font-mono text-zinc-400">Search</span>
            <kbd className="hidden xl:inline px-1 py-0.5 text-[9px] font-mono text-zinc-400 bg-black/40 rounded border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Disable Sound FX' : 'Enable Sound FX'}
            title={soundEnabled ? 'Sound FX: ON' : 'Sound FX: OFF'}
            className={`p-2 rounded-lg transition-colors border ${
              soundEnabled
                ? 'text-marvel-arc bg-marvel-arc/10 border-marvel-arc/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Spoilers Toggle */}
          <button
            type="button"
            onClick={() => {
              toggleSpoilers();
              playConfirm();
            }}
            aria-label={showSpoilers ? 'Spoilers: Visible' : 'Spoilers: Blurred'}
            title={showSpoilers ? 'Spoilers: ON' : 'Spoilers: HIDDEN'}
            className={`p-2 rounded-lg transition-colors border ${
              showSpoilers
                ? 'text-amber-400 bg-amber-400/10 border-amber-400/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent'
            }`}
          >
            {showSpoilers ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          {/* Favorites */}
          <Link
            href="/profile?tab=favorites"
            onClick={() => playConfirm()}
            aria-label="My Favorites"
            title="Saved Heroes & Media"
            className="relative p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-500/20 hover:fill-red-500 transition-colors" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-marvel-red text-[9px] font-bold text-white shadow-[0_0_8px_#e23636]">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* User Profile */}
          <Link
            href="/profile"
            onClick={() => playConfirm()}
            aria-label="User Profile"
            title="User Profile & Progress"
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <User className="w-4 h-4 text-zinc-300" />
          </Link>

          {/* Admin Link */}
          <Link
            href="/admin"
            onClick={() => playConfirm()}
            aria-label="Admin Dashboard"
            title="Admin HQ & Live Analytics"
            className="p-2 rounded-lg text-zinc-400 hover:text-marvel-gold hover:bg-marvel-gold/10 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => {
              playConfirm();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-archive-darkest/95 backdrop-blur-2xl border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.9)] animate-fade-in">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    playConfirm();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-mono tracking-wider ${
                    isActive
                      ? 'bg-marvel-red/20 text-white border border-marvel-red/40 font-bold'
                      : 'bg-white/5 text-zinc-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-marvel-red" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-zinc-400">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              ABOUT ARCHIVE
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
