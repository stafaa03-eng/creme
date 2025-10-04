import PhonePlayer from "../components/PhonePlayer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full bg-[#001000] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="text-center px-6 pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Crafted Flower. Clean Process.
          </h1>
          <p className="mt-3 text-neutral-300">
            Creme Cultivation • Quality content. Quality product.
          </p>
        </div>

        {/* Phone with spinning buds */}
        <div className="relative flex justify-center items-center py-20">
          {/* LEFT bud (match phone screen height) */}
          <img
            src="/assets/SpinningBud1-unscreen.gif"
            alt="Spinning bud left"
            className="
              pointer-events-none absolute z-10 hidden sm:block
              h-[620px] sm:h-[700px] md:h-[800px] w-auto
              right-[calc(50%+180px)] sm:right-[calc(50%+200px)] md:right-[calc(50%+230px)]
            "
          />

          <PhonePlayer />

          {/* RIGHT bud (match phone screen height) */}
          <img
            src="/assets/SpinningBud2-unscreen.gif"
            alt="Spinning bud right"
            className="
              pointer-events-none absolute z-10 hidden sm:block
              h-[620px] sm:h-[700px] md:h-[800px] w-auto
              left-[calc(50%+180px)] sm:left-[calc(50%+200px)] md:left-[calc(50%+230px)]
            "
          />
        </div>

        <div className="text-center text-sm text-neutral-500 pb-10">
          Shot on site • Strain highlights • No audio
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left brand */}
            <div className="flex items-center gap-4 justify-center md:justify-start mb-6 md:mb-0">
              <Image
                src="/assets/LOGO.jpg"
                alt="Creme Cultivation"
                width={48}
                height={48}
                className="rounded-full ring-1 ring-emerald-500/30"
              />
              <div className="leading-tight tracking-wide">
                <div className="text-base font-extrabold uppercase">CREME</div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest">Cultivation</div>
              </div>
            </div>

            {/* Right nav links */}
            <nav className="flex items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base flex-nowrap">
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/PrivacyPolicy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/TermsOfService.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition whitespace-nowrap"
              >
                Terms of Service
              </a>
              <Link href="/contact" className="hover:text-white transition whitespace-nowrap">
                Follow Us
              </Link>
            </nav>
          </div>

          {/* Divider */}
          <hr className="mt-8 border-white/10" />

          {/* Bottom text */}
          <div className="mt-6 text-center text-xs text-neutral-500 space-y-1">
            <div>© 2025 Creme Cultivation. All rights reserved.</div>
            <div className="text-neutral-600">Cultivating quality since day one.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
