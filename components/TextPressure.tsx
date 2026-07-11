'use client';

import { useEffect, useRef } from 'react';
import { Roboto_Flex } from 'next/font/google';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  axes: ['wght', 'wdth'],
  display: 'swap',
});

interface Segment {
  text: string;
  color: string;
}

interface TextPressureProps {
  segments: Segment[];
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  radius?: number;
}

export default function TextPressure({
  segments,
  className = '',
  minWeight = 300,
  maxWeight = 900,
  radius = 220,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    lettersRef.current = Array.from(
      containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]')
    );

    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);

    function tick() {
      lettersRef.current.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(mouse.current.x - cx, mouse.current.y - cy);
        const t = Math.max(0, 1 - dist / radius);

        const weight = Math.round(minWeight + (maxWeight - minWeight) * t);
        const width = Math.round(85 + 45 * t);
        const scale = 1 + t * 0.35;

        el.style.fontVariationSettings = `'wght' ${weight}, 'wdth' ${width}`;
        el.style.transform = `scale(${scale})`;
      });
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [minWeight, maxWeight, radius]);

  return (
    <div ref={containerRef} className={`${robotoFlex.className} ${className}`}>
      {segments.map((seg, si) => (
        <span key={si} style={{ color: seg.color }}>
          {seg.text.split('').map((ch, i) => (
            <span
              key={`${si}-${i}`}
              data-letter
              style={{
                display: 'inline-block',
                transformOrigin: 'center bottom',
                fontVariationSettings: `'wght' ${minWeight}, 'wdth' 85`,
                willChange: 'transform, font-variation-settings',
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}