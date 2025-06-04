import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "Team - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Meet the talented team behind Gfort - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, Gfort Technologies",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org/team"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org/team",
    title: "Team - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Meet the talented team behind Gfort - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org/team",
    title: "Team - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Meet the talented team behind Gfort - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};


const TeamLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default TeamLayout;