'use client';

import React from 'react';
import { Hero } from '@/types/hero';

interface PowerStatsRadarProps {
  stats: Hero['stats'];
  primaryColor: string;
  secondaryColor: string;
}

export function PowerStatsRadar({
  stats,
  primaryColor,
  secondaryColor,
}: PowerStatsRadarProps) {
  const size = 260;
  const center = size / 2;
  const radius = center - 42;

  const attributes = [
    { key: 'strength', label: 'STR', value: stats.strength },
    { key: 'speed', label: 'SPD', value: stats.speed },
    { key: 'intellect', label: 'INT', value: stats.intellect },
    { key: 'durability', label: 'DUR', value: stats.durability },
    { key: 'energy', label: 'ENG', value: stats.energy },
    { key: 'combat', label: 'CMB', value: stats.combat },
  ];

  const totalPoints = attributes.length;
  const angleStep = (Math.PI * 2) / totalPoints;

  // Background hexagonal rings (at 20%, 40%, 60%, 80%, 100%)
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  const polygonPoints = attributes
    .map((attr, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (attr.value / 100) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between w-full px-2 mb-1">
        <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
          POWER MATRIX
        </span>
        <span className="font-mono text-[9px] tracking-wider text-zinc-400">
          Archive rating (fan-made)
        </span>
      </div>

      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grid Rings */}
        {rings.map((ringScale, idx) => {
          const ringPoints = Array.from({ length: totalPoints })
            .map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const r = radius * ringScale;
              const x = center + r * Math.cos(angle);
              const y = center + r * Math.sin(angle);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={idx}
              points={ringPoints}
              fill={idx === rings.length - 1 ? 'rgba(255, 255, 255, 0.02)' : 'none'}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              strokeDasharray={idx === rings.length - 1 ? 'none' : '2,3'}
            />
          );
        })}

        {/* Axes lines */}
        {attributes.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Polygon */}
        <polygon
          points={polygonPoints}
          fill={primaryColor}
          fillOpacity="0.32"
          stroke={primaryColor}
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out"
        />

        {/* Vertex Points & Labels */}
        {attributes.map((attr, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const r = (attr.value / 100) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          const labelR = radius + 22;
          const labelX = center + labelR * Math.cos(angle);
          const labelY = center + labelR * Math.sin(angle);

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="3.5"
                fill={secondaryColor}
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="central"
                className="font-mono text-[10px] font-bold fill-zinc-300"
              >
                {attr.label}
              </text>
              <text
                x={labelX}
                y={labelY + 11}
                textAnchor="middle"
                dominantBaseline="central"
                className="font-mono text-[9px] fill-zinc-400"
              >
                {attr.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
