import styled from "styled-components";

export const ItemPageWrapper = styled.div`
  min-height: calc(100vh - 64px);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 32px;

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    align-items: flex-start;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 1040px;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

/* ── IMAGEM ── */
export const ImageSection = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.04);
    }
  }
`;

/* ── DETALHES ── */
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: "Satoshi", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #e35442;
  margin-bottom: 14px;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #e35442;
    margin-right: 8px;
    border-radius: 2px;
  }
`;

export const ItemName = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #111;
  line-height: 1.2;
  margin-bottom: 28px;

  @media screen and (max-width: 820px) {
    font-size: 1.6rem;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #f0f0f0;
  margin-bottom: 28px;
`;

export const PriceBlock = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .price-label {
    font-family: "Satoshi", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: #bbb;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .price-value {
    font-family: "Satoshi", sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    color: #111;
    line-height: 1;
    letter-spacing: -0.01em;
    font-style: normal;
  }
`;

export const ItemDesc = styled.p`
  font-size: 0.95rem;
  font-family: "Satoshi", sans-serif;
  color: #444;
  line-height: 1.8;
  margin-bottom: 36px;
  font-style: italic;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;

  svg {
    color: #4caf50;
    font-size: 0.95rem;
    flex-shrink: 0;
  }

  span {
    font-family: "Satoshi", sans-serif;
    font-size: 0.83rem;
    font-weight: 600;
    color: #555;
  }
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 17px;
  font-size: 0.88rem;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background-color: #111;
  font-family: "Satoshi", sans-serif;
  transition: background-color 0.25s, transform 0.15s;

  &:hover {
    background-color: #e35442;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #aaa;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 32px;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: #111;
  }
`;
