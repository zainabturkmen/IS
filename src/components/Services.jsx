import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Share2, Play, Camera, Film, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'We provide Graphic Design services, with the best designers creating stunning visuals for your brand.',
      gradient: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'We provide UI/UX Design services, and of course with the best quality user experiences.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'We provide Social Media Marketing services, with the best Marketers to grow your online presence.',
      gradient: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Play,
      title: 'Motion Graphics',
      description: 'Create a platform with the best and coolest quality motion graphics from us.',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'We provide Photography services, and of course with the best quality captures.',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      icon: Film,
      title: 'Videography',
      description: 'Create a platform with the best and coolest quality video content from us.',
      gradient: 'from-rose-400 to-rose-600',
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050508] via-slate-900/30 to-[#050508]">
        <div className="absolute top-1/4 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-150 h-125 bg-cyan-500/10 rounded-full blur-[150px]" />
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
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
          >
            What I Do
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming your ideas into stunning visual experiences with professional design services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 mb-6 rounded-2xl bg-linear-to-br ${service.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center group-hover:bg-slate-900/80 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}