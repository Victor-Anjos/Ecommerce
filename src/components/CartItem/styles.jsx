import styled from "styled-components";

export const CartItemContainer = styled.div`
  margin-top: 25px;
  margin-inline: 9%;
  background-color: #e9e9e9;
  padding: 50px;
  height: auto;
  margin-bottom: 25px;

  img {
    width: 100px;
    border-radius: 12px;
    border: 1px solid #ccc;
  }

  h2 {
    font-family: "Satoshi";
  }

  ul {
    list-style: none;
    font-size: 1.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  li {
    background-color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid #ccc;
  }

  span {
    padding: 5px 10px;
    font-family: "Satoshi";
    font-weight: bold;
    color: #222;
  }
`;

export const CartTitle = styled.h1`
  margin-bottom: 25px;
  text-transform: uppercase;
  color: #686868;
  font-family: "Satoshi", sans-serif;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export const BuyNow = styled.button`
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 4px;
  background-color: #e35442;
  color: #fff;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px;
  width: 200px;
`;

export const ItemCart = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-inline: 3px;
    padding-inline: 3px;
    padding: 3px;
    background-color: #e35442;
    border: none;
    color: #fff;
    border-radius: 4px;
  }
`;

export const Result = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 15px;
  font-size: 1.3rem;
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    color: #222;
    font-family: "Satoshi";
    font-weight: bold;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;

    p {
      margin-bottom: 10px;
    }
  }
`;

export const Delete = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 25px;
  color: #777;
`;
