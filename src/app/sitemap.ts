import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.braithwebdesign.site",
      lastModified: new Date(),
    },
    {
      url: "https://www.braithwebdesign.site/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.braithwebdesign.site/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://www.braithwebdesign.site/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.braithwebdesign.site/contact",
      lastModified: new Date(),
    },
  ];
}