import Image from "next/image";
import * as S from "./ProductCard.styles";
import type { IProductCardProps } from "./ProductCard.interface";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

const sanitizeText = (text: string): string => {
  return text.replace(/[<>]/g, "");
};

const resolveImagePath = (path: string): string => `${BASE_PATH}${path}`;

export default function ProductCard({
  product,
  categoryTitle,
  onBuyClick,
}: IProductCardProps) {
  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBuyClick(product, categoryTitle);
  };

  return (
    <S.CardWrapper>
      <div className="product-image">
        <Image
          src={resolveImagePath(product.image)}
          alt={sanitizeText(product.name)}
          width={520}
          height={340}
          sizes="(max-width: 48em) 100vw, 33vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="product-body">
        <h3>{sanitizeText(product.name)}</h3>
        <p className="description">{sanitizeText(product.description)}</p>
        <div className="tag-row">
          {product.badge && (
            <span className="badge">{sanitizeText(product.badge)}</span>
          )}
          {product.promoCode && (
            <span className="promo-chip">
              {sanitizeText(product.promoCode)} · {product.promoPercent}% off
            </span>
          )}
        </div>
        <div className="price-row">
          <div className="price">{formatter.format(product.price)}</div>
          <a
            href="#"
            className="buy-btn"
            onClick={handleBuyClick}
            rel="noreferrer noopener"
          >
            Buy on WhatsApp
          </a>
        </div>
      </div>
    </S.CardWrapper>
  );
}
