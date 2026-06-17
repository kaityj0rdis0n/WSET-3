import type { Bank } from '../../types';
import { BANK_COLOR_VAR } from '../../utils/bankColors';

interface BordeauxMapProps {
  selectedRegionId: string | null;
  onRegionClick: (regionId: string) => void;
}

interface RegionPath {
  id: string;
  name: string;
  bank: Bank;
  d: string;
}

const REGION_PATHS: RegionPath[] = [
  {
    id: 'st-estephe',
    name: 'St-Estèphe',
    bank: 'left',
    d: 'M 80,40 L 120,35 L 125,60 L 130,85 L 85,90 L 75,65 Z',
  },
  {
    id: 'pauillac',
    name: 'Pauillac',
    bank: 'left',
    d: 'M 85,90 L 130,85 L 135,115 L 90,120 L 82,105 Z',
  },
  {
    id: 'st-julien',
    name: 'St-Julien',
    bank: 'left',
    d: 'M 90,120 L 135,115 L 138,140 L 93,145 Z',
  },
  {
    id: 'margaux',
    name: 'Margaux',
    bank: 'left',
    d: 'M 93,145 L 138,140 L 145,180 L 100,185 L 95,165 Z',
  },
  {
    id: 'haut-medoc',
    name: 'Haut-Médoc',
    bank: 'left',
    d: 'M 100,185 L 145,180 L 155,230 L 160,260 L 115,265 L 105,230 Z',
  },
  {
    id: 'pessac-leognan',
    name: 'Pessac-Léognan',
    bank: 'left',
    d: 'M 155,290 L 200,285 L 210,325 L 195,340 L 150,335 L 145,310 Z',
  },
  {
    id: 'sauternes',
    name: 'Sauternes',
    bank: 'sweet',
    d: 'M 145,370 L 195,365 L 205,400 L 195,420 L 145,415 L 140,390 Z',
  },
  {
    id: 'st-emilion',
    name: 'St-Émilion',
    bank: 'right',
    d: 'M 270,220 L 330,215 L 340,255 L 335,280 L 275,285 L 265,250 Z',
  },
  {
    id: 'pomerol',
    name: 'Pomerol',
    bank: 'right',
    d: 'M 250,180 L 290,175 L 295,210 L 270,220 L 265,215 L 248,210 Z',
  },
  {
    id: 'entre-deux-mers',
    name: 'Entre-Deux-Mers',
    bank: 'entre-deux-mers',
    d: 'M 200,300 L 270,290 L 340,295 L 360,340 L 350,380 L 280,390 L 210,370 L 195,345 Z',
  },
];

interface RiverPath {
  name: string;
  d: string;
}

const RIVERS: RiverPath[] = [
  {
    name: 'Gironde',
    d: 'M 140,30 C 150,80 155,130 165,180 C 170,210 175,240 185,270',
  },
  {
    name: 'Garonne',
    d: 'M 185,270 C 180,300 170,330 165,360 C 160,390 155,420 150,450',
  },
  {
    name: 'Dordogne',
    d: 'M 185,270 C 210,265 240,250 260,240 C 290,225 320,210 360,200',
  },
];

export function BordeauxMap({ selectedRegionId, onRegionClick }: BordeauxMapProps) {
  // Render the selected region last so its highlight stroke sits above its neighbours
  // (SVG has no z-index; later elements paint on top of earlier ones).
  const orderedRegions = [...REGION_PATHS].sort(
    (a, b) => Number(a.id === selectedRegionId) - Number(b.id === selectedRegionId),
  );

  return (
    <svg
      viewBox="0 0 420 470"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}
    >
      {RIVERS.map((river) => (
        <path
          key={river.name}
          d={river.d}
          fill="none"
          stroke="var(--color-topic-geography)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}

      {orderedRegions.map((region) => {
        const isSelected = region.id === selectedRegionId;
        const center = getRegionCenter(region.d);
        return (
          <g key={region.id} onClick={() => onRegionClick(region.id)} style={{ cursor: 'pointer' }}>
            {/* Fill always shows the bank colour, so the Left/Right/Sweet/Entre-Deux-Mers
                split stays visible even when a region is selected; selection is conveyed
                by the brighter, thicker stroke rather than by swapping the fill. */}
            <path
              d={region.d}
              fill={BANK_COLOR_VAR[region.bank]}
              stroke={isSelected ? 'var(--color-gold-light)' : 'var(--color-border)'}
              strokeWidth={isSelected ? 2.5 : 1}
              opacity={isSelected ? 1 : 0.82}
            />
            {/* Dark halo (paint-order: stroke renders it beneath the fill) keeps the
                label readable on top of any bank colour. */}
            <text
              x={center.x}
              y={center.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="var(--color-text-primary)"
              stroke="var(--color-bg)"
              strokeWidth="2.5"
              paintOrder="stroke"
              fontSize="9"
              fontWeight="600"
              pointerEvents="none"
            >
              {region.name}
            </text>
          </g>
        );
      })}

      {RIVERS.map((river) => (
        <text
          key={`label-${river.name}`}
          x={getRiverLabelPosition(river.name).x}
          y={getRiverLabelPosition(river.name).y}
          fill="var(--color-topic-geography)"
          fontSize="8"
          fontStyle="italic"
          opacity="0.7"
          pointerEvents="none"
        >
          {river.name}
        </text>
      ))}
    </svg>
  );
}

function getRegionCenter(d: string): { x: number; y: number } {
  const numbers = d.match(/[\d.]+/g)?.map(Number) ?? [];
  let sumX = 0;
  let sumY = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sumX += numbers[i];
    sumY += numbers[i + 1];
    count++;
  }
  return { x: sumX / count, y: sumY / count };
}

function getRiverLabelPosition(name: string): { x: number; y: number } {
  switch (name) {
    case 'Gironde': return { x: 160, y: 130 };
    case 'Garonne': return { x: 140, y: 380 };
    case 'Dordogne': return { x: 310, y: 195 };
    default: return { x: 0, y: 0 };
  }
}
