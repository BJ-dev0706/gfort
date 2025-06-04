"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbMail,
  TbPhone,
  TbMenu2,
} from "react-icons/tb";
import { fadeInUp, staggerContainer, scaleOnHover, scaleOnHoverActive } from "../../lib/animations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      id="header" 
      className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="topbar bg-[#464646] text-white py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="container mx-auto px-16 flex justify-center md:justify-between items-center">
          <motion.div 
            className="contact-info flex items-center space-x-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex items-center"
              variants={fadeInUp}
            >
              <TbMail className="w-4 h-4 mr-2" />
              <a 
                href="mailto:info@gfort.org"
                className="hover:text-white/80 transition-colors duration-300"
              >
                info@gfort.org
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={fadeInUp}
            >
              <TbPhone className="w-4 h-4 mr-2" />
              <span>(+34) 603814470</span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="social-links hidden md:flex items-center space-x-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "https://x.com/gfort_agency", icon: TbBrandTwitter },
              { href: "https://www.facebook.com", icon: TbBrandFacebook },
              { href: "https://www.instagram.com/gfort_agency/", icon: TbBrandInstagram },
              { href: "https://www.linkedin.com", icon: TbBrandLinkedin }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors duration-300"
                variants={fadeInUp}
                whileHover={scaleOnHoverActive}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="branding bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="container mx-auto px-16 py-4 flex items-center justify-between">
          <motion.div
            whileHover={scaleOnHover}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="logo flex items-center">
              <Image src="/img/logo/logo-dark.png" alt="Gfort" width={100} height={100} className="w-auto h-auto" />
            </Link>
          </motion.div>

          <motion.nav 
            id="navmenu" 
            className="navmenu hidden lg:block"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp}>
                  <Link 
                    href={item.href}
                    className="text-gray-700 hover:text-[#059652] font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#059652] group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.button 
            className="mobile-nav-toggle lg:hidden p-2"
            whileHover={scaleOnHoverActive}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <TbMenu2 className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 