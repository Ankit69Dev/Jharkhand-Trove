'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CompassIcon } from 'lucide-react';
import PanoramaViewer from './Panoramaviewer';

interface Explore360ModalProps {
  name: string;
  lat: number;
  lng: number;
  panoramaUrl?: string;
  onClose: () => void;
}

type CheckState =
  | { status: 'checking' }
  | { status: 'available'; lat: number; lng: number }
  | { status: 'unavailable' }
  | { status: 'error' };

export default function Explore360Modal({
  name,
  lat,
  lng,
  panoramaUrl,
  onClose,
}: Explore360ModalProps) {
  const [check, setCheck] = useState<CheckState>({ status: 'checking' });

  useEffect(() => {
    // A real photo takes priority — skip the Street View check entirely.
    if (panoramaUrl) return;

    let cancelled = false;

    fetch(`/api/streetview-metadata?lat=${lat}&lng=${lng}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.available) {
          setCheck({
            status: 'available',
            lat: data.panoLat ?? lat,
            lng: data.panoLng ?? lng,
          });
        } else {
          setCheck({ status: 'unavailable' });
        }
      })
      .catch(() => {
        if (!cancelled) setCheck({ status: 'error' });
      });

    return () => {
      cancelled = true;
    };
  }, [lat, lng, panoramaUrl]);

  const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0F1C16] border border-[#2A3B31] rounded-2xl w-full max-w-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#22352B]">
            <p className="font-serif text-lg text-[#F3EEE1]">{name} — 360° view</p>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="aspect-video w-full bg-[#0A1410]">
            {panoramaUrl ? (
              <PanoramaViewer panoramaUrl={panoramaUrl} title={name} />
            ) : (
              <>
                {check.status === 'checking' && (
                  <div className="w-full h-full flex items-center justify-center text-[#5A6E60] text-sm font-sans">
                    Checking for imagery…
                  </div>
                )}

                {check.status === 'available' && embedKey && (
                  <iframe
                    title={`${name} street view`}
                    src={`https://www.google.com/maps/embed/v1/streetview?key=${embedKey}&location=${check.lat},${check.lng}&fov=90`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                )}

                {check.status === 'available' && !embedKey && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center px-8">
                    <CompassIcon size={22} className="text-[#5A6E60]" />
                    <p className="font-sans text-sm text-[#9BB2A0]">
                      Imagery exists for this location, but no
                      <code className="mx-1 text-[#E0A458]">NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY</code>
                      is set.
                    </p>
                  </div>
                )}

                {(check.status === 'unavailable' || check.status === 'error') && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center px-8">
                    <CompassIcon size={22} className="text-[#5A6E60]" />
                    <p className="font-sans text-sm text-[#9BB2A0]">
                      {check.status === 'error'
                        ? 'Could not reach the imagery service.'
                        : "No 360\u00B0 street-level imagery exists for this location yet. Add a panoramaUrl for this destination in exploreData.ts to show a real photo instead."}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}