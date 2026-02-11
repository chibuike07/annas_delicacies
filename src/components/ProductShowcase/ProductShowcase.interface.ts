export type CategoryKey = "hot-sale" | "best-sellers" | "popular" | "others";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  promoCode?: string;
  promoPercent?: number;
  image: string;
  category: CategoryKey;
  badge?: string;
}

export interface ICategorySection {
  id: CategoryKey;
  title: string;
  subtitle: string;
  items: IProduct[];
}
