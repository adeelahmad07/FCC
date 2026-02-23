// ============================================================
// FALCON CHEMICAL CONSTRUCTION - SITE CONFIGURATION
// ============================================================
// Edit this file to change rates, services, contact info, etc.
// No coding knowledge needed - just change the values!
// ============================================================

export const siteConfig = {
  // Company Information
  company: {
    name: "Falcon Chemical Construction",
    shortName: "FCC",
    tagline: "Pakistan's Premier Waterproofing & Heat Proofing Experts",
    description:
      "Industrial-grade chemical solutions for residential, commercial, and industrial properties across Punjab, KPK, and Azad Kashmir with guaranteed warranties.",
    yearsExperience: 25,
    totalSolutions: 500,
    warrantyYears: 5,
    projectsCompleted: 1200,
  },

  // Contact Information
  contact: {
    phone: "+92 320 6377227",
    whatsapp: "923206377227", // Without + for WhatsApp API
    email: "info@falconchemicals.com",
    workingHours: "9:00 AM - 6:00 PM",
    workingDays: "Monday - Saturday",
  },

  // Office Locations
  offices: [
    {
      city: "Islamabad",
      address: "Ghauri Town Phase 5, Islamabad",
      isHQ: true,
    },
    {
      city: "Lahore",
      address: "Johar Town, Lahore",
      isHQ: false,
    },
  ],

  // Service Areas
  serviceAreas: ["Punjab", "KPK", "Azad Kashmir"],

  // ============================================================
  // SERVICES - Edit rates, names, descriptions here
  // ============================================================
  services: [
    {
      id: "heat-proofing",
      name: "Heat Proofing",
      icon: "sun",
      rate: 45, // PKR per sq ft
      description:
        "Thermal insulation treatments that reflect sunlight and reduce indoor temperature significantly, lowering energy costs.",
      features: [
        "UV reflective coating",
        "Reduces temperature by 15-20°F",
        "Energy cost reduction",
        "5-year warranty",
      ],
      image: "/images/gallery/heat-proofing.webp",
    },
    {
      id: "water-proofing",
      name: "Water Proofing",
      icon: "droplets",
      rate: 55, // PKR per sq ft
      description:
        "Advanced polymer-based coatings that create an impenetrable barrier against water leakage and seepage.",
      features: [
        "Polymer-based coating",
        "100% leak protection",
        "Suitable for all surfaces",
        "5-year warranty",
      ],
      image: "/images/gallery/water-proofing.webp",
    },
    {
      id: "water-tank-treatment",
      name: "Water Tank Treatment",
      icon: "container",
      rate: 65, // PKR per sq ft
      basePrice: 15000, // Fixed starting price
      description:
        "Epoxy and cementitious waterproofing solutions for underground and overhead water tanks.",
      features: [
        "Food-grade safe materials",
        "Epoxy coating",
        "Prevents contamination",
        "Long-lasting protection",
      ],
      image: "/images/gallery/water-tank-treatment.webp",
    },
    {
      id: "washroom-treatment",
      name: "Washroom Treatment",
      icon: "bath",
      rate: 50, // PKR per sq ft
      basePrice: 15000, // Fixed starting price
      description:
        "Complete leakage repair and waterproofing for bathrooms and washrooms without demolition.",
      features: [
        "No demolition needed",
        "Injection grouting",
        "Tile joint sealing",
        "Quick turnaround",
      ],
      image: "/images/gallery/washroom-treatment.webp",
    },
    {
      id: "walls-treatment",
      name: "Walls Water & Heat Proofing",
      icon: "brick",
      rate: 40, // PKR per sq ft
      description:
        "Chemical sheets and coatings for exterior walls to prevent dampness, seepage, and heat transfer.",
      features: [
        "Damp-proofing",
        "Chemical sheet application",
        "Interior & exterior walls",
        "Prevents paint peeling",
      ],
      image: "/images/gallery/walls-water-heat-proofing.webp",
    },
    {
      id: "termite-control",
      name: "Termite Control",
      icon: "bug",
      rate: 35, // PKR per sq ft
      basePrice: 25000, // Fixed starting price
      description:
        "Professional chemical barrier treatments to protect your property from termite damage and infestation.",
      features: [
        "Chemical barrier treatment",
        "Pre & post construction",
        "Soil treatment",
        "Annual inspection",
      ],
      image: "/images/gallery/termite-control.webp",
    },
  ],

  // ============================================================
  // UNIT CONVERSIONS - For the cost calculator
  // ============================================================
  units: {
    "sq ft": 1,
    "sq m": 10.764, // 1 sq m = 10.764 sq ft
    marla: 272.25, // 1 marla = 272.25 sq ft
    kanal: 5445, // 1 kanal = 5445 sq ft
  } as Record<string, number>,

  // ============================================================
  // GALLERY IMAGES - Add/remove/change images here
  // ============================================================
  gallery: [
    {
      src: "/images/gallery/heat-proofing.webp",
      alt: "Heat proofing - Roof thermal coating",
      category: "Heat Proofing",
    },
    {
      src: "/images/gallery/water-proofing.webp",
      alt: "Waterproofing - Membrane application",
      category: "Water Proofing",
    },
    {
      src: "/images/gallery/water-tank-treatment.webp",
      alt: "Water tank treatment - Tank cleaning & coating",
      category: "Water Tank",
    },
    {
      src: "/images/gallery/washroom-treatment.webp",
      alt: "Washroom waterproofing - Leak repair",
      category: "Washroom",
    },
    {
      src: "/images/gallery/walls-water-heat-proofing.webp",
      alt: "Wall treatment - Damp proofing & coating",
      category: "Walls",
    },
    {
      src: "/images/gallery/termite-control.webp",
      alt: "Termite control - Chemical barrier treatment",
      category: "Termite Control",
    },
  ],

  // ============================================================
  // TESTIMONIALS - Customer reviews
  // ============================================================
  testimonials: [
    {
      name: "Ahmed Khan",
      city: "Islamabad",
      rating: 5,
      text: "Excellent heat proofing service! Our roof temperature dropped significantly. Very professional team with quality materials.",
    },
    {
      name: "Fatima Noor",
      city: "Lahore",
      rating: 5,
      text: "Had severe leakage in our basement. Falcon Chemicals fixed it completely. No more water seepage even in heavy rains!",
    },
    {
      name: "Muhammad Asif",
      city: "Peshawar",
      rating: 5,
      text: "بہت اچھی سروس ہے۔ ہماری چھت کی ہیٹ پروفنگ کروائی، اب گرمیوں میں کمرے ٹھنڈے رہتے ہیں۔ بہت شکریہ!",
    },
    {
      name: "Sana Malik",
      city: "Rawalpindi",
      rating: 5,
      text: "Very satisfied with the washroom treatment. No demolition was needed and the leakage problem is completely solved.",
    },
    {
      name: "Usman Ali",
      city: "Multan",
      rating: 5,
      text: "Professional team, reasonable rates, and excellent results. Our water tank treatment was done perfectly. Highly recommended!",
    },
    {
      name: "Ayesha Bibi",
      city: "Abbottabad",
      rating: 5,
      text: "واٹر پروفنگ کا کام بہت اعلیٰ معیار کا تھا۔ بارش کے بعد بھی کوئی لیکیج نہیں۔ فالکن کیمیکلز کی ٹیم بہت پروفیشنل ہے۔",
    },
  ],

  // ============================================================
  // SOCIAL LINKS (optional)
  // ============================================================
  social: {
    facebook: "https://facebook.com/falconchemicals",
    instagram: "https://instagram.com/falconchemicals",
    youtube: "",
  },
};

// WhatsApp message builder for quote requests
export function buildWhatsAppURL(
  service: string,
  area: number,
  unit: string,
  sqftEquivalent: number,
  estimatedCost: number
): string {
  const message =
    `Hi, I'd like a detailed quote for *${service}*.\n\n` +
    `Property Area: ${area} ${unit}${unit !== "sq ft" ? ` (≈ ${sqftEquivalent.toLocaleString()} sq ft)` : ""}\n` +
    `Estimated Cost: PKR ${estimatedCost.toLocaleString()}\n\n` +
    `Please share final pricing after site inspection.`;

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// General WhatsApp contact link
export function getWhatsAppLink(message?: string): string {
  const defaultMsg = "Hi, I'm interested in your waterproofing services. Please share details.";
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message || defaultMsg)}`;
}
