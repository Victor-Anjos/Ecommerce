import styled from "styled-components";

export const TitlePages = styled.div`
  font-family: "Satoshi", sans-serif;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #111;
  margin-top: 48px;
  margin-bottom: 8px;

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 3px;
    background-color: #e35442;
    border-radius: 2px;
    margin-top: 10px;
  }
`;
