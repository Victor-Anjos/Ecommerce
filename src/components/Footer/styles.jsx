import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 80px;
  background-color: #111;
  color: #ccc;
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 24px;
  }
`;

export const FooterBrand = styled.div`
  h2 {
    font-family: "Satoshi", sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #e35442;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  p {
    font-family: "Satoshi", sans-serif;
    font-size: 0.9rem;
    line-height: 1.7;
    color: #bbb;
    max-width: 280px;
  }
`;

export const FooterLinks = styled.div`
  h3 {
    font-family: "Satoshi", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    text-decoration: none;
    font-family: "Satoshi", sans-serif;
    font-size: 0.9rem;
    color: #bbb;
    transition: color 0.2s;

    &:hover {
      color: #e35442;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #222;
  padding: 20px 40px;
  text-align: center;

  p {
    font-family: "Satoshi", sans-serif;
    font-size: 0.85rem;
    color: #aaa;
  }

  strong {
    color: #ccc;
  }
`;
