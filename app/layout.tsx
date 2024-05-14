import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natalie King Marketing",
  description: "HubSpot Specialist | Digital Marketing | Marketing Operations"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
