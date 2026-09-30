import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://garage-door-nu.vercel.app";
  return [
    {url: `${base}/`, priority: 1},
    {url: `${base}/garage-door-repair/`, priority: 0.8},
    {url: `${base}/locations/texas/houston/`, priority: 0.9},
  ];
}
