"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  return document.cookie.split("; ").find((r) => r.startsWith(name + "="))?.split("=")[1];
}
function setCookie(name: string, value: string, maxAgeSeconds = 60 * 60 * 24 * 365) {
  const secure = typeof window !== "undefined" && window.location.protocol === "https:";
  document.cookie = `${name}=${value}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax${secure ? "; Secure" : ""}`;
}

export default function AgeGate() {
  const router = useRouter();
  const pathname = usePathname();

  // Decide visibility synchronously to avoid a “stuck” overlay after clicking Yes.
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return pathname === "/" && getCookie("ageVerified") !== "true";
  });

  // Keep body scroll clean and respond to cross-tab changes.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onStorage = (e: StorageEvent) => {
      if (e.key === "ageVerified" || e.key === null) {
        // Any cookie change via another tab → re-evaluate
        setOpen(pathname === "/" && getCookie("ageVerified") !== "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("storage", onStorage);
    };
  }, [open, pathname]);

  if (!open || pathname !== "/") return null;

  function yes() {
    setCookie("ageVerified", "true");
    // force a full reload so any overlay/state is cleared immediately
    if (typeof window !== "undefined") window.location.reload();
  }
  function no() {
    setCookie("ageVerified", "false");
    // full-load into the underage page
    if (typeof window !== "undefined") window.location.href = "/underage";
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4"
      // If for any reason state flips before unmount, ensure clicks pass through.
      style={{ pointerEvents: open ? "auto" : "none" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center gap-3">
          <Image src="/assets/LOGO.jpg" alt="Creme Cultivation" width={36} height={36} className="rounded-full" />
          <div className="leading-none tracking-wide text-black">
            <div className="text-sm font-extrabold">CREME</div>
            <div className="text-xs text-neutral-500">CULTIVATION</div>
          </div>
        </div>

        <h2 className="mb-4 text-center text-2xl font-extrabold text-emerald-900">Are you 21 or over?</h2>

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
