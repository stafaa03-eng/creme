"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

function setCookie(name: string, value: string, maxAgeSeconds = 60 * 60 * 24 * 365) {
  document.cookie = `${name}=${value}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax; Secure`;
}

export default function Underage() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  function confirm() {
    if (!checked) return;
    setCookie("ageVerified", "true");
    router.replace("/"); // middleware will now allow full site
  }

  return (
    <div className="w-full h-full grid place-items-center bg-emerald-100 text-emerald-900 p-6 overflow-auto">
      <div className="max-w-3xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={56} height={56} className="rounded-full" />
          <div className="leading-none tracking-wide">
            <div className="text-lg font-extrabold">CREME</div>
            <div className="text-sm text-emerald-800/80">CULTIVATION</div>
          </div>
        </div>

        <h1 className="mb-3 text-5xl font-extrabold">This site is for 21+ only.</h1>
        <p className="mx-auto max-w-2xl text-emerald-800">
          Creme Cultivation content is intended for adults. Please exit the site if you are under 21.
        </p>

        {/* Reverify entry point */}
        <button
          onClick={() => setOpen(true)}
          className="mt-8 rounded-full bg-emerald-700 px-6 py-2 text-white hover:bg-emerald-800 transition"
        >
          Over 21 and misclicked?
        </button>
      </div>

      {/* Confirm modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-black shadow-2xl">
            <h2 className="text-xl font-bold mb-3">Confirm you are 21+</h2>
            <p className="text-sm text-neutral-600 mb-4">
              By continuing you confirm you are at least 21 years old and it is legal to view this content in your location.
            </p>

            <label className="flex items-center gap-2 text-sm mb-5">
              <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
              I confirm I am 21+.
            </label>

            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="rounded-full px-4 py-2 bg-neutral-100">
                Cancel
              </button>
              <button
                onClick={confirm}
                disabled={!checked}
                className={`rounded-full px-4 py-2 text-white ${checked ? "bg-emerald-700 hover:bg-emerald-800" : "bg-emerald-300 cursor-not-allowed"}`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
