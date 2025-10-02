import Image from "next/image";

export default function Underage() {
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
      </div>
    </div>
  );
}
