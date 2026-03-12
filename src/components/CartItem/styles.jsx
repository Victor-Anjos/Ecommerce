import styled from "styled-components";

export const CartPageWrapper = styled.div`
  min-height: calc(100vh - 64px);
  background-color: #f5f5f5;
  padding: 40px 24px 80px;
`;

export const CartInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;
  align-items: start;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItemContainer = styled.div``;

export const CartTitle = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  align-items: baseline;
  gap: 10px;

  span.cart-count {
    font-size: 0.85rem;
    font-weight: 600;
    color: #999;
    letter-spacing: 0;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #eee;

  h2 {
    font-family: "Satoshi", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #999;
    margin-top: 16px;
  }

  svg {
    font-size: 3.5rem;
    color: #ddd;
  }
`;

export const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CartListItem = styled.li`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  }

  img {
    width: 84px;
    height: 84px;
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid #f0f0f0;
    flex-shrink: 0;
  }
`;

export const ItemCart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;

  .item-name {
    font-family: "Satoshi", sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    color: #111;
  }

  .item-price {
    font-family: "Satoshi", sans-serif;
    font-weight: 600;
    color: #888;
    font-size: 0.88rem;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 4px 8px;
    width: fit-content;

    .qty-number {
      font-family: "Satoshi", sans-serif;
      font-weight: 800;
      font-size: 0.95rem;
      color: #111;
      min-width: 20px;
      text-align: center;
    }

    button {
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      color: #666;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: color 0.15s, background-color 0.15s;

      &:hover {
        background-color: #e35442;
        color: #fff;
      }
    }
  }
`;

export const Delete = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ccc;
  font-size: 1rem;
  padding: 8px;
  border-radius: 8px;
  margin-left: auto;
  transition: color 0.2s, background-color 0.2s;
  flex-shrink: 0;
  align-self: flex-start;

  &:hover {
    color: #e35442;
    background-color: #fff0ee;
  }
`;

/* ── PAINEL DE RESUMO (direita) ── */
export const SummaryPanel = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 84px;
`;

export const SummaryHeader = styled.div`
  background-color: #111;
  padding: 20px 24px;

  h2 {
    font-family: "Satoshi", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 12px;
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;

  .currency {
    font-family: "Satoshi", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #aaa;
  }

  .amount {
    font-family: "Satoshi", sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }
`;

export const SummaryBody = styled.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: "Satoshi", sans-serif;
    font-size: 0.88rem;
    color: #888;
  }

  strong {
    font-family: "Satoshi", sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    color: #333;
  }
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background-color: #f0f0f0;
`;

export const BuyNow = styled.button`
  width: 100%;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 800;
  border-radius: 12px;
  background-color: #e35442;
  color: #fff;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 16px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover:not(:disabled) {
    background-color: #c93e2e;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

/* Mantidos para compatibilidade com index.jsx antigo */
export const Result = styled.div``;
export const ResultContent = styled.div``;
