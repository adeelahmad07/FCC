"use client";

import { siteConfig } from "@/lib/config";
import AnimateOnScroll from "./AnimateOnScroll";
import { useCountUp } from "@/hooks/useScrollAnimation";

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center p-4 bg-gray-light rounded-2xl hover-lift">
      <p className="text-2xl font-extrabold text-accent">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs text-gray-medium mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Certified Experts",
      description: "Our team consists of trained and certified waterproofing professionals.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Premium Materials",
      description: "We use only industrial-grade, imported chemical solutions for lasting results.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "Projects completed on schedule with minimal disruption to your routine.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: `${siteConfig.company.warrantyYears}-Year Warranty`,
      description: "All our services come with a comprehensive warranty for your peace of mind.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content (slides in from left) */}
          <AnimateOnScroll animation="fade-left" duration={800} once={false}>
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 leading-tight">
                <span className="gradient-text-animated">{siteConfig.company.yearsExperience}+ Years</span> of Excellence in
                Chemical Construction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {siteConfig.company.name} is a leading provider of waterproofing,
                heat proofing, and chemical construction solutions in Pakistan. With
                over {siteConfig.company.yearsExperience} years of experience, we
                have successfully completed{" "}
                {siteConfig.company.projectsCompleted.toLocaleString()}+ projects
                across {siteConfig.serviceAreas.join(", ")}.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to protect your property from water damage, extreme
                heat, and structural deterioration using state-of-the-art chemical
                solutions and expert craftsmanship.
              </p>

              {/* Stats Row with counters */}
              <div className="grid grid-cols-3 gap-4">
                <StatCard end={siteConfig.company.yearsExperience} suffix="+" label="Years" />
                <StatCard end={siteConfig.company.projectsCompleted} suffix="+" label="Projects" />
                <StatCard end={siteConfig.company.totalSolutions} suffix="+" label="Solutions" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Highlights Grid (slides in from right with stagger) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <AnimateOnScroll
                key={i}
                animation="fade-right"
                delay={i * 150}
                duration={700}
                once={false}
              >
                <div className="p-6 bg-gray-light rounded-2xl hover-lift group card-hover">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
