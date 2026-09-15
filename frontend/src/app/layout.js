import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Afsal | Portfolio",
  description: "Mohammed Afsal - Fullstack Developer Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
