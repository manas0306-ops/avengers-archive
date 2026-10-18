'use client';

import React, { useState } from 'react';
import { Calendar, Film, Clock, ChevronRight, Award, Flame, Zap, Heart } from 'lucide-react';

export function StarkTimelineView() {
  const [timelineMode, setTimelineMode] = useState<'STORY' | 'RELEASE'>('STORY');

  const storyEvents = [
    {
      year: '1970',
      title: 'Camp Lehigh Encounters',
      subtitle: 'Howard Stark & The Legacy of the Arc',
      description: 'Tony encounters his father Howard Stark during the 2023 Time Heist at Camp Lehigh, finally hearing Howard express unconditional pride and love for his future son.',
      impact: 'Provided psychological closure on Tony’s lifelong paternal abandonment trauma.',
      category: 'TURNING_POINT'
    },
    {
      year: '2008',
      title: 'Kunar Province & The Mark I Birth',
      subtitle: 'From Merchant of Death to Iron Man',
      description: 'Captured by the Ten Rings following the Jericho missile demonstration. Forged the Mark I alongside Ho Yinsen and escaped, declaring upon return that Stark Industries would cease weapons manufacturing.',
      impact: 'The philosophical turning point that created the modern era of Earth-616 public superheroes.',
      category: 'ORIGIN'
    },
    {
      year: '2008',
      title: '"I Am Iron Man" Declaration',
      subtitle: 'Discarding the Scripted Cover Story',
      description: 'At a global press conference, Tony discarded S.H.I.E.L.D.’s alibi cards and confessed his superhero persona to the world, permanently eliminating the concept of secret identities.',
      impact: 'Prompted Nick Fury to step into Tony’s living room with the Avengers Initiative.',
      category: 'MILESTONE'
    },
    {
      year: '2010',
      title: 'Monaco & Synthesizing the New Element',
      subtitle: 'Overcoming Terminal Palladium Poisoning',
      description: 'Fought Ivan Vanko on the Monaco Grand Prix track in the portable Mark V suitcase suit. Later synthesized Howard Stark’s theorized non-toxic element (Badassium/Vibranium isotope) to power the Mark VI.',
      impact: 'Cured his terminal blood poisoning and built a clean, limitless power source.',
      category: 'BREAKTHROUGH'
    },
    {
      year: '2012',
      title: 'The Battle of New York',
      subtitle: 'Guiding the Nuclear Warhead through the Wormhole',
      description: 'During the Chitauri invasion, Tony piloted the World Security Council’s nuclear warhead through the wormhole directly into the alien mothership in Mark VII, falling back through the portal as it closed.',
      impact: 'Triggered acute PTSD and an obsession with planetary defense ("a suit of armor around the world").',
      category: 'BATTLE'
    },
    {
      year: '2012',
      title: 'Clean Slate Protocol & Heart Surgery',
      subtitle: 'Norco Climax and Discarding the Chest Arc Reactor',
      description: 'Summoned 34 Iron Legion armors (House Party Protocol) to eliminate Aldrich Killian and AIM. Detonated all suits in the sky as a fireworks gift to Pepper, and underwent surgery in Zurich to extract the shrapnel.',
      impact: 'Proved to himself: "My armor was never a distraction or a hobby, it was a cocoon. And now I’m a changed man. You can take away my house, all my tricks and toys. One thing you can’t take away: I am Iron Man."',
      category: 'TURNING_POINT'
    },
    {
      year: '2015',
      title: 'The Ultron Crisis & Creation of Vision',
      subtitle: 'The Planetary Defense Failure in Sokovia',
      description: 'Attempted to use the Mind Stone to create a global peacekeeping AI, accidentally spawning Ultron. Redeemed the mistake by uploading J.A.R.V.I.S. into the vibranium Cradle to give birth to Vision.',
      impact: 'Sokovian destruction spurred global backlash, culminating in the Sokovia Accords.',
      category: 'CONSEQUENCE'
    },
    {
      year: '2016',
      title: 'The Sokovia Accords & Siberian Schism',
      subtitle: 'Ideological Fracturing of the Avengers',
      description: 'Championed United Nations oversight to avoid unchecked unilateral power. Discovered Bucky Barnes assassinated Howard and Maria Stark in 1991, resulting in a brutal duel with Steve Rogers.',
      impact: 'The Avengers fractured, leaving Earth critically divided ahead of Thanos’s arrival.',
      category: 'LOSS'
    },
    {
      year: '2018',
      title: 'Battle of Titan & The Blip',
      subtitle: 'Drawing Blood from Thanos in Mark L',
      description: 'Traveled to Titan aboard a Q-Ship with Spider-Man and Doctor Strange. Fought Thanos head-on with nanotech Mark L, drawing blood before being impaled. Spared by Strange trading the Time Stone, Tony watched Peter Parker turn to dust.',
      impact: 'Tony’s deepest fear from New York came to pass; he was marooned in deep space starving for oxygen.',
      category: 'CATASTROPHE'
    },
    {
      year: '2023',
      title: 'The Time Heist & The Ultimate Sacrifice',
      subtitle: '"And I... am... Iron Man."',
      description: 'Living quietly for five years with Pepper and Morgan, Tony cracked quantum temporal GPS equations. In the Battle of Earth, he rerouted the Infinity Stones onto Mark LXXXV and snapped, wiping out Thanos at the cost of his life.',
      impact: 'Restored trillions of lives across the cosmos and permanently cemented Tony Stark as Earth’s greatest defender.',
      category: 'LEGACY'
    }
  ];

  const releaseEvents = [
    { year: '2008', title: 'Iron Man (May 2, 2008)', role: 'Lead Protagonist', boxOffice: '$585.8M', milestone: 'Launches the Marvel Cinematic Universe' },
    { year: '2008', title: 'The Incredible Hulk (June 13, 2008)', role: 'Cameo Appearance', boxOffice: '$264.8M', milestone: 'First crossover hint: Approaches General Ross about a team' },
    { year: '2010', title: 'Iron Man 2 (May 7, 2010)', role: 'Lead Protagonist', boxOffice: '$623.9M', milestone: 'Introduces Black Widow, War Machine, and New Element' },
    { year: '2012', title: 'Marvel\'s The Avengers (May 4, 2012)', role: 'Main Ensemble Cast', boxOffice: '$1.519B', milestone: 'First billion-dollar MCU team-up film' },
    { year: '2013', title: 'Iron Man 3 (May 3, 2013)', role: 'Lead Protagonist', boxOffice: '$1.215B', milestone: 'Completes the solo Iron Man trilogy with House Party Protocol' },
    { year: '2015', title: 'Avengers: Age of Ultron (May 1, 2015)', role: 'Main Ensemble Cast', boxOffice: '$1.403B', milestone: 'Introduces Vision, Hulkbuster Veronica, and F.R.I.D.A.Y.' },
    { year: '2016', title: 'Captain America: Civil War (May 6, 2016)', role: 'Co-Lead & Antagonist to Cap', boxOffice: '$1.153B', milestone: 'Recruits Spider-Man and splits the Avengers' },
    { year: '2017', title: 'Spider-Man: Homecoming (July 7, 2017)', role: 'Key Supporting Mentor', boxOffice: '$880.2M', milestone: 'Mentors Peter Parker in Queens and Staten Island' },
    { year: '2018', title: 'Avengers: Infinity War (April 27, 2018)', role: 'Main Ensemble Cast', boxOffice: '$2.048B', milestone: 'Debuts nanotech Mark L and duels Thanos on Titan' },
    { year: '2019', title: 'Avengers: Endgame (April 26, 2019)', role: 'Lead Protagonist / Heroic Farewell', boxOffice: '$2.798B', milestone: 'Highest-grossing superhero film; Tony’s ultimate sacrifice' },
    { year: '2019', title: 'Spider-Man: Far From Home (July 2, 2019)', role: 'Archival Memorial / E.D.I.T.H. Bequest', boxOffice: '$1.132B', milestone: 'In-memoriam tribute and passing the torch to Peter Parker' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Mode Toggle Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-black/60 border border-cyan-500/20 gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
            CHRONOLOGICAL ANALYSIS ENGINE
          </span>
          <h3 className="font-display font-black text-xl text-white">
            TONY STARK: DUAL CHRONOLOGY
          </h3>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-cyan-500/30">
          <button
            type="button"
            onClick={() => setTimelineMode('STORY')}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-2 ${
              timelineMode === 'STORY'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            IN-UNIVERSE STORY (1970–2023)
          </button>
          <button
            type="button"
            onClick={() => setTimelineMode('RELEASE')}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-2 ${
              timelineMode === 'RELEASE'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            FILM RELEASE ORDER (2008–2019)
          </button>
        </div>
      </div>

      {/* Story Mode View */}
      {timelineMode === 'STORY' && (
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 my-8">
          {storyEvents.map((ev, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline diamond node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rotate-45 bg-[#090d16] border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover:scale-125 transition-transform" />

              <div className="p-5 sm:p-6 rounded-2xl bg-[#090d16]/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30">
                    {ev.year}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    {ev.category}
                  </span>
                </div>

                <h4 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  {ev.title}
                </h4>
                <div className="text-xs font-mono text-cyan-400/80 mb-3">
                  {ev.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {ev.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-zinc-400">
                  <span className="text-cyan-400 font-bold">LONG-TERM CANON IMPACT:</span> {ev.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Release Mode View */}
      {timelineMode === 'RELEASE' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {releaseEvents.map((rel, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#090d16]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  RELEASE: {rel.year}
                </span>
                <span className="font-mono text-xs text-emerald-400">
                  {rel.boxOffice}
                </span>
              </div>

              <h4 className="font-display font-black text-lg text-white">
                {rel.title}
              </h4>

              <div className="text-xs font-mono text-zinc-300">
                ROLE: <span className="text-cyan-300 font-semibold">{rel.role}</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/5">
                {rel.milestone}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
