import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.arcadiahomeslasvegas.com/sitemap.xml",
  };
}
