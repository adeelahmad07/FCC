"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink } from "@/lib/config";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="group hover:opacity-90 transition-opacity">
            <Logo variant={scrolled ? "full" : "white"} size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium animated-underline transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-all duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              } ${isOpen ? "rotate-90" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide down */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-t overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-accent hover:bg-accent/5 font-medium transition-all rounded-xl"
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                transitionProperty: "opacity, transform, color, background-color",
                transitionDuration: "300ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <hr className="my-3" />
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-whatsapp hover:bg-whatsapp-hover text-white py-3 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
