"use client";

import { useEffect, useState } from "react";
import { siteConfig, getWhatsAppLink } from "@/lib/config";
import { useCountUp } from "@/hooks/useScrollAnimation";

function AnimatedCounter({ end, suffix = "+", label }: { end: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref}>
      <p className="text-3xl sm:text-4xl font-extrabold gradient-text-animated">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-white/50 mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-dark overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-whatsapp/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        {/* Floating particles */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-accent/30 rounded-full animate-float" />
        <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-gold/20 rounded-full animate-float-slow" />
        <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-whatsapp/20 rounded-full animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[25%] right-[20%] w-2.5 h-2.5 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Trusted by {siteConfig.company.projectsCompleted.toLocaleString()}+ customers
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Pakistan&apos;s Premier{" "}
              <span className="gradient-text-animated">Waterproofing</span>
              {" & "}
              <span className="gradient-text-animated">Heat Proofing</span>
              {" "}Experts
            </h1>

            {/* Description */}
            <p
              className={`text-lg text-white/70 max-w-xl mb-8 transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {siteConfig.company.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-whatsapp/20 hover:-translate-y-1 hover-shake"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Free Quote
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Our Services
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats with animated counters */}
            <div
              className={`grid grid-cols-3 gap-6 transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <AnimatedCounter end={siteConfig.company.yearsExperience} label="Years Experience" />
              <AnimatedCounter end={siteConfig.company.totalSolutions} label="Solutions" />
              <AnimatedCounter end={siteConfig.company.warrantyYears} suffix="" label="Year Warranty" />
            </div>
          </div>

          {/* Hero Visual - Right side */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 ${
              loaded ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 rotate-3"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative">
              {/* Main card - floating */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl glass flex items-center justify-center overflow-hidden animate-float-slow">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold mb-2">
                    Protecting Properties
                  </p>
                  <p className="text-white/50 text-sm">
                    Across {siteConfig.serviceAreas.join(", ")}
                  </p>
                </div>
              </div>

              {/* Orbiting ring */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2rem] animate-spin-slow" />
              <div className="absolute -inset-8 border border-dashed border-white/5 rounded-[2.5rem] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />

              {/* Floating badge - bottom left */}
              <div
                className={`absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-700 hover-shake ${
                  loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-75"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {siteConfig.company.projectsCompleted.toLocaleString()}+
                    </p>
                    <p className="text-xs text-gray-500">Projects Completed</p>
                  </div>
                </div>
              </div>

              {/* Top-right floating badge */}
              <div
                className={`absolute -top-3 -right-3 bg-accent text-white rounded-2xl shadow-xl px-4 py-3 transition-all duration-700 animate-float ${
                  loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: "1200ms", animationDelay: "2s" }}
              >
                <p className="text-xs font-bold">{siteConfig.company.warrantyYears}-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
