'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    pannellum: {
      viewer: (
        id: string,
        config: Record<string, unknown>
      ) => { destroy: () => void };
    };
  }
}

interface PanoramaViewerProps {
  panoramaUrl: string;
  title: string;
}

export default function PanoramaViewer({ panoramaUrl, title }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<{ destroy: () => void } | null>(null);
  const scriptLoadedRef = useRef(false);

  function init() {
    if (!containerRef.current || !window.pannellum) return;
    viewerRef.current = window.pannellum.viewer(containerRef.current.id, {
      type: 'equirectangular',
      panorama: panoramaUrl,
      autoLoad: true,
      title,
      compass: false,
    });
  }

  useEffect(() => {
    if (scriptLoadedRef.current && window.pannellum) {
      init();
    }
    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panoramaUrl]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="afterInteractive"
        onLoad={() => {
          scriptLoadedRef.current = true;
          init();
        }}
      />
      <div
        ref={containerRef}
        id={`panorama-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="w-full h-full"
      />
    </>
  );
}