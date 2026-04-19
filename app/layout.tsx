import type { Metadata } from "next";
import { Lexend, Merriweather } from "next/font/google";
import "./globals.css";
import RootLayoutWrapper from "./root-layout";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courtney Steele",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
