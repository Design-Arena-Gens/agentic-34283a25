import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "North Star Roofing",
  description: "North Star Roofing brand identity showcase."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
