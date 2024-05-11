import type { Metadata } from "next";

import MainHeader from "@/components/main-header/main-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Burger",
  description: "Site about best burger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
