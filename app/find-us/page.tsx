import Image from "next/image";
import Link from "next/link";


export default function FindUsPage() {
  const banners = [
    "/assets/FindUs1.jpg",
    "/assets/FindUs2.jpg",
    "/assets/FindUs3.jpg"
  ];


  return (
    <div className="min-h-screen w-full bg-[#001000] text-white overflow-x-hidden relative">
      {/* Glow FX */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#001000]/80 via-transparent to-emerald-900/10 animate-pulse-slow z-0" />


      {/* Hero Intro */}
      <section className="relative z-10 text-center pt-32 pb-10 px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-lime-400 to-emerald-200 animate-gold-hover drop-shadow-[0_0_10px_rgba(0,255,128,0.2)]">
          WHERE TO FIND CRÈME
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80 italic">
          We are stocked in 50+ dispensaries and growing. Here are just a few of our retail partners:
        </p>
      </section>


      {/* Banners */}
      <section className="relative z-10 flex flex-col items-center gap-16 px-6 pb-24">
        {banners.map((src, i) => (
          <div
            key={src}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_20px_80px_-10px_rgba(0,255,128,0.2)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={src}
              alt={`Dispensary Banner ${i + 1}`}
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </section>


      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-8 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={52} height={52} className="rounded-full" />
              <div className="leading-none tracking-wide">
                <div className="text-base font-extrabold">CREME</div>
                <div className="text-sm text-neutral-400">CULTIVATION</div>
              </div>
            </div>
            <nav className="flex items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base flex-nowrap">
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/PrivacyPolicy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/stafaa03-eng/CREME-support/blob/main/TermsOfService.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                Terms of Service
              </a>
              <Link href="/contact" className="hover:underline whitespace-nowrap">
                Follow Us
              </Link>
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
