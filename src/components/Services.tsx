"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import CostCalculator from "./CostCalculator";
import AnimateOnScroll from "./AnimateOnScroll";
import ServiceImage from "./ServiceImage";

// Map service id → gallery category for image
const serviceCategoryMap: Record<string, string> = {
  "heat-proofing": "Heat Proofing",
  "water-proofing": "Water Proofing",
  "water-tank-treatment": "Water Tank",
  "washroom-treatment": "Washroom",
  "walls-treatment": "Walls",
  "termite-control": "Termite Control",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof siteConfig.services)[0] | null
  >(null);

  // Dramatic card entrance animations
  const getAnimation = (index: number) => {
    const animations = [
      "fly-in-left",
      "fly-in-bottom",
      "fly-in-right",
      "swing-in-left",
      "scale-up-center",
      "swing-in-right",
    ] as const;
    return animations[index % animations.length];
  };

  return (
    <>
      <section id="services" className="py-20 lg:py-28 bg-gray-light dots-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimateOnScroll animation="fade-up" once={false}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
                Our Professional <span className="gradient-text-animated">Services</span>
              </h2>
              <p className="text-gray-medium">
                We provide comprehensive waterproofing and chemical construction
                solutions with guaranteed quality and lasting protection.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, index) => (
              <AnimateOnScroll
                key={service.id}
                animation={getAnimation(index)}
                delay={index * 130}
                duration={850}
                once={false}
              >
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 h-full flex flex-col overflow-hidden">
                  {/* Service Image Header */}
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                      <ServiceImage
                        category={serviceCategoryMap[service.id] || service.name}
                        imageUrl={service.image}
                        overlay={false}
                      />
                    </div>
                    {/* Floating rate badge */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full shadow-lg">
                      <p className="text-xs font-bold">
                        {"basePrice" in service && service.basePrice
                          ? <>PKR {(service.basePrice as number).toLocaleString()}<span className="font-normal text-gray-medium"> starting</span></>
                          : <>PKR {service.rate}<span className="font-normal text-gray-medium">/sq ft</span></>
                        }
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-medium text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-whatsapp shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="relative z-10 w-full bg-primary hover:bg-accent text-white py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer active:scale-[0.98]"
                    >
                      Calculate Estimate &rarr;
                    </button>
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
