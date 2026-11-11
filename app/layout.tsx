import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gafin Bagoes Syahputra | Creative Developer",
  description:
    "Personal portfolio of Gafin Bagoes Syahputra — Programmer, Game Developer, and 3D Designer.",
  applicationName: "GBS Portfolio"
};

export const viewport: Viewport = {
  themeColor: "#070914",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
