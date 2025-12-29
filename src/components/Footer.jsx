import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/posts/sayed-irfan-sadat-335890310_colorgrading-afghanistan-visualart-activity-7315974974815547393-8ICyhttps://www.linkedin.com/in/sayed-irfan-sadat-335890310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sayedirfan.sadat?igsh=a3l1czV1cjdlNnln&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/15tzARYMJG/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: Mail,
      href: "mailto:sayedirfansadat2022@gmail.com",
      label: "Email",
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-[#050508]" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">IS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Sayed Irfan Sadat
                </h3>
                <p className="text-gray-400 text-sm">
                  Creative Graphic Designer
                </p>
              </div>
            </motion.div>
            <p className="text-gray-400 max-w-md mb-6">
              Transforming ideas into engaging visual experiences. Specializing
              in graphic design, UI/UX, motion graphics, and brand identity
              development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:sayedirfansadat@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  sayedirfansadat2022@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+93 70 106 1530"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +93 700 000 000
                </a>
              </li>
              <li>Kabul Afghanistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm flex items-center gap-1"
            >
              © {new Date().getFullYear()} Sayed Irfan Sadat. All rights
              reserved.
            </motion.p>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
