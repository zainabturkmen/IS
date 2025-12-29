import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sayedirfansadat2022@gmail.com",
      href: "mailto:sayedirfansadat2022@gmail.com",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+93 70 106 1530",
      href: "tel:+93701061530",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kabul Afghanistan",
      href: "#",
      gradient: "from-indigo-400 to-indigo-600",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sayed-irfan-sadat-335890310",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sayedirfan.sadat",
      label: "Instagram",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/15tzARYMJG/",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]">
        <div className="absolute bottom-0 left-1/4 w-150 h-150 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision
            to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.gradient} p-0.5`}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

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
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${social.gradient} p-0.5`}
                >
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center hover:bg-slate-900/50 transition-colors">
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-xl -z-10" />

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                />

                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
