export type PackageIcon = "package" | "layers-3" | "sparkles";

export const packages = [
  {
    name: "Basic",
    price: "From $349",
    icon: "package" as const,
    bestFor: "Small businesses that just need a professional online presence",
    description:
      "A simple, polished foundation for businesses that need a clean online presence and a clear way for customers to get in touch.",
    details: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Social links",
      "Basic SEO setup",
    ],
  },
  {
    name: "Basic Plus",
    price: "From $499",
    icon: "layers-3" as const,
    bestFor: "Established local businesses wanting a more complete site",
    description:
      "A more complete website structure for businesses ready to showcase services, build trust, and guide visitors toward enquiries.",
    details: [
      "Up to 8 pages",
      "Everything in Basic",
      "Google Maps Integration",
      "Testimonials and reviews",
      "Photo gallery",
      "Analytics",
    ],
  },
  {
    name: "Business Max",
    price: "From $699",
    icon: "sparkles" as const,
    bestFor: "Businesses wanting to wow their customers and competition",
    description:
      "A larger, more refined website package for businesses that want a stronger impression, clearer calls to action, and room for every important page.",
    details: [
      "As many pages as needed",
      "Everything in Basic Plus",
      "Enhanced enquiry forms",
      "Enhanced calls to action",
      "Increased performance optimisation",
      "Enhanced visual appeal",
    ],
  },
];
