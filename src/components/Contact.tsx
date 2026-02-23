"use client";

import { siteConfig, getWhatsAppLink } from "@/lib/config";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" once={false}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              Contact Us <span className="gradient-text-animated">Today</span>
            </h2>
            <p className="text-gray-medium">
              Ready to protect your property? Get in touch for a free consultation
              and site inspection.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <AnimateOnScroll animation="fade-left" delay={0} once={false}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-whatsapp/5 border-2 border-whatsapp/20 hover:border-whatsapp rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover-shake"
            >
              <div className="w-16 h-16 mx-auto bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-whatsapp group-hover:text-white text-whatsapp transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-medium text-sm mb-3">
                Quick response on WhatsApp
              </p>
              <p className="text-whatsapp font-semibold">{siteConfig.contact.phone}</p>
            </a>
          </AnimateOnScroll>

          {/* Phone Card */}
          <AnimateOnScroll animation="fade-up" delay={150} once={false}>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="block group bg-accent/5 border-2 border-accent/20 hover:border-accent rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover-shake"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Call Us</h3>
              <p className="text-gray-medium text-sm mb-3">
                {siteConfig.contact.workingHours}
              </p>
              <p className="text-accent font-semibold">{siteConfig.contact.phone}</p>
            </a>
          </AnimateOnScroll>

          {/* Office Card */}
          <AnimateOnScroll animation="fade-right" delay={300} once={false}>
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center md:col-span-2 lg:col-span-1 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Our Offices</h3>
              <div className="space-y-3 mt-4">
                {siteConfig.offices.map((office) => (
                  <div key={office.city}>
                    <p className="font-semibold text-primary text-sm">
                      {office.city} {office.isHQ && "(HQ)"}
                    </p>
                    <p className="text-gray-medium text-sm">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll animation="zoom-in" delay={200} duration={800} once={false}>
          <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary-light rounded-3xl p-10 lg:p-14 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to Protect Your Property?
              </h3>
              <p className="text-white/70 max-w-lg mx-auto mb-8">
                Get a free consultation and site inspection. Our experts will
                recommend the best solution for your needs.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-whatsapp/20 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Free Consultation
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
