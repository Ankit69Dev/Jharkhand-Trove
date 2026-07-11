'use client';

import { useEffect, useRef } from 'react';
import { STATE_PATHS, JH_CENTROID, MAP_VIEWBOX } from '@/lib/indiamap';

const PALETTE = ['#B7CDAE', '#E8A33D', '#F0E7B8', '#DCC2DE', '#9FB89A'];

function paletteColor(name: string, index: number) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTE[(hash + index) % PALETTE.length];
}

const JH_FILL = '#E0703D';
const JH_STROKE = '#7A2E10';

export default function IndiaMapFlat3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const jhRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      target.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);

    const start = performance.now();
    let rafId: number;

    function tick() {
      rafId = requestAnimationFrame(tick);

      current.current.x += (target.current.x - current.current.x) * 0.07;
      current.current.y += (target.current.y - current.current.y) * 0.07;

      const rotY = current.current.x * 24;
      const rotX = -current.current.y * 18;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      const t = (performance.now() - start) / 1000;
      const floatY = Math.sin(t * 1.6) * 5;

      if (jhRef.current) {
        jhRef.current.style.transform = `translateZ(72px) translateY(${floatY}px)`;
      }
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const otherStates = Object.keys(STATE_PATHS).filter((n) => n !== 'Jharkhand');
  const [cx, cy] = JH_CENTROID;
  const labelX = cx + 92;
  const labelY = cy - 78;

  return (
    <div
      ref={wrapRef}
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '1400px' }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-xl aspect-square"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* base layer: all other states, flat */}
        <svg
          viewBox={MAP_VIEWBOX}
          className="absolute inset-0 w-full h-full overflow-visible"
          style={{ transform: 'translateZ(0px)' }}
        >
          <defs>
            <filter id="mapDropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.4" floodColor="#00000055" />
            </filter>
            <filter id="groundBlur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          <g filter="url(#mapDropShadow)">
            {otherStates.map((name, i) => (
              <path
                key={name}
                d={STATE_PATHS[name]}
                fill={paletteColor(name, i)}
                stroke="#4A4A3E"
                strokeWidth={0.9}
                strokeLinejoin="round"
                opacity={0.92}
              />
            ))}
          </g>

          {/* soft ground shadow beneath the floating Jharkhand piece */}
          <ellipse
            cx={cx}
            cy={cy + 6}
            rx="30"
            ry="12"
            fill="#000000"
            opacity="0.3"
            filter="url(#groundBlur)"
          />
        </svg>

        {/* floating layer: Jharkhand, elevated in Z */}
        <div ref={jhRef} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          <svg viewBox={MAP_VIEWBOX} className="absolute inset-0 w-full h-full overflow-visible">
            <defs>
              <filter id="jhGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00000066" />
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#E0703D" floodOpacity="0.7" />
              </filter>
            </defs>

            <path
              d={STATE_PATHS['Jharkhand']}
              fill={JH_FILL}
              stroke={JH_STROKE}
              strokeWidth="1.8"
              strokeLinejoin="round"
              filter="url(#jhGlow)"
            />

            <circle cx={cx} cy={cy} r="4.5" fill="#FFF7EC" stroke={JH_STROKE} strokeWidth="1.4" />
            <circle cx={cx} cy={cy} r="9" fill="none" stroke="#E0703D" strokeWidth="1.2" opacity="0.55" />

            <line
              x1={cx + 6}
              y1={cy - 4}
              x2={labelX - 4}
              y2={labelY + 16}
              stroke="#4A4A3E"
              strokeWidth="1"
            />
            <rect
              x={labelX - 6}
              y={labelY - 16}
              width="108"
              height="30"
              rx="6"
              fill="#FFF7EC"
              stroke="#4A4A3E"
              strokeWidth="1"
            />
            <text
              x={labelX + 48}
              y={labelY + 3}
              textAnchor="middle"
              fontSize="15"
              fontFamily="'Fraunces', serif"
              fontWeight={600}
              fill="#3A241A"
            >
              Jharkhand
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}