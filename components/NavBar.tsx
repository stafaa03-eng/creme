"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
  { href: "/creme", label: "CRÈME", special: true },
];

// Tap-only navigation helper
function MobileTapLink({
  href,
  className,
  children,
  onTap,
}: React.PropsWithChildren<{ href: string; className?: string; onTap?: () => void }>) {
  const router = useRouter();
  const start = useRef<{ x: number; y: number } | null>(null);

  const go = () => {
    onTap?.();
    router.push(href);
  };

  return (
    <a
      href={href}
      className={className}
      onPointerDown={(e) => (start.current = { x: e.clientX, y: e.clientY })}
      onPointerUp={(e) => {
        const s = start.current;
        if (!s) return;
        const dx = Math.abs(e.clientX - s.x);
        const dy = Math.abs(e.clientY - s.y);
        start.current = null;
        if (dx < 6 && dy < 6) {
          e.preventDefault();
          go();
        }
      }}
      onTouchEnd={(e) => {
        if (e.changedTouches?.[0] && start.current) {
          const t = e.changedTouches[0];
          const dx = Math.abs(t.clientX - start.current.x);
          const dy = Math.abs(t.clientY - start.current.y);
          start.current = null;
          if (dx < 6 && dy < 6) {
            e.preventDefault();
            go();
          }
        }
      }}
    >
      {children}
    </a>
  );
}

export default function NavBar() {
  const railRef = useRef<HTMLDivElement>(null);

  // restore scroll position once on mount
  useEffect(() => {
    const x = Number(sessionStorage.getItem("navScrollX") || "0");
    if (railRef.current) railRef.current.scrollLeft = x;
  }, []);

  // keep the latest position saved while user scrolls
  const remember = () => {
    const el = railRef.current;
    if (el) sessionStorage.setItem("navScrollX", String(el.scrollLeft));
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white text-black">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        {/* MOBILE */}
        <div className="flex w-full items-center md:hidden">
          <Link href="/" className="flex min-w-[35%] basis-[35%] items-center gap-3">
            <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={36} height={36} className="rounded-full" priority />
            <div className="leading-none tracking-wide">
              <div className="text-sm font-extrabold">CREME</div>
              <div className="text-xs text-neutral-500">CULTIVATION</div>
            </div>
          </Link>

          {/* scrollable link rail */}
          <div
            ref={railRef}
            onScroll={remember}
            className="
              min-w-0 flex-1 basis-[65%] overflow-x-auto no-scrollbar whitespace-nowrap pl-4
              [touch-action:pan-x] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch]
            "
          >
            <div className="inline-flex gap-6">
              {links.map((l) => (
                <MobileTapLink
                  key={l.href}
                  href={l.href}
                  onTap={remember}
                  className={
                    (l.special
                      ? "text-[gold] font-extrabold tracking-wide [text-shadow:_0_0_4px_#10b981,_0_0_6px_#10b981]"
                      : "relative after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-0.5 after:scale-x-0 after:bg-emerald-500 after:transition hover:after:scale-x-100") +
                    " block shrink-0 py-2"
                  }
                >
                  {l.label}
                </MobileTapLink>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden w-full items-center md:flex">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={36} height={36} className="rounded-full" priority />
            <div className="leading-none tracking-wide">
              <div className="text-sm font-extrabold">CREME</div>
              <div className="text-xs text-neutral-500">CULTIVATION</div>
            </div>
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 text-sm font-semibold">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  l.special
                    ? "text-[gold] font-extrabold tracking-wide transition hover:scale-105 [text-shadow:_0_0_4px_#10b981,_0_0_6px_#10b981]"
                    : "relative py-2 after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:scale-x-0 after:bg-emerald-500 after:transition hover:after:scale-x-100"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
