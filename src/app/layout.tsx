import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleeza Maryam | Data Scientist & AI Enthusiast",
  description: "Portfolio of Aleeza Maryam - Computer Science Undergraduate, Data Analyst, and AI/ML Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} gradient-bg`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}