import Image from "next/image";
import Link from "next/link";


const gallery = [
  {
    src: "/assets/CremeDeLaCremeBud.jpg",
    alt: "Creme De La Creme Bud",
    caption: "Creme De La Creme"
  },
  {
    src: "/assets/LemonCherryBud.jpg",
    alt: "Lemon Cherry Bud",
    caption: "Lemon Cherry, zested and ready"
  },
  {
    src: "/assets/CremeGoodGoodBud.jpg",
    alt: "Creme Good Good Bud",
    caption: "Stone-cold stacks"
  },
  {
    src: "/assets/ProperFlushBud.jpg",
    alt: "Proper Flush Bud",
    caption: "Proper Flush"
  },
  {
    src: "/assets/GrowingNursery.jpg",
    alt: "Nursery Growth",
    caption: "Vegging out in the nursery"
  },
  {
    src: "/assets/RandomBud.jpg",
    alt: "Random Bud",
    caption: "Racks on racks of green"
  },
];


export default function GalleryPage() {
  return (
    <div className="self-stretch w-full min-h-[calc(100vh-4rem)] bg-[#001000] text-white flex flex-col">
      {/* main content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Gallery</h1>
          <p className="text-neutral-400 mt-2">From nursery to harvest — no filters, just flower.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm text-white/90">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* footer stays identical but pinned to bottom */}
      <footer className="bg-black text-white mt-0 w-full">
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
