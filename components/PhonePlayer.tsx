"use client";
import { useRef, useEffect } from "react";

export default function PhonePlayer() {
  const ref = useRef<HTMLVideoElement>(null);

  // ensure autoplay works when tab refocuses
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
      {/* phone body */}
      <div className="relative h-[640px] sm:h-[720px] md:h-[820px] rounded-[36px] border-[12px] border-black bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* screen */}
        <div className="absolute inset-[10px] rounded-[24px] overflow-hidden bg-black">
          <video
            ref={ref}
            src="/assets/SickEdit.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* subtle gradient removed — using solid black */}
        </div>

        {/* notch */}
        <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 h-5 w-36 rounded-b-2xl bg-black" />

        {/* side buttons (decorative) */}
        <div className="pointer-events-none absolute -left-2 top-28 h-16 w-1.5 rounded-full bg-neutral-800" />
        <div className="pointer-events-none absolute -right-2 top-24 h-10 w-1.5 rounded-full bg-neutral-800" />
        <div className="pointer-events-none absolute -right-2 top-40 h-20 w-1.5 rounded-full bg-neutral-800" />
      </div>
    </div>
  );
}
