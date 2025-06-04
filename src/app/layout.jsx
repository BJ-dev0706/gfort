import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Chat } from "@/components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "Gfort - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
  description: "Gfort is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, Gfort Technologies",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org",
    title: "Gfort - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
    description: "Gfort is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org",
    title: "Gfort - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
    description: "Gfort is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Chat />
      </body>
    </html>
  );
}
