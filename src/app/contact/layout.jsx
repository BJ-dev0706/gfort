import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://gfort.org"),
  title: "Contact - Gfort | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Get in touch with Gfort's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
  keywords: "about gfort, tech agency, company history, tech solutions, 3D web, blockchain, AI, mobile development, digital innovation, tech company",
  authors: [{ name: "Gfort Technologies" }],
  alternates: {
    canonical: "https://gfort.org/contact"
  },
  openGraph: {
    type: "website",
    url: "https://gfort.org/contact",
    title: "Contact Gfort - Innovative Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Get in touch with Gfort's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "Gfort Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gfort.org/contact",
    title: "Contact Gfort - Innovative Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Get in touch with Gfort's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
    images: ["assets/img/logo/logo.png"]
  }
};

const ContactLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default ContactLayout;