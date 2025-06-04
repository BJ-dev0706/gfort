import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "Services - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Explore Gfort's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, Gfort Technologies",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org/services"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org/services",
    title: "Services - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Explore Gfort's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org/services",
    title: "Services - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Explore Gfort's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
    images: ["assets/img/logo/logo.png"]
  }
};

const ServicesLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default ServicesLayout;