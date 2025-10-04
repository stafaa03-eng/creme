"use client";
import { useRef, useEffect } from "react";

export default function PhonePlayer() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, []);

  return (
    <div className="relative mx-auto w-[320px] sm:w-[360px] md:w-[420px]">
      {/* screen */}
      <div className="relative h-[640px] sm:h-[720px] md:h-[820px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <video
          ref={ref}
          src="/assets/SickEdit.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* thin outline + notch */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 rounded-[40px] ring-[6px] ring-black/90" />
        <div className="absolute left-1/2 top-3 -translate-x-1/2 h-6 w-24 rounded-full bg-black/90" />
      </div>
    </div>
  );
}
