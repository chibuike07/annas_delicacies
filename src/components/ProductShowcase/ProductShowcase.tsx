"use client";

import { Fragment, useMemo, useState } from "react";
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
                    <h3>Anna&apos;s delicacies on the big board</h3>
                    <p>
                      A playful animated scene highlighting our best plates on a
                      billboard — perfect for social shares and homepage energy.
                    </p>
                  </div>
                  <div className="story_media">
                    <img
                      src={getPublicAssetPath(
                        "/animations/adult-pointing-1.gif",
                      )}
                      alt="Animated adult pointing at a billboard of Anna's delicacies"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="story_section">
                  <div className="story_media">
                    <img
                      src={getPublicAssetPath(
                        "/animations/adult-pointing-2.gif",
                      )}
                      alt="Animated adult presenting a billboard featuring Anna's delicacies"
                      loading="lazy"
                    />
                  </div>
                  <div className="story_content">
                    <span className="story_badge">Fresh &amp; tasty</span>
                    <h3>Fresh meals, warm vibes</h3>
                    <p>
                      Another animated highlight section to keep the landing
                      page lively and reinforce the premium, authentic taste
                      experience.
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
