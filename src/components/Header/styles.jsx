import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #111;
  border-bottom: 1px solid #222;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 64px;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

/* ── LOGO ── */
export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #e35442;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Satoshi", sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #fff;
  letter-spacing: -0.02em;
`;

export const LogoText = styled.span`
  font-family: "Satoshi", sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  color: #fff;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ── NAV LINKS ── */
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;

  a {
    text-decoration: none;
    color: #aaa;
    font-family: "Satoshi", sans-serif;
    font-weight: 600;
    font-size: 0.82rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition: color 0.2s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      height: 2px;
      background-color: #e35442;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
      border-radius: 2px 2px 0 0;
    }

    &:hover {
      color: #fff;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ── RIGHT ACTIONS ── */
export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex: 1;
    margin-left: 16px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const SearchInput = styled.input`
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 7px 16px;
  outline: none;
  width: 190px;
  font-family: "Satoshi", sans-serif;
  font-size: 0.85rem;
  color: #fff;
  transition: border-color 0.2s, width 0.3s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #e35442;
    width: 220px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &:focus {
      width: 100%;
    }
  }
`;

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #aaa;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: color 0.2s, background-color 0.2s;
  text-decoration: none;

  &:hover {
    color: #e35442;
    background-color: #1e1e1e;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #e35442;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Satoshi", sans-serif;
`;

/* ── HAMBURGER ── */
export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: #aaa;
  font-size: 1.3rem;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #fff;
    background-color: #1e1e1e;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ── MOBILE MENU ── */
export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: #111;
  border-right: 1px solid #222;
  padding: 24px;
  animation: slideIn 0.25s ease;

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #aaa;
    font-size: 1.3rem;
    padding: 4px;
    border-radius: 6px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    text-decoration: none;
    color: #aaa;
    font-family: "Satoshi", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 14px 16px;
    border-radius: 10px;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: #fff;
      background-color: #1e1e1e;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #222;
    margin: 8px 0;
  }
`;

export const MobileSearchWrapper = styled.div`
  margin-bottom: 24px;

  input {
    width: 100%;
    background-color: #1e1e1e;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 10px 16px;
    outline: none;
    font-family: "Satoshi", sans-serif;
    font-size: 0.9rem;
    color: #fff;

    &::placeholder {
      color: #999;
    }

    &:focus {
      border-color: #e35442;
    }
  }
`;

/* ── SEARCH DROPDOWN ── */
export const Busca = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 300;
  top: calc(100% + 8px);
  right: 0;
  width: 100%;
  max-height: 340px;
  overflow-y: auto;
  border-radius: 12px;

  scrollbar-width: thin;
  scrollbar-color: #e35442 #222;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #222;
    border-radius: 0 12px 12px 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #e35442;
    border-radius: 4px;
  }

  a {
    display: block;
    text-decoration: none;
    transition: background-color 0.15s;

    &:hover {
      background-color: #242424;
    }
  }

  .result-item {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    border-bottom: 1px solid #222;
    gap: 12px;

    img {
      width: 44px;
      height: 44px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid #333;
      flex-shrink: 0;
    }

    .result-info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      strong {
        font-family: "Satoshi", sans-serif;
        font-size: 0.88rem;
        color: #ddd;
        font-weight: 600;
      }

      span {
        font-family: "Satoshi", sans-serif;
        font-size: 0.82rem;
        color: #e35442;
        font-weight: 700;
      }
    }
  }

  .no-results {
    padding: 20px;
    text-align: center;
    color: #555;
    font-family: "Satoshi", sans-serif;
    font-size: 0.88rem;
  }
`;
