import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Briefcase, Award } from 'lucide-react';

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { 
      icon: Users, 
      value: 100, 
      suffix: '+', 
      label: 'Satisfied Clients',
      gradient: 'from-cyan-400 to-cyan-600'
    },
    { 
      icon: Star, 
      value: 150, 
      suffix: '+', 
      label: 'Reviews Given',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Briefcase, 
      value: 200, 
      suffix: '+', 
      label: 'Projects Completed',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    { 
      icon: Award, 
      value: 6, 
      suffix: '+', 
      label: 'Years Experience',
      gradient: 'from-purple-400 to-purple-600'
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050508] via-slate-900/50 to-[#050508]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative p-6 lg:p-8 rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 mb-4 rounded-xl bg-linear-to-br ${stat.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <stat.icon className={`w-5 h-5 bg-linear-to-br ${stat.gradient} bg-clip-text text-transparent`} style={{ color: 'rgb(34, 211, 238)' }} />
                  </div>
                </div>
                
                {/* Value */}
                <h3 className={`text-3xl lg:text-4xl font-bold bg-linear-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h3>
                
                {/* Label */}
                <p className="text-gray-400 text-sm lg:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

