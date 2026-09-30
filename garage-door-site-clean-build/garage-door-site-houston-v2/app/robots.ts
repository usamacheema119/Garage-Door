import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{userAgent: "*", allow: "/"}],
    sitemap: "https://garage-door-nu.vercel.app/sitemap.xml",
  };
}
