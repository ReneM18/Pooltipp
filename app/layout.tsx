import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/lib/UserContext";
import Navbar from "@/components/Navbar";
import NavTabs from "@/components/NavTabs";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PoolTipp",
  description: "Das Social-Tippspiel für echte Sportfans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="font-body min-h-screen bg-pitch text-ink antialiased">
        <UserProvider>
          <Navbar />
          <NavTabs />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
