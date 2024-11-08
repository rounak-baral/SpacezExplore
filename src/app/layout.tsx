import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./(explore)/components/Header";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  weight: '400',
  subsets: ['latin'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spacez Explore",
  description: "Discover and explore with Spacez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className={urbanist.className}>
          {children}
        </main>
      </body>
    </html>
  );
}
