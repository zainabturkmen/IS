import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import IM from "../assets/IM.png";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Graphic Designer",
    "UI/UX Designer",
    "Motion Designer",
    "3D Artist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-indigo-500/10 rounded-full blur-[100px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <span className="text-xl">👋</span>
              <span className="text-gray-300 text-sm">Hello, Welcome!</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              I'm Sayed Irfan
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Sadat
              </span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-10 mb-6 overflow-hidden"
            >
              <motion.p
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl font-medium bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Transforming Ideas into Engaging Visual Experiences. Crafting
              Immersive 3D Visuals and Engaging Graphic Designs. Creating
              Dynamic Motion Graphics.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Portfolio
                <span className="text-lg">↗</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/15tzARYMJG/?mibextid=wwXIfr",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sayedirfan.sadat?igsh=a3l1czV1cjdlNnln&utm_source=qr",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/posts/sayed-irfan-sadat-335890310_colorgrading-afghanistan-visualart-activity-7315974974815547393-8ICyhttps://www.linkedin.com/in/sayed-irfan-sadat-335890310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-75 sm:w-100 h-75 sm:h-100 bg-linear-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-[60px]" />
            </div>

            {/* Profile Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl opacity-20 blur-xl" />
              <div className="absolute -inset-1 bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl opacity-50" />

              {/* Glass Card */}
              <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={IM}
                    alt="Sayed Irfan Sadat"
                    className="w-80 sm:w- h-80 sm:h-100 object-cover object-top"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#050508]/80 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 top-1/4 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20"
                >
                  <p className="text-cyan-400 font-bold text-lg">6+</p>
                  <p className="text-gray-300 text-xs">Years Experience.</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
