import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JARAM - 한양대학교 ERICA 컴퓨터학회",
  description: "한양대학교 ERICA캠퍼스의 역사깊은 컴퓨터학회 JARAM입니다.",
  keywords: "한양대학교, ERICA, 컴퓨터학회, JARAM, 프로그래밍, 개발자, 학회",
  authors: [{ name: "JARAM" }],
  creator: "JARAM",
  publisher: "JARAM",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.jaram.net",
    siteName: "JARAM - 한양대학교 ERICA 컴퓨터학회",
    title: "JARAM - 한양대학교 ERICA 컴퓨터학회",
    description: "41년의 깊이, 함께 성장하는 사람들의 커뮤니티. 한양대학교 ERICA캠퍼스의 역사깊은 컴퓨터학회 JARAM입니다.",
    images: [
      {
        url: "https://www.jaram.net/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "JARAM - 한양대학교 ERICA 컴퓨터학회",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JARAM - 한양대학교 ERICA 컴퓨터학회",
    description: "41년의 깊이, 함께 성장하는 사람들의 커뮤니티. 한양대학교 ERICA캠퍼스의 역사깊은 컴퓨터학회 JARAM입니다.",
    images: ["https://www.jaram.net/images/og-image.png"],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
        {children}
      </body>
    </html>
  );
}
