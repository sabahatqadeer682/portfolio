import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabahat Qadeer - Full Stack Developer",
  description:
    "Portfolio of Sabahat Qadeer - Full Stack Developer specializing in MERN stack and React Native mobile development.",
  keywords: [
    "Sabahat Qadeer",
    "Full Stack Developer",
    "MERN",
    "React Native",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Sabahat Qadeer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-mono text-slate-200 selection:bg-cyan-500/40">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
