import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google"; // Import Google Fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Special Question 💌",
  description: "Made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${greatVibes.variable} antialiased bg-[#fdf2f8] text-rose-950 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
