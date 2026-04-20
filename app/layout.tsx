import type { Metadata } from "next";
import { Lexend, Merriweather, Metal_Mania } from "next/font/google";
import "./globals.css";
import RootLayoutWrapper from "./root-layout";
import { GoogleAnalytics } from "@next/third-parties/google";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});
const metalMania = Metal_Mania({
  weight: ["400"],
  variable: "--font-metalmania",
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
      className={`${lexend.variable} ${merriweather.variable} ${metalMania.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
      <GoogleAnalytics gaId="G-YJDR2VKJ0E" />
    </html>
  );
}
