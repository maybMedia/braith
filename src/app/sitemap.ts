import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://braithwebdesign.site",
      lastModified: new Date(),
    },
    {
      url: "https://braithwebdesign.site/services",
      lastModified: new Date(),
    },
    {
      url: "https://braithwebdesign.site/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://braithwebdesign.site/about",
      lastModified: new Date(),
    },
    {
      url: "https://braithwebdesign.site/contact",
      lastModified: new Date(),
    },
  ];
}