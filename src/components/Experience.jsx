import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Peace Global Logistics",
      role: "Head of Designer",
      period: "2024 - Present",
      description:
        "Led the strategic direction of the brand's visual identity and internal branding initiatives. Leveraging motion design to create compelling visual experiences.",
      logo: "PGL",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      company: "TGL Supplies",
      role: "Creative Graphic Designer",
      period: "2024",
      description:
        "Played a pivotal role in enhancing the visual presence and brand identity. Conceptualized and designed a wide range of marketing materials.",
      logo: "TGL",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      company: "PGT Tech",
      role: "Creative Graphic Designer",
      period: "2024",
      description:
        "Contributed to the visual identity and marketing efforts through innovative design solutions. Collaborated with teams to create compelling graphics.",
      logo: "PGT",
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      company: "Ayenda Consulting",
      role: "Founder & Designer",
      period: "2025",
      description:
        "As founder and graphic designer, I lead the creation of innovative and impactful designs that represent our vision, delivering tailored solutions.",
      logo: "AC",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      company: "Misgaran",
      role: "Creative Graphic Designer",
      period: "2024",
      description:
        "Specialized in crafting innovative visual solutions for branding and marketing initiatives. Collaborated closely with teams to ensure designs aligned with strategic goals.",
      logo: "MS",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      company: "Mobay Group",
      role: "Freelance Graphic Designer",
      period: "2023 - 2024",
      description:
        "Collaborated directly with clients to fulfill their design requirements, focusing on creating compelling marketing materials and conceptualizing branding elements.",
      logo: "MG",
      gradient: "from-rose-400 to-rose-600",
    },
    {
      company: "Pivotal B2B Media",
      role: "Creative Graphic Designer",
      period: "2022 - 2023",
      description:
        "Honed skills over the course of one year, contributing to the company's visual identity and brand presence. Created engaging designs for various B2B marketing materials.",
      logo: "PB",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      company: "Ulearna.com",
      role: "Creative Graphic Designer",
      period: "2022 - 2023",
      description:
        "Transformed learning materials with captivating graphics, boosting user engagement by 20%. Designed promotional graphics, resulting in a 15% increase in social media engagement.",
      logo: "UL",
      gradient: "from-amber-400 to-amber-600",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050508] via-slate-900/20 to-[#050508]">
        <div className="absolute top-1/3 left-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-100 h-100 bg-cyan-500/10 rounded-full blur-[150px]" />
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
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
          >
            Career Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional journey and the amazing companies I've
            worked with
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full bg-linear-to-br ${exp.gradient} ring-4 ring-slate-900`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative p-6 lg:p-8 rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500"
                  >
                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-linear-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Logo */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${exp.gradient} p-0.5 -shrink-0`}
                      >
                        <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {exp.logo}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white truncate">
                          {exp.company}
                        </h3>
                        <p
                          className={`text-sm font-medium bg-linear-to-r ${exp.gradient} bg-clip-text text-transparent`}
                        >
                          {exp.role}
                        </p>
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
