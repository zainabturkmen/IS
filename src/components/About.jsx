import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Video, Box, Share2 } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Graphic Design', percentage: 95, icon: Palette, color: 'cyan' },
    { name: 'Videography', percentage: 85, icon: Video, color: 'blue' },
    { name: '3D Design', percentage: 90, icon: Box, color: 'indigo' },
    { name: 'Social Media Marketing', percentage: 80, icon: Share2, color: 'purple' },
  ];

  const colorClasses = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    indigo: 'from-indigo-400 to-indigo-600',
    purple: 'from-purple-400 to-purple-600',
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]">
        <div className="absolute top-1/2 left-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-600/10 rounded-full blur-[150px]" />
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
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Know Me{' '}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Better
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Experienced Graphic Designer with{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                6+ Years
              </span>{' '}
              of Excellence
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Experienced graphic designer with +6 years of experience proficient in Adobe Creative Suite, 
                brand identity development, typography, print and digital design, illustration, UI/UX design, 
                photo editing, Motion design, visual communication, attention to detail, collaboration, and 
                problem-solving.
              </p>
              <p>
                Let's create impactful visuals together. I transform complex ideas into engaging visual 
                experiences that capture attention and communicate effectively.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Adobe Suite', value: 'Expert' },
                { label: 'Brand Identity', value: 'Specialist' },
                { label: 'UI/UX Design', value: 'Advanced' },
                { label: 'Motion Graphics', value: 'Professional' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/2 border border-white/2 backdrop-blur-sm"
                >
                  <p className="text-cyan-400 font-semibold text-sm">{fact.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{fact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card */}
            <div className="p-8 rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5">
              <h4 className="text-xl font-semibold text-white mb-8">Professional Skills</h4>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${colorClasses[skill.color]} p-0.5`}>
                          <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center">
                            <skill.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-bold bg-linear-to-r ${colorClasses[skill.color]} bg-clip-text text-transparent`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-linear-to-r ${colorClasses[skill.color]}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -inset-4 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}