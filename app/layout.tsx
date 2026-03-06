import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Portfolio | Ali Hassan",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-sans bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col relative">{children}</div>
      </body>
    </html>
  );
}
