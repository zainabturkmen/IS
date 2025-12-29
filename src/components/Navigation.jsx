import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import CV from "../assets/CV.pdf";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg">IS</span>
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-white/20" />
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                Irfan Sadat
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <motion.a
                href={CV}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-20 bottom-0 w-full max-w-sm bg-slate-900/90 backdrop-blur-xl border-l border-white/5 p-6"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-left px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href={CV}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
