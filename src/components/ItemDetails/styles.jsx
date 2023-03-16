import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-inline: 10%;
  align-items: center;
  margin-top: 15px;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 12px;
    margin-bottom: 20px;
    min-width: 10%;
  }

  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;

    img {
      transform: scale(0.9);
      margin-top: 0;
    }
  }
`;

export const ItemAttributes = styled.div`
  padding: 15px;

  h1 {
    text-align: left;
    font-family: "Satoshi", sans-serif;
    color: #222;
    font-weight: 600;
    font-size: 3.7rem;
    border-bottom: 3px solid #e35442;
  }

  h2 {
    margin-top: 20px;
    text-align: left;
    font-weight: 600;
    font-size: 3rem;
    font-family: "Satoshi", sans-serif;
    color: #222;
  }

  p {
    margin-top: 15px;
    text-align: left;
    font-size: 1.4rem;
    font-family: "Satoshi", sans-serif;
    font-weight: 400;
    color: #222;
  }

  button {
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #e35442;
    font-weight: bold;
    color: #e35442;
    text-transform: uppercase;
    background-color: transparent;
    transition: all 0.3s ease-in;
    margin-bottom: 20px;

    &:hover {
      background-color: #e35442;
      transition: all 0.3s ease-in;
      color: #fff;
    }
  }

  @media screen and (min-width: 1180px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 1180px) {
    padding: 0;

    margin-left: 5px;
    width: 540px;

    h1,
    p,
    h2 {
      text-align: center;
    }
  }
`;
