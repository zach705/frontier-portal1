import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service Bulletin / Unit Docs Portal",
  description: "Serial-first unit docs with XLSX import, demo mode, and admin helper."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
