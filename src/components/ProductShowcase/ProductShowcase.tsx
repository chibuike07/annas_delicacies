"use client";

import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import Hero from "./Hero/Hero";
import CategorySection from "./CategorySection/CategorySection";
import Footer from "./Footer/Footer";
import type { CategoryKey, IProduct } from "./ProductShowcase.interface";
import { Page } from "./ProductShowcaseStyles";
import { getPublicAssetPath } from "@/lib/utils/config";
import {
  categories,
  initialVisible,
  buildWhatsAppUrl,
} from "@/lib/utils/dummyData";

const ProductShowcase = () => {
  const [visibleCounts, setVisibleCounts] = useState(initialVisible);

  const categoryMap = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [],
  );

  const handleLoadMore = (categoryId: CategoryKey): void => {
    const category = categoryMap.get(categoryId);
    if (!category) return;

    setVisibleCounts((prev) => {
      const nextCount = Math.min(prev[categoryId] + 4, category.items.length);
      return { ...prev, [categoryId]: nextCount };
    });
  };

  const handleBuyClick = (
    product: IProduct,
    categoryTitle: string,
    quantity: number,
  ): void => {
    const url = buildWhatsAppUrl(product, categoryTitle, quantity);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Page>
      <Hero />
      <section className="categories" id="categories">
        {categories.map((category) => (
          <Fragment key={category.id}>
            <CategorySection
              category={category}
              visibleCount={visibleCounts[category.id]}
              onLoadMore={() => handleLoadMore(category.id)}
              onBuyClick={handleBuyClick}
            />
            {category.id === "best-sellers" && (
              <section className="story_sections">
                <div className="story_section">
                  <div className="story_content">
                    <span className="story_badge">Animated spotlight</span>
                    <h3>Ann&apos;s SoleCraft on the big board</h3>
                    <p>
                      A playful animated scene highlighting our boldest shoe
                      designs on a billboard — perfect for social shares and
                      homepage energy.
                    </p>
                  </div>
                  <div className="story_media">
                    <Image
                      src={getPublicAssetPath(
                        "https://dummyimage.com/800x480/020617/ffffff.png&text=Ann%27s+SoleCraft+Billboard",
                      )}
                      alt="Designer sneakers spotlighted on a Lagos billboard"
                      width={420}
                      height={280}
                      className="story_image"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="story_section">
                  <div className="story_media">
                    <Image
                      src={getPublicAssetPath(
                        "https://dummyimage.com/800x480/020617/ffffff.png&text=Ann%27s+SoleCraft+Collection",
                      )}
                      alt="Curated Nigerian designer shoe collection"
                      width={420}
                      height={280}
                      className="story_image"
                      unoptimized
                    />
                  </div>
                  <div className="story_content">
                    <span className="story_badge">Everyday comfort</span>
                    <h3>Comfort that turns heads</h3>
                    <p>
                      Another animated highlight section to keep the landing
                      page lively and reinforce the premium comfort and street
                      style experience of our shoes.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        ))}
      </section>
      <Footer />
    </Page>
  );
};

export default ProductShowcase;
