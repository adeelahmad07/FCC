"use client";

import { useState, useEffect } from "react";
import { siteConfig, buildWhatsAppURL, getWhatsAppLink } from "@/lib/config";

interface CostCalculatorProps {
  service: (typeof siteConfig.services)[0];
  onClose: () => void;
}

function ServiceModalIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    sun: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    droplets: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4.97 0-9-4.03-9-9 0-3.53 4.5-10.36 7.5-13.5C11.25 2.25 12 1.5 12 1.5s.75.75 1.5 1.5C16.5 5.64 21 12.47 21 16c0 4.97-4.03 5-9 5z" />
      </svg>
    ),
    container: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    bath: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12a2 2 0 01-2-2V5a2 2 0 012-2h1a2 2 0 012 2v5m-3 2v4a4 4 0 004 4h8a4 4 0 004-4v-4M7 12V7" />
      </svg>
    ),
    brick: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM4 14h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
      </svg>
    ),
    bug: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v8m-4-6H4m16 0h-4m-8-4l-2-2m12 2l2-2m-2 10l2 2m-12-2l-2 2" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.sun}</>;
}

export default function CostCalculator({ service, onClose }: CostCalculatorProps) {
  const [area, setArea] = useState<string>("5");
  const [unit, setUnit] = useState<string>("marla");
  const [isOpen, setIsOpen] = useState(false);

  const hasBasePrice = "basePrice" in service && typeof service.basePrice === "number";

  // Animate in on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setIsOpen(true));
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const units = siteConfig.units;
  const areaNum = parseFloat(area) || 0;
  const sqftEquivalent = Math.round(areaNum * units[unit]);
  const estimatedCost = Math.round(sqftEquivalent * service.rate);
  const hasArea = areaNum > 0;

  const whatsappURL = hasBasePrice
    ? getWhatsAppLink(
        `Hi, I'd like a detailed quote for *${service.name}*.\n\nStarting Price: PKR ${(service.basePrice as number).toLocaleString()}\n\nPlease share final pricing after site inspection.`
      )
    : buildWhatsAppURL(service.name, areaNum, unit, sqftEquivalent, estimatedCost);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "bg-black/60 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <ServiceModalIcon icon={service.icon} />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">{service.name}</h3>
              <p className="text-xs text-gray-medium">Get an instant cost estimate</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6">
          {hasBasePrice ? (
            <>
              {/* Fixed Price Display */}
              <div className="flex items-center gap-2 text-sm text-gray-medium mb-6 bg-gray-light px-4 py-2.5 rounded-xl">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Price: <span className="font-semibold text-primary">PKR {(service.basePrice as number).toLocaleString()}</span> Starting From
              </div>

              {/* Result */}
              <div className="mb-6 p-5 rounded-2xl bg-accent/5 border border-accent/10">
                <p className="text-xs font-semibold text-gray-medium uppercase tracking-wider mb-2">
                  Estimated Cost
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-medium">From</span>
                  <p className="text-4xl font-extrabold text-accent">
                    PKR {(service.basePrice as number).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-gray-medium mt-1">
                  Base price, subject to inspection
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 mb-5">
                * This is an approximate estimate. Final pricing may vary based on
                site inspection, material requirements, and project complexity.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-4 rounded-2xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-whatsapp/20 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Request Detailed Quote
              </a>
            </>
          ) : (
            <>
              {/* Rate Display */}
              <div className="flex items-center gap-2 text-sm text-gray-medium mb-6 bg-gray-light px-4 py-2.5 rounded-xl">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Rate: <span className="font-semibold text-primary">PKR {service.rate} per sq ft</span>
              </div>

              {/* Area Input */}
              <div className="mb-6">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-medium uppercase tracking-wider mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  Property Area
                </label>
                <div className="space-y-3">
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    onFocus={(e) => e.target.select()}
                    min="0"
                    step="any"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-lg font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="Enter area"
                  />
                  <div className="grid grid-cols-4 gap-2 bg-gray-light rounded-xl p-1.5">
                    {Object.keys(units).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => setUnit(u)}
                        className={`py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer text-center ${
                          unit === u
                            ? "bg-white text-primary shadow-md"
                            : "text-gray-medium hover:text-primary hover:bg-white/50"
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className={`mb-6 p-4 rounded-2xl transition-all duration-300 ${
                hasArea ? "bg-accent/5 border border-accent/10" : "bg-gray-light"
              }`}>
                <p className="text-xs font-semibold text-gray-medium uppercase tracking-wider mb-2">
                  Estimated Cost
                </p>
                <p className={`text-4xl font-extrabold transition-colors duration-300 ${
                  hasArea ? "text-accent" : "text-gray-300"
                }`}>
                  PKR {hasArea ? estimatedCost.toLocaleString() : "0"}
                </p>
                {hasArea && (
                  <p className="text-sm text-gray-medium mt-1">
                    {areaNum} {unit} &times; PKR {service.rate}/sq ft
                    {unit !== "sq ft" && (
                      <span> (&asymp; {sqftEquivalent.toLocaleString()} sq ft)</span>
                    )}
                  </p>
                )}
                {!hasArea && (
                  <p className="text-sm text-gray-400 mt-1">Enter area above to see estimate</p>
                )}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 mb-5">
                * This is an approximate estimate. Final pricing may vary based on
                site inspection, material requirements, and project complexity.
              </p>

              {/* WhatsApp CTA */}
              {hasArea ? (
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-4 rounded-2xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-whatsapp/20 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Request Detailed Quote
                </a>
              ) : (
                <div className="flex items-center justify-center gap-3 w-full bg-gray-200 text-gray-400 py-4 rounded-2xl font-semibold text-lg cursor-not-allowed">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enter area to get quote
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
