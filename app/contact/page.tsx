import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-black">
      {/* HERO with background image (logo only above, no brand text) */}
      <section className="relative h-72 sm:h-80 md:h-96 w-full">
        <Image src="/assets/RandomBud.jpg" alt="Creme Cultivation" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 grid place-items-center text-center text-white">
          <div>
            <div className="mb-4 flex items-center justify-center">
              <Image src="/assets/LOGO.jpg" alt="Logo" width={56} height={56} className="rounded-full ring-2 ring-white/30" />
            </div>
            <p className="text-white/80">Let’s Connect</p>
            <h1 className="mt-2 text-5xl font-extrabold">Contact</h1>
          </div>
        </div>
      </section>

      {/* INFO CARD (no overlap) */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 mt-16 mb-16">
        <div className="rounded-2xl bg-black text-white p-9 md:p-12 shadow-[0_28px_90px_-24px_rgba(0,0,0,0.45)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-3 text-2xl font-semibold">
                <MapPin className="h-7 w-7" />
                <span>Address</span>
              </div>
              <p className="text-neutral-300">
                1234 Greenhouse Way,<br /> Detroit, MI 48201
              </p>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3 text-2xl font-semibold">
                <Phone className="h-7 w-7" />
                <span>Phone</span>
              </div>
              <Link href="tel:+13135551234" className="underline underline-offset-4">
                (313) 555-1234
              </Link>
            </div>
            <div>
              <div className="mb-3 mt-1 flex items-center gap-3 text-2xl font-semibold">
                <Mail className="h-7 w-7" />
                <span>Email</span>
              </div>
              <Link href="mailto:hello@cremecultivation.com" className="underline underline-offset-4">
                hello@cremecultivation.com
              </Link>
            </div>
            <div>
              <div className="mb-3 mt-1 text-2xl font-semibold">Social Media</div>
              <div className="flex items-center gap-5">
                <Link href="https://www.instagram.com/cremecultivation/?hl=en" target="_blank" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-8 py-14">
          <div className="flex items-center justify-between">
            {/* left brand */}
            <div className="flex items-center gap-4">
              <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={52} height={52} className="rounded-full" />
              <div className="leading-none tracking-wide">
                <div className="text-base font-extrabold">CREME</div>
                <div className="text-sm text-neutral-400">CULTIVATION</div>
              </div>
            </div>

            {/* right links */}
            <nav className="flex items-center gap-12 text-base">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </nav>
          </div>

          {/* single divider */}
          <hr className="mt-10 border-white/10" />

          {/* © row */}
          <div className="mt-6 text-center text-sm text-neutral-400 space-y-1">
            <div>© 2025 Creme Cultivation. All rights reserved.</div>
            <div className="text-neutral-500">Cultivating quality since day one.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
