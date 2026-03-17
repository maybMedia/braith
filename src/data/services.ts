export type ServiceIcon =
  | "heart-handshake"
  | "utensils-crossed"
  | "refresh-cw"
  | "wrench"
  | "search-code"
  ;

export const services = [
  {
    title: "Goods/Service Website Design",
    icon: "heart-handshake" as const,
    description:
      "Clean, modern websites designed to help your business look professional and make a strong first impression.",
    features: [
      "Custom design",
      "Mobile-friendly layout",
      "Contact form integration",
      "Fast performance",
    ],
  },
  {
    title: "Cafe/Restaurant Website Design",
    icon: "utensils-crossed" as const,
    description:
      "Websites for cafes and restaurants that showcase your menu, location, and atmosphere to generate more bookings.",
    features: [
      "Menu and location sections",
      "Mobile-friendly booking flow",
      "Clear calls to action",
      "Atmosphere-focused design",
    ],
  },
  {
    title: "Website Redesigns",
    icon: "refresh-cw" as const,
    description:
      "Upgrade an outdated website with a fresh design, better structure, and a smoother experience on mobile and desktop.",
    features: [
      "Modern visual refresh",
      "Better content structure",
      "Improved mobile experience",
      "Clearer customer journeys",
    ],
  },
  {
    title: "Ongoing Website Support",
    icon: "wrench" as const,
    description:
      "Keep your website updated with content changes, design improvements, and new sections as your business grows.",
    features: [
      "Content updates",
      "Design tweaks",
      "New page additions",
      "General maintenance",
    ],
  },
  {
    title: "Free Website Reviews",
    icon: "search-code" as const,
    description:
      "Not sure what you need? I offer free website reviews where I assess your current site and provide recommendations for improvements.",
    features: [
      "Website audit overview",
      "Improvement recommendations",
      "Conversion-focused feedback",
      "Next-step guidance",
    ],
  },
];
