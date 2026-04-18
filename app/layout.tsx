import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lauren Parker | Luxury Web Designer & Developer",
  description:
    "Luxury web design and development portfolio by Lauren Parker.",
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