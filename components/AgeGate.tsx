"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

function setCookie(name: string, value: string, maxAgeSeconds = 60 * 60 * 24 * 365) {
  document.cookie = `${name}=${value}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax; Secure`;
}

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const v = getCookie("ageVerified"); // "true" | "false" | undefined
    // Prompt only when not explicitly false and not already verified
    if (v !== "true" && window.location.pathname === "/") setOpen(true);
  }, []);

  if (!open) return null;

  function yes() {
    setCookie("ageVerified", "true");
    setOpen(false);
    // stay on page
  }

  function no() {
    setCookie("ageVerified", "false");
    setOpen(false);
    router.replace("/underage");
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
          <button onClick={yes} className="rounded-full bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700 transition">
            Yes
          </button>
          <button onClick={no} className="rounded-full bg-emerald-100 px-6 py-2 text-emerald-900 hover:bg-emerald-200 transition">
            No
          </button>
        </div>

        <p className="text-center text-sm text-neutral-600">
          By entering this site you agree to our{" "}
          <a href="https://github.com/stafaa03-eng/CREME-support/blob/main/TermsOfService.md" target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="https://github.com/stafaa03-eng/CREME-support/blob/main/PrivacyPolicy.md" target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
