import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  a {
    color: #e35442;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.3rem;
    font-family: "Philosopher", sans-serif;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    gap: 20px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #686868;
    font-family: "Satoshi", sans-serif;
    font-weight: bold;
    transition: all 0.1s ease-in;
  }
`;

export const FirstMenuContainer = styled(MenuContainer)`
  p {
    margin-inline: 10px;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #e35442;
    font-family: "Satoshi";
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const SecondMenuContainer = styled(MenuContainer)`
  a {
    margin-inline: 20px;
    text-transform: uppercase;

    &:hover {
      color: #e35442;
      transition: all 0.1s ease-in;
    }
  }
`;

export const ThirdMenuContainer = styled(MenuContainer)`
  input {
    background-color: transparent;
    border-radius: 15px;
    padding: 5px 15px;
    outline: none;
    width: 180px;
    border: none;
    border: 1px solid #ccc;
    margin-right: 5px;
  }
`;

export const Busca = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid #ccc;
  margin-top: 10px;
  position: absolute;
  z-index: 3;
  top: 138px;
  width: 200px;
  max-height: 100px;
  overflow-y: scroll;
  border-bottom-left-radius: 12px;

  span {
    font-family: "Satoshi", sans-serif;
    background-color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    z-index: 5;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 3px;

    img {
      width: 55px;
      margin: 5px 15px 5px 0;
      border-radius: 12px;
      border: 1px solid #ccc;
    }
  }

  @media screen and (max-width: 1080px) {
    top: 175px;
  }
`;
