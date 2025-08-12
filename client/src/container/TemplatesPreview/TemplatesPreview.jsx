import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { templates } from "../../data/template.data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const TemplatesPreview = () => {
    const scrollRef = useRef(null);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    useEffect(() => {
        if (isUserInteracting) return;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: scrollRef.current.offsetWidth,
                    behavior: "smooth",
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isUserInteracting]);

    const scroll = (direction) => {
        setIsUserInteracting(true);
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left:
                    direction === "left"
                        ? -scrollRef.current.offsetWidth
                        : scrollRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
        setTimeout(() => {
            setIsUserInteracting(false), 5000;
        });
    };

    return (
        <section className="bg-white py-40 px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                ease="easeInOut"
                className="flex flex-col items-center text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore Our Templates</h2>
                <p className="text-gray-600 mb-12 max-w-2xl">
                    Pick from ATS-friendly designs to make your application stand out and get more
                    interviews.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                ease="easeInOut"
                className="relative max-w-7xl mx-auto flex justify-center"
            >
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                >
                    <FaChevronCircleLeft className="w-14 h-14 text-orange-500 hover:text-cyan-600 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-hidden scroll-smooth no-scrollbar"
                    style={{ width: `calc(3 * 20rem + 2 * 2rem)` }}
                >
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="flex-none w-80 relative rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={template.image}
                                alt={template.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-lg text-gray-900">
                                    {template.name}
                                </h3>
                            </div>

                            <div className="absolute inset-0 opacity-0 hover:opacity-100 hover:bg-gray-900/80 hover:backdrop-blur-sm transition duration-300 ease-in-out flex items-center justify-center">
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                    Preview Template
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                >
                    <FaChevronCircleRight className="w-14 h-14 text-orange-500 hover:text-cyan-600 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl" />
                </button>
            </motion.div>
        </section>
    );
};

export default TemplatesPreview;
