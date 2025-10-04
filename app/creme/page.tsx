import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function CremePage() {
  return (
    <div className="min-h-screen w-full bg-[#001000] text-white relative overflow-hidden">
      {/* Gold ambient shimmer gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#001000]/80 via-transparent to-yellow-800/10 animate-pulse-slow" />


      {/* Centered Logo and Title */}
      <div className="flex flex-col justify-center items-center text-center pt-32 px-6">
        <Image
          src="/assets/CREMEProduct.jpg"
          alt="Creme Packaging"
          width={420}
          height={560}
          className="mb-10 drop-shadow-[0_0_90px_rgba(255,215,0,0.15)]"
        />


        {/* Shimmering Title */}
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 animate-gold-hover">
          CRÈME
        </h1>


        {/* Brand-forward tagline */}
        <p className="mt-6 max-w-xl text-sm sm:text-base text-yellow-100/85 leading-relaxed">
          The classiest. The newest. The most exclusive. Crème has arrived.
        </p>
        <p className="mt-2 text-yellow-100/70 italic">
          The Crème De La Crème.
        </p>


        {/* Subtle Gold Divider */}
        <div className="mt-10 h-[1px] w-48 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-fade-in" />


        {/* CTA button */}
        <Link
          href="/find-us"
          className="mt-14 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(234,179,8,0.6)] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Find CRÈME near you
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>


      {/* Ornamental SVGs (removed) */}
      <div className="hidden" />


      {/* Footer */}
      <footer className="mt-32 bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-8 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* left brand */}
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={52} height={52} className="rounded-full" />
              <div className="leading-none tracking-wide">
                <div className="text-base font-extrabold">CREME</div>
                <div className="text-sm text-neutral-400">CULTIVATION</div>
              </div>
            </div>


            {/* right links */}
            <nav className="flex items-center gap-12 text-base">
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/PrivacyPolicy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/TermsOfService.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms of Service
              </a>
            </nav>
          </div>


          <hr className="mt-10 border-white/10" />


          <div className="mt-6 text-center text-sm text-neutral-400 space-y-1">
            <div>© 2025 Creme Cultivation. All rights reserved.</div>
            <div className="text-neutral-500">Cultivating quality since day one.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
