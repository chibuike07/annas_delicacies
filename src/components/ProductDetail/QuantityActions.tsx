"use client";

import { useCallback, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import type { IProduct } from "@/components/ProductShowcase/ProductShowcase.interface";
import {
  buildWhatsAppUrl,
  formatter,
  MAX_QUANTITY,
  validateQuantity,
} from "@/lib/utils/dummyData";

interface QuantityActionsProps {
  product: IProduct;
  categoryTitle: string;
}

const QuantityActions = ({
  product,
  categoryTitle,
}: QuantityActionsProps) => {
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

      if (value === "") {
        setQuantity(1);
        setInputError(false);
        return;
      }

      const parsed = parseInt(value, 10);
      if (Number.isNaN(parsed)) {
        setInputError(true);
        return;
      }

      const validated = validateQuantity(parsed);
      setQuantity(validated);
      setInputError(false);
    },
    [],
  );

  const totalPrice = useMemo(() => {
    const validated = validateQuantity(quantity);
    return formatter.format(product.price * validated);
  }, [product.price, quantity]);

  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(product, categoryTitle, quantity),
    [product, categoryTitle, quantity],
  );

  return (
    <div className="quantity_section">
      <div className="quantity_controls">
        <span className="quantity_label">Quantity:</span>
        <div className="quantity_inputs">
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
      <div className="price_total">Total: {totalPrice}</div>
      <a href={whatsappUrl} className="btn primary" rel="noopener noreferrer">
        💬 Buy on WhatsApp
      </a>
    </div>
  );
};

export default QuantityActions;
