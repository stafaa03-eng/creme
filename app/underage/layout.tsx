import "../globals.css";
export const metadata = { title: "21+ Required" };

export default function UnderageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-emerald-900 text-white h-[100dvh] overflow-hidden">
        {/* no NavBar, no AgeGate here */}
        {children}
      </body>
    </html>
  );
}
