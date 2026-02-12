import Image from "next/image";
import { useState, useCallback } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import Link from "next/link";
import { ProductCardWrapper } from "./ProductCardStyles";
import type { IProductCardProps } from "./ProductCard.interface";
import {
  MAX_QUANTITY,
  validateQuantity,
  formatter,
} from "@/lib/utils/dummyData";
import { getPublicAssetPath } from "@/lib/utils/config";

const sanitizeText = (text: string): string => {
  if (typeof text !== "string") return "";
  return text.replace(/[<>]/g, "").trim();
};

/**
 * Resolve image path for external accessibility
 * Returns absolute URL for WhatsApp and external sharing
 */
const resolveImageUrl = (path: string): string => {
  return getPublicAssetPath(path);
};

const ProductCard = ({
  product,
  categoryTitle,
  onBuyClick,
}: IProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [inputError, setInputError] = useState(false);

  const handleIncrement = useCallback((): void => {
    setQuantity((prev) => validateQuantity(prev + 1));
    setInputError(false);
  }, []);

  const handleDecrement = useCallback((): void => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setInputError(false);
  }, []);

  const handleQuantityChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // Handle empty input
      if (value === "") {
        setQuantity(1);
        setInputError(false);
        return;
      }

      const parsed = parseInt(value, 10);

      // Validate parsed number
      if (isNaN(parsed)) {
        setInputError(true);
        return;
      }

      const validated = validateQuantity(parsed);
      setQuantity(validated);
      setInputError(false);
    },
    [],
  );

  const handleBuyClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // Final validation before submitting
      const validatedQuantity = validateQuantity(quantity);
      const url = onBuyClick(product, categoryTitle, validatedQuantity);

      if (typeof url === "string" && url !== "#") {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    },
    [product, categoryTitle, quantity, onBuyClick],
  );

  return (
    <ProductCardWrapper>
      <div className="product_image">
        <Link
          href={`/product/${product.id}/`}
          className="product_link"
          aria-label={`View ${sanitizeText(product.name)} details`}
        >
          <Image
            src={resolveImageUrl(product.image)}
            alt={`${sanitizeText(product.name)} - Delicious Nigerian food from Anna's Kitchen`}
            title={sanitizeText(product.name)}
            fill
            sizes="(max-width: 48em) 100vw, (max-width: 80em) 50vw, 33vw"
            style={{ objectFit: "cover", cursor: "pointer" }}
            priority={false}
          />
        </Link>
      </div>
      <div className="product_body">
        <Link
          href={`/product/${product.id}/`}
          className="product_link"
          aria-label={`View ${sanitizeText(product.name)} details`}
        >
          <h3 className="product_name">{sanitizeText(product.name)}</h3>
        </Link>
        <p className="description">{sanitizeText(product.description)}</p>
        <div className="tag_row">
          {product.badge && (
            <span className="badge">{sanitizeText(product.badge)}</span>
          )}
          {product.promoCode && (
            <span className="promo_chip">
              {sanitizeText(product.promoCode)} · {product.promoPercent}% off
            </span>
          )}
        </div>
        <div className="quantity_section">
          <span className="quantity_label">Quantity:</span>
          <div className="quantity_controls">
            <button
              type="button"
              className="qty_btn"
              onClick={handleDecrement}
              aria-label="Decrease quantity"
              disabled={quantity === 1}
            >
              −
            </button>
            <input
              type="number"
              className={`qty_input ${inputError ? "error" : ""}`}
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={MAX_QUANTITY}
              aria-label="Product quantity"
              inputMode="numeric"
            />
            <button
              type="button"
              className="qty_btn"
              onClick={handleIncrement}
              aria-label="Increase quantity"
              disabled={quantity >= MAX_QUANTITY}
            >
              +
            </button>
          </div>
        </div>
        <div className="price_row">
          <div className="price">{formatter.format(product.price)}</div>
          <a
            href="#"
            className="buy_btn"
            onClick={handleBuyClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on WhatsApp
          </a>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
