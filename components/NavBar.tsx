"use client";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white text-black">
      {/* relative container lets us absolutely center the link group */}
      <div className="relative mx-auto flex h-16 max-w-6xl items-center px-4">
        {/* left brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/LOGO.jpg"
            alt="Creme Cultivation"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <div className="leading-none tracking-wide">
            <div className="text-sm font-extrabold">CREME</div>
            <div className="text-xs text-neutral-500">CULTIVATION</div>
          </div>
        </Link>

        {/* centered links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 text-sm font-semibold">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative py-2 after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:scale-x-0 after:bg-emerald-500 after:transition hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
