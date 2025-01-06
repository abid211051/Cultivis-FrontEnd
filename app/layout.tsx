import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultivis",
  description: "A helper for better farming and community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
