"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const v = typeof window !== "undefined" && localStorage.getItem("ageVerified");
    if (v !== "true") setOpen(true);
  }, []);

  if (!open) return null;

  function yes() {
    localStorage.setItem("ageVerified", "true");
    setOpen(false);
  }
  function no() {
    localStorage.setItem("ageVerified", "false");
    setOpen(false);               // close the box
    router.push("/underage");     // then go to the underage screen
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center gap-3">
          <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={36} height={36} className="rounded-full" />
          <div className="leading-none tracking-wide text-black">
            <div className="text-sm font-extrabold">CREME</div>
            <div className="text-xs text-neutral-500">CULTIVATION</div>
          </div>
        </div>

        <h2 className="mb-4 text-center text-2xl font-extrabold text-emerald-900">
          Are you 21 or over?
        </h2>

        <div className="mb-5 flex items-center justify-center gap-3">
          <button
            onClick={yes}
            className="rounded-full bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700 transition"
          >
            Yes
          </button>
          <button
            onClick={no}
            className="rounded-full bg-emerald-100 px-6 py-2 text-emerald-900 hover:bg-emerald-200 transition"
          >
            No
          </button>
        </div>

        <p className="text-center text-sm text-neutral-600">
          By entering this site you agree to our{" "}
          <a href="/terms" className="font-semibold underline">Terms of Use</a> and{" "}
          <a href="/privacy" className="font-semibold underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
