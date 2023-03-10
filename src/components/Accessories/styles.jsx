import styled from "styled-components";

export const AccessoriesCard = styled.div`
  width: 280px;
  height: 360px;
  position: relative;
  margin-inline: 35px;
  margin-bottom: 100px;

  img {
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;

export const AcessoriesDetails = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #e35442;
  margin: 5px;

  p {
    color: #222;
    font-family: "Manrope", sans-serif;
    font-size: 1.5rem;
    margin: 5px;
  }
`;

export const BuyNow = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 15px;
  border: none;
  background-color: #e35442;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  color: #fff;
  font-weight: bold;
  transform: translate(50%);
  bottom: 10%;
  text-transform: uppercase;
  z-index: 3;
  border-radius: 4px;
`;
