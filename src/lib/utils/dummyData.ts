import type {
  CategoryKey,
  ICategorySection,
  IProduct,
} from "@/components/ProductShowcase/ProductShowcase.interface";
import { getProductDetailUrl } from "./config";

export const WHATSAPP_NUMBER = "2348121485310";

// Maximum quantity allowed per order
export const MAX_QUANTITY = 100;

/**
 * Sanitizes input to prevent XSS attacks
 * Removes dangerous characters and HTML entities
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== "string") return "";

  return (
    input
      .trim()
      // Remove any HTML tags
      .replace(/<[^>]*>/g, "")
      // Remove special characters that could be used for injection
      .replace(/[<>"'`\\]/g, "")
      // Remove control characters
      .replace(/[\x00-\x1F\x7F]/g, "")
      // Collapse multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
};

/**
 * Validates and sanitizes quantity input
 * Ensures quantity is a positive integer within acceptable range
 */
export const validateQuantity = (quantity: unknown): number => {
  // Type check
  if (typeof quantity !== "number") {
    return 1;
  }

  // Convert to integer
  const intQuantity = Math.floor(quantity);

  // Validate range
  if (intQuantity < 1) {
    return 1;
  }

  if (intQuantity > MAX_QUANTITY) {
    return MAX_QUANTITY;
  }

  return intQuantity;
};

/**
 * Validates WhatsApp URL to prevent injection attacks
 */
export const isValidWhatsAppNumber = (number: string): boolean => {
  // WhatsApp numbers should be numeric and 10-15 digits
  return /^[0-9]{10,15}$/.test(number);
};

export const products: IProduct[] = [
  {
    id: "hot_1",
    name: "Lagos Night Block Heels",
    description:
      "Statement block heels handcrafted in Lagos for night outings, weddings and owambe events.",
    price: 3500,
    promoCode: "LAGOS10",
    promoPercent: 10,
    // TODO: replace with your own hosted image URL (e.g. Unsplash/CDN)
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Designer+Heels",
    category: "hot-sale",
    badge: "Customer Favorite",
  },
  {
    id: "hot_2",
    name: "Abuja Heritage Loafers",
    description:
      "Premium full-grain leather loafers with subtle stitching, perfect for Abuja offices and meetings.",
    price: 4500,
    promoCode: "ABUJA15",
    promoPercent: 15,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Leather+Loafers",
    category: "hot-sale",
    badge: "Top Rated",
  },
  {
    id: "hot_3",
    name: "Enugu Street Sneakers",
    description:
      "Lightweight everyday sneakers inspired by Enugu city streets, great for all-day comfort.",
    price: 3800,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Street+Sneakers",
    category: "hot-sale",
    badge: "New",
  },
  {
    id: "hot_4",
    name: "Ankara Strap Slides",
    description:
      "Bold Ankara-print strap slides with cushioned sole for quick runs and casual outings.",
    price: 2500,
    promoCode: "ABACHA8",
    promoPercent: 8,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Ankara+Slides",
    category: "hot-sale",
  },
  {
    id: "hot_5",
    name: "Everyday Comfort Mules",
    description:
      "Soft padded mules with low heels for easy wear around the office and city.",
    price: 1200,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Comfort+Mules",
    category: "hot-sale",
  },
  {
    id: "hot_6",
    name: "Owambe Oxford Brogues",
    description:
      "Classic Oxford brogues with detailed perforations, built for owambe outfits and native attires.",
    price: 5000,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Oxford+Brogues",
    category: "hot-sale",
  },
  {
    id: "best_1",
    name: "Victoria Island Classic Pumps",
    description:
      "Timeless pointed-toe pumps for Lagos offices, boardrooms and evening dinners.",
    price: 4200,
    promoCode: "VI12",
    promoPercent: 12,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Classic+Pumps",
    category: "best-sellers",
    badge: "Regular Sales",
  },
  {
    id: "best_2",
    name: "Abuja Court Sandals",
    description:
      "Minimalist strappy sandals with secure ankle support for court, office and formal occasions.",
    price: 3800,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Strappy+Sandals",
    category: "best-sellers",
    badge: "Everyday",
  },
  {
    id: "best_3",
    name: "Mainland Driving Loafers",
    description:
      "Soft-soled driving loafers designed for Lagos traffic, long drives and weekend hangouts.",
    price: 2200,
    promoCode: "DRIVE5",
    promoPercent: 5,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Driving+Loafers",
    category: "best-sellers",
  },
  {
    id: "best_4",
    name: "Uni Campus Sneakers",
    description:
      "Versatile sneakers built for campus life, lectures, hostel runs and hangouts.",
    price: 1500,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Campus+Sneakers",
    category: "best-sellers",
  },
  {
    id: "best_5",
    name: "Ankara Block Heels",
    description:
      "Colorful Ankara block heels that balance height and comfort for parties and church.",
    price: 3500,
    promoCode: "ANKARA9",
    promoPercent: 9,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Ankara+Heels",
    category: "best-sellers",
  },
  {
    id: "best_6",
    name: "Owerri City Platforms",
    description:
      "Chunky platform heels with steady grip, inspired by Owerri nightlife and celebrations.",
    price: 3200,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Block+Heels",
    category: "best-sellers",
  },
  {
    id: "pop_1",
    name: "Port Harcourt Street Sneaker",
    description:
      "Sporty street sneaker with breathable mesh for Port Harcourt weather and outdoor events.",
    price: 4000,
    promoCode: "PH7",
    promoPercent: 7,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Street+Sneaker",
    category: "popular",
    badge: "Popular",
  },
  {
    id: "pop_2",
    name: "Everyday Slide Sandals",
    description:
      "Simple everyday slides with durable sole, perfect for quick errands and home use.",
    price: 2800,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Slides",
    category: "popular",
  },
  {
    id: "pop_3",
    name: "Rainy Day Ankle Boots",
    description:
      "Weather-friendly ankle boots with firm grip for rainy Lagos and muddy streets.",
    price: 3500,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Ankle+Boots",
    category: "popular",
  },
  {
    id: "pop_4",
    name: "Courtroom Comfort Sneakers",
    description:
      "Low-profile sneakers styled to pair with smart casual outfits and workwear.",
    price: 3200,
    promoCode: "COURT6",
    promoPercent: 6,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Court+Sneakers",
    category: "popular",
  },
  {
    id: "pop_5",
    name: "Lekki Platform Heels",
    description:
      "High platform heels with padded insole for nights out in Lekki and VI.",
    price: 4500,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Platform+Heels",
    category: "popular",
  },
  {
    id: "pop_6",
    name: "Monk Strap Dress Shoes",
    description:
      "Elegant monk strap dress shoes that complete native or corporate looks.",
    price: 4200,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Monk+Strap+Shoes",
    category: "popular",
  },
  {
    id: "other_1",
    name: "Essential Shoe Care Kit",
    description:
      "Cleaning brushes, conditioner and shine cloth to keep your SoleCraft pairs fresh.",
    price: 1000,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Shoe+Care+Kit",
    category: "others",
    badge: "Care Essentials",
  },
  {
    id: "other_2",
    name: "Cedar Shoe Trees",
    description:
      "Cedar wood shoe trees that maintain shape, absorb moisture and extend shoe life.",
    price: 800,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Shoe+Trees",
    category: "others",
  },
  {
    id: "other_3",
    name: "Anti-Scuff Sole Guards",
    description:
      "Slim sole protectors that reduce scuffing on your favorite heels and loafers.",
    price: 3000,
    promoCode: "SOLE4",
    promoPercent: 4,
    image: "https://dummyimage.com/800x800/020617/ffffff.png&text=Sole+Guards",
    category: "others",
  },
  {
    id: "other_4",
    name: "Cushion Insole Pack",
    description:
      "Soft cushion insoles for extra comfort in heels, sneakers and flats.",
    price: 2500,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Cushion+Insoles",
    category: "others",
  },
  {
    id: "other_5",
    name: "Travel Dust Bags (Set)",
    description:
      "Soft dust bags that protect your shoes in travel boxes and wardrobes.",
    price: 2000,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Shoe+Dust+Bags",
    category: "others",
  },
  {
    id: "other_6",
    name: "Premium Laces & Buckles Kit",
    description:
      "Replacement laces and buckles in multiple colors to refresh your favorite pairs.",
    price: 1500,
    image:
      "https://dummyimage.com/800x800/020617/ffffff.png&text=Laces+%26+Buckles",
    category: "others",
  },
];

export const categories: ICategorySection[] = [
  {
    id: "hot-sale",
    title: "New Arrivals",
    subtitle: "Fresh Nigerian designer drops with launch discounts.",
    items: products.filter((product) => product.category === "hot-sale"),
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    subtitle: "Pairs our customers reorder the most across Nigeria.",
    items: products.filter((product) => product.category === "best-sellers"),
  },
  {
    id: "popular",
    title: "Street Favorites",
    subtitle: "Most-loved shoes for Lagos streets, campuses and events.",
    items: products.filter((product) => product.category === "popular"),
  },
  {
    id: "others",
    title: "Care & Accessories",
    subtitle:
      "Shoe care kits, insoles and travel accessories from Ann's SoleCraft Studio.",
    items: products.filter((product) => product.category === "others"),
  },
];

export const initialVisible: Record<CategoryKey, number> = {
  "hot-sale": 4,
  "best-sellers": 4,
  popular: 4,
  others: 4,
};

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export const buildWhatsAppUrl = (
  product: IProduct,
  categoryTitle: string,
  quantity: number = 1,
): string => {
  // Validate WhatsApp number
  if (!isValidWhatsAppNumber(WHATSAPP_NUMBER)) {
    console.error("Invalid WhatsApp number configuration");
    return "#";
  }

  // Validate and sanitize all inputs
  const sanitizedName = sanitizeInput(product?.name || "");
  const sanitizedCategory = sanitizeInput(categoryTitle);
  const sanitizedPromoCode = product?.promoCode
    ? sanitizeInput(product.promoCode)
    : "";

  // Validate quantity
  const validatedQuantity = validateQuantity(quantity);

  // Validate price
  const price =
    typeof product?.price === "number" && product.price > 0 ? product.price : 0;

  if (price === 0) {
    console.error("Invalid product price");
    return "#";
  }

  const totalPrice = price * validatedQuantity;

  // Get product detail URL
  const productUrl =
    typeof product?.id === "string" && product.id.trim()
      ? getProductDetailUrl(product.id)
      : "";

  const message = [
    "Hello, I want to buy:",
    "",
    sanitizedName || "Product",
    `Quantity: ${validatedQuantity}`,
    `Unit Price: ${formatter.format(price)}`,
    `Total Price: ${formatter.format(totalPrice)}`,
    sanitizedCategory ? `Category: ${sanitizedCategory}` : "",
    sanitizedPromoCode ? `Promo Code: ${sanitizedPromoCode}` : "",
    typeof product?.promoPercent === "number" && product.promoPercent > 0
      ? `Discount: ${product.promoPercent}%`
      : "",
    productUrl ? `Product Link: ${productUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  // Additional validation: ensure message doesn't exceed WhatsApp limits
  const maxMessageLength = 4096;
  const finalMessage =
    message.length > maxMessageLength
      ? message.substring(0, maxMessageLength)
      : message;

  try {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
  } catch (error) {
    console.error("Error building WhatsApp URL:", error);
    return "#";
  }
};
