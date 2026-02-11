import ProductCard from "../ProductCard/ProductCard";
import * as S from "./CategorySection.styles";
import type { ICategorySectionProps } from "./CategorySection.interface";

export default function CategorySection({
  category,
  visibleCount,
  onLoadMore,
  onBuyClick,
}: ICategorySectionProps) {
  const visibleItems = category.items.slice(0, visibleCount);
  const hasMore = visibleCount < category.items.length;

  return (
    <S.SectionWrapper>
      <div className="section-header">
        <h2>{category.title}</h2>
        <p className="subtitle">{category.subtitle}</p>
      </div>
      <div className="cards-grid">
        {visibleItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryTitle={category.title}
            onBuyClick={onBuyClick}
          />
        ))}
      </div>
      {hasMore && (
        <div className="load-more-row">
          <button type="button" onClick={onLoadMore}>
            Load more {category.title.toLowerCase()}
          </button>
        </div>
      )}
    </S.SectionWrapper>
  );
}
