import { assets } from "../assets/asset.ts";

export const heroSlides = [
  {
    id: 1,
    title: "NovaTech Mega Sale Offer",
    subtitle: "Latest Electronics Deals",
    description:
      "Save up to 50% on smartphones, laptops, TVs and premium accessories for all your order.",
    image: assets.banner,
    primaryBtn: "Shop Now",
    secondaryBtn: "View Deals",
    bgColor: "#EAF9F6",
  },
  {
    id: 2,
    title: "Next-Gen Gaming Setup",
    subtitle: "Level Up Your Experience",
    description:
      "Discover gaming laptops, mechanical keyboards, monitors and accessories at unbeatable prices.",
    image: assets.banner_1,
    primaryBtn: "Explore Gaming",
    secondaryBtn: "Best Sellers",
    bgColor: "#F1F5F9",
  },
  {
    id: 3,
    title: "Smart Living Starts Here",
    subtitle: "Upgrade Your Home",
    description:
      "Shop smart TVs, speakers, headphones and home entertainment systems with exclusive offers.",
    image: assets.banner_2,
    primaryBtn: "Shop Electronics",
    secondaryBtn: "Learn More",
    bgColor: "#E6EFF7",
  },
  {
    id: 4,
    title: "New Arrivals Products 2026",
    subtitle: "Innovation Meets Performance",
    description:
      "Be the first to explore the latest smartphones, laptops and wearable technology from top brands.",
    image: assets.banner_3,
    primaryBtn: "New Arrivals",
    secondaryBtn: "View Collection",
    bgColor: "#F5F3FF",
  },
];

export const categories = [
  { name: "Smartphones", image: assets.phone, slug: "smartphones" },
  { name: "Laptops", image: assets.laptop, slug: "laptops" },
  { name: "Television", image: assets.television, slug: "television" },
  { name: "Headphones", image: assets.headPhone, slug: "headphones" },
  { name: "Smart Watches", image: assets.smart_watch, slug: "smart-watches" },
  { name: "Camera", image: assets.camera, slug: "camera" },
  { name: "Gaming", image: assets.gaming, slug: "gaming" },
  { name: "Accessories", image: assets.speaker, slug: "accessories" },
];
