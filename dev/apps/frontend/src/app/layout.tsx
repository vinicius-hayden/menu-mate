import type { Metadata } from "next";
import "./globals.css";
// import { Montserrat } from "next/font/google";


export const metadata: Metadata = {
  title: "MenuMate",
  description: "Basic Application",
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
