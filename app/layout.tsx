import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lauren Parker | Full Stack Developer & Luxury Web Designer",
  description:
    "Full stack developer and luxury web designer building modern, responsive websites with React, Next.js, Supabase, and refined visual design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}