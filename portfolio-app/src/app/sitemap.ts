import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://matheuswebcoder.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
        url: "https://matheuswebcoder.com/#main",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
    {
      url: "https://matheuswebcoder.com/#about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://matheuswebcoder.com/#projects",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://matheuswebcoder.com/#contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
