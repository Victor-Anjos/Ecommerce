import styled from "styled-components";

export const AccessoriesCard = styled.div`
  width: 320px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-inline: 16px;
  margin-bottom: 40px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.13);
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #f8f8f8;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${AccessoriesCard}:hover & img {
    transform: scale(1.06);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.45);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${AccessoriesCard}:hover & {
    opacity: 1;
  }
`;

export const BuyNow = styled.button`
  cursor: pointer;
  padding: 11px 26px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 6px;
  z-index: 3;
  transition: background-color 0.2s, color 0.2s;
  font-family: "Satoshi", sans-serif;

  &:hover {
    background-color: #e35442;
    border-color: #e35442;
    color: #fff;
  }
`;

export const AcessoriesDetails = styled.div`
  padding: 16px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-top: 2px solid #f0f0f0;
  transition: border-color 0.25s;

  .card-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .card-name {
    font-family: "Satoshi", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-price {
    font-family: "Satoshi", sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    color: #111;
  }

  .card-arrow {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    font-size: 0.9rem;
    transition: border-color 0.25s, color 0.25s, background-color 0.25s, transform 0.3s ease;
  }

  ${AccessoriesCard}:hover & .card-arrow {
    border-color: #e35442;
    color: #fff;
    background-color: #e35442;
    transform: rotate(-45deg);
  }
`;
