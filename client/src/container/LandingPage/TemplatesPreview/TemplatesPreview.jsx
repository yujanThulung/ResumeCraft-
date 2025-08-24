import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { templates } from "../../../data/template.data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { ResumeTemplateCard } from "../../../components/index";

const TemplatesPreview = () => {
  const scrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const scroll = (direction) => {
    setIsUserInteracting(true);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[0];
      const cardWidth = card.offsetWidth + 32;
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsUserInteracting(false), 5000);
  };

  return (
    <section className="bg-white py-16 md:px-32 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Explore Our Templates
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Pick from ATS-friendly designs to make your application stand out and
          get more interviews.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto flex justify-center"
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <FaChevronCircleLeft className="w-14 h-14 text-orange-500 hover:text-cyan-600 bg-white rounded-full shadow-lg transition-all" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {templates.map((template) => (
            <ResumeTemplateCard 
            key={template.id} 
            name={template.name}
            image={template.image}
            width={"sm:70 md:w-80 lg:w-96 "} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <FaChevronCircleRight className="w-14 h-14 text-orange-500 hover:text-cyan-600 bg-white rounded-full shadow-lg transition-all" />
        </button>
      </motion.div>
    </section>
  );
};

export default TemplatesPreview;
