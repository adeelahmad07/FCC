"use client";

import { siteConfig } from "@/lib/config";
import AnimateOnScroll from "./AnimateOnScroll";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" once={false}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              What Our <span className="gradient-text-animated">Customers</span> Say
            </h2>
            <p className="text-gray-medium">
              Real reviews from real customers across Pakistan who trust us with
              their property protection.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={index}
              animation={
                index % 3 === 0 ? "fly-in-left" : index % 3 === 1 ? "fly-in-bottom" : "fly-in-right"
              }
              delay={index * 140}
              duration={850}
              once={false}
            >
              <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 card-hover h-full">
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-accent/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Rating & Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                      <span className="text-accent font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-medium">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
