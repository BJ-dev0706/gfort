import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "Portfolio - Gfort",
  description: "View Gfort's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, Gfort Technologies",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org/portfolio"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org/portfolio",
    title: "Portfolio - Gfort",
    description: "View Gfort's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org/portfolio",
    title: "Portfolio - Gfort",
    description: "View Gfort's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};


const PortfolioLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default PortfolioLayout;