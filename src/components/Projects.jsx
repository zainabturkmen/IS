import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const projects = [
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img1.ee57a48826e619d12fb6.jpg', category: 'Branding' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img2.0070b4dc4691b1ec36a2.jpg', category: 'Social Media' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img3.8b36b135a31c78db58df.jpg', category: 'Marketing' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img4.8e95622d6be4d7066098.jpg', category: 'Branding' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img5.971d6c156e1dfc6ae315.jpg', category: 'Marketing' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img6.df1aa7c183dfddf04716.jpg', category: 'Social Media' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img7.4023e0d9f00cd0721d18.jpg', category: 'Branding' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img8.e7735e1aeaf2cffb1cbd.jpg', category: 'Marketing' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img9.0b9435b03f4a122f6253.jpg', category: 'Social Media' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img10.b51f81cba7414f0d2dc5.jpg', category: 'Branding' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img11.0fc4de276a4baba252ce.jpg', category: 'Marketing' },
  { src: 'https://sayed-irfan-sadat.netlify.app/static/media/img12.006f16409cdded6923fc.jpg', category: 'Social Media' },
];


  const categories = ["All", "Branding", "Social Media", "Marketing"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedProject(index);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-linear-to-b from-cyan-500/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my creative work and design projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square cursor-pointer"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-white/2 border border-white/5 hover:border-white/20 transition-all duration-500">
                <img
                  src={project.src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay and other content */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        ></motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={projectImages[currentImageIndex]}
              alt={`Project ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
              {currentImageIndex + 1} / {projectImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
