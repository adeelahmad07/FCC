"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import AnimateOnScroll from "./AnimateOnScroll";
import ServiceImage from "./ServiceImage";
import CostCalculator from "./CostCalculator";

// Map gallery category → service for the calculator popup
const categoryToServiceMap: Record<string, string> = {
  "Heat Proofing": "heat-proofing",
  "Water Proofing": "water-proofing",
  "Water Tank": "water-tank-treatment",
  Washroom: "washroom-treatment",
  Walls: "walls-treatment",
  "Termite Control": "termite-control",
};

export default function Gallery() {
  const categories = ["All", ...new Set(siteConfig.gallery.map((g) => g.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<
    (typeof siteConfig.services)[0] | null
  >(null);

  const filtered =
    activeCategory === "All"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((g) => g.category === activeCategory);

  // Dramatic animations - images fly in from different directions
  const getAnimation = (index: number) => {
    const animations = [
      "fly-in-left",
      "fly-in-bottom",
      "fly-in-right",
      "swing-in-left",
      "scale-up-center",
      "swing-in-right",
      "clip-from-left",
      "fly-in-bottom",
      "clip-from-right",
    ] as const;
    return animations[index % animations.length];
  };

  const handleImageClick = (category: string) => {
    const serviceId = categoryToServiceMap[category];
    const service = siteConfig.services.find((s) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimateOnScroll animation="fade-up" once={false}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
                Project <span className="gradient-text-animated">Gallery</span>
              </h2>
              <p className="text-gray-medium">
                See our completed projects and the quality of work we deliver to our
                valued customers.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Category Tabs */}
          <AnimateOnScroll animation="fade-up" delay={100} once={false}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-gray-light text-gray-medium hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, index) => (
              <AnimateOnScroll
                key={`${item.category}-${index}-${activeCategory}`}
                animation={getAnimation(index)}
                delay={index * 150}
                duration={900}
                once={false}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
                  onClick={() => handleImageClick(item.category)}
                >
                  {/* Attractive gradient image */}
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <ServiceImage category={item.category} imageUrl={item.src} overlay={false} />
                  </div>

                  {/* Hover overlay - slides up from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-3 shadow-lg">
                        {item.category}
                      </span>
                      <p className="text-white font-semibold">{item.alt}</p>
                      <p className="text-white/60 text-sm mt-1">Click to get estimate</p>
                    </div>
                  </div>

                  {/* Corner category badge (visible by default) */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md group-hover:opacity-0 transition-opacity duration-300">
                    {item.category}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Modal */}
      {selectedService && (
        <CostCalculator
          key={selectedService.id}
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
