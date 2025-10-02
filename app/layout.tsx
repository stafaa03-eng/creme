import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creme Cultivation",
  description: "Quality content. Quality product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <NavBar />
        <main className="grid min-h-[calc(100vh-4rem)] place-items-center">{children}</main>
      </body>
    </html>
  );
}
