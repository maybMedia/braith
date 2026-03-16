export type ServiceIcon =
  | "heart-handshake"
  | "utensils-crossed"
  | "refresh-cw"
  | "wrench";

export const services = [
  {
    title: "Goods/Service Website Design",
    icon: "heart-handshake" as const,
    description:
      "Clean, modern websites designed to help your business look professional and make a strong first impression.",
  },
  {
    title: "Cafe/Restaurant Website Design",
    icon: "utensils-crossed" as const,
    description:
      "Websites for cafes and restaurants that showcase your menu, location, and atmosphere to generate more bookings.",
  },
  {
    title: "Website Redesigns",
    icon: "refresh-cw" as const,
    description:
      "Upgrade an outdated website with a fresh design, better structure, and a smoother experience on mobile and desktop.",
  },
  {
    title: "Ongoing Website Support",
    icon: "wrench" as const,
    description:
      "Keep your website updated with content changes, design improvements, and new sections as your business grows.",
  },
];
