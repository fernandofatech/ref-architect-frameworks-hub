import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architect Frameworks Hub — Fernando Azevedo",
  description:
    "A fast reference for AWS Well-Architected, TOGAF, C4, ArchiMate, DDD, 12-Factor and Cynefin.",
  authors: [{ name: "Fernando Francisco Azevedo", url: "https://fernando.moretes.com" }],
  openGraph: {
    title: "Architect Frameworks Hub",
    description: "AWS Well-Architected, TOGAF, C4, ArchiMate, DDD and more.",
    url: "https://frameworks.moretes.com",
    siteName: "Architect Frameworks Hub",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
