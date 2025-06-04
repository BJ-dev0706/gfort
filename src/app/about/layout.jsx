import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "About Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Learn about Gfort, a premier tech agency with expert teams in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Our history, mission, and values.",
  keywords: "about gfort, tech agency, company history, tech solutions, 3D web, blockchain, AI, mobile development, digital innovation, tech company",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org/about"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org/about",
    title: "About Gfort - Innovative Tech Agency | Our Story",
    description: "Learn about Gfort, a multidisciplinary tech agency empowering bold ideas with transformative technology. Discover our mission, values and expertise.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org/about",
    title: "About Gfort - Innovative Tech Agency | Our Story",
    description: "Learn about Gfort, a multidisciplinary tech agency empowering bold ideas with transformative technology. Discover our mission, values and expertise.",
    images: ["assets/img/logo/logo.png"]
  }
};

const AboutLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default AboutLayout;