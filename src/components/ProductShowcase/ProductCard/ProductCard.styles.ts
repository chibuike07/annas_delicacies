import styled from "styled-components";

export const CardWrapper = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  }

  .product-image {
    background: linear-gradient(135deg, var(--accent-soft), #dbeafe);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }

  .product-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 1;

    h3 {
      font-size: 1.05rem;
    }

    .description {
      color: var(--muted);
      font-size: 0.9rem;
    }

    .tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .badge {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
      }

      .promo-chip {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(124, 58, 237, 0.16);
        color: var(--accent);
        font-weight: 600;
      }
    }

    .price-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-top: auto;

      .price {
        font-size: 1.1rem;
        font-weight: 700;
      }

      .buy-btn {
        background: var(--brand);
        color: #fff;
        border-radius: 10px;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        transition:
          background 0.2s ease,
          transform 0.2s ease;

        &:hover {
          background: var(--brand-dark);
          transform: translateY(-1px);
        }
      }
    }
  }
`;
