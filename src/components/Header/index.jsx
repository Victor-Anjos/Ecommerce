import React, { useState, useEffect, useContext } from "react";
import { FaShoppingBag, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StoreData from "../StoreData";
import CartContext from "../../context/CartContext";
import {
  HeaderWrapper,
  Menu,
  LogoLink,
  LogoIcon,
  LogoText,
  NavLinks,
  RightActions,
  SearchWrapper,
  SearchInput,
  CartButton,
  CartBadge,
  HamburgerButton,
  MobileMenu,
  MobileMenuPanel,
  MobileMenuHeader,
  MobileNavLinks,
  MobileSearchWrapper,
  Busca,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [searchInput, setSearchInput] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + Number(item.qt || 1), 0);

  const filteredItems = StoreData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const onDocumentClick = (e) => {
      if (searchActive && !e.target.closest(".search-area")) {
        setSearchActive(false);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [searchActive]);

  // Bloqueia scroll quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    setMenuOpen(false);
    setSearchActive(false);
    setSearchInput("");
  };

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Sapatos", path: "/sapatos" },
    { label: "Bolsas", path: "/bolsas" },
    { label: "Acessórios", path: "/acessorios" },
  ];

  return (
    <HeaderWrapper>
      <Menu>
        {/* Logo */}
        <LogoLink href="/" onClick={(e) => handleNav(e, "/")}>
          <LogoIcon><FaShoppingBag /></LogoIcon>
          <LogoText>Ecommerce</LogoText>
        </LogoLink>

        {/* Nav Desktop */}
        <NavLinks>
          {navLinks.map(({ label, path }) => (
            <a key={path} href={path} onClick={(e) => handleNav(e, path)}>
              {label}
            </a>
          ))}
        </NavLinks>

        {/* Ações à direita */}
        <RightActions>
          {/* Busca desktop */}
          <SearchWrapper className="search-area">
            <SearchInput
              type="text"
              placeholder="Buscar..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={() => setSearchActive(true)}
            />

            {searchActive && searchInput && (
              <Busca>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <a
                      key={item.id}
                      href={`/item/${item.id}`}
                      onClick={(e) => handleNav(e, `/item/${item.id}`)}
                    >
                      <div className="result-item">
                        <img src={item.imgdata} alt={item.name} />
                        <div className="result-info">
                          <strong>{item.name}</strong>
                          <span>R$ {item.price}</span>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="no-results">Nenhum item encontrado.</p>
                )}
              </Busca>
            )}
          </SearchWrapper>

          {/* Carrinho */}
          <CartButton href="/cart" onClick={(e) => handleNav(e, "/cart")}>
            <FaShoppingCart />
            {cartCount > 0 && (
              <CartBadge>{cartCount > 99 ? "99+" : cartCount}</CartBadge>
            )}
          </CartButton>

          {/* Hambúrguer */}
          <HamburgerButton onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
            <FaBars />
          </HamburgerButton>
        </RightActions>
      </Menu>

      {/* Menu Mobile */}
      {menuOpen && (
        <MobileMenu onClick={() => setMenuOpen(false)}>
          <MobileMenuPanel onClick={(e) => e.stopPropagation()}>
            <MobileMenuHeader>
              <LogoLink href="/" onClick={(e) => handleNav(e, "/")}>
                <LogoIcon><FaShoppingBag /></LogoIcon>
                <LogoText>Ecommerce</LogoText>
              </LogoLink>
              <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
                <FaTimes />
              </button>
            </MobileMenuHeader>

            <MobileSearchWrapper>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                autoFocus
              />
            </MobileSearchWrapper>

            {searchInput && (
              <div style={{ marginBottom: "16px" }}>
                {filteredItems.length > 0 ? (
                  filteredItems.slice(0, 5).map((item) => (
                    <a
                      key={item.id}
                      href={`/item/${item.id}`}
                      onClick={(e) => handleNav(e, `/item/${item.id}`)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 10px",
                        textDecoration: "none",
                        borderRadius: "8px",
                        backgroundColor: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      <img
                        src={item.imgdata}
                        alt={item.name}
                        style={{ width: "36px", height: "36px", objectFit: "cover", borderRadius: "6px" }}
                      />
                      <div>
                        <p style={{ color: "#ddd", fontSize: "0.85rem", fontFamily: "Satoshi", fontWeight: 600 }}>{item.name}</p>
                        <p style={{ color: "#e35442", fontSize: "0.8rem", fontFamily: "Satoshi", fontWeight: 700 }}>R$ {item.price}</p>
                      </div>
                    </a>
                  ))
                ) : (
                  <p style={{ color: "#555", textAlign: "center", padding: "12px", fontFamily: "Satoshi", fontSize: "0.85rem" }}>
                    Nenhum item encontrado.
                  </p>
                )}
              </div>
            )}

            <MobileNavLinks>
              {navLinks.map(({ label, path }) => (
                <a key={path} href={path} onClick={(e) => handleNav(e, path)}>
                  {label}
                </a>
              ))}
              <hr />
              <a href="/cart" onClick={(e) => handleNav(e, "/cart")}>
                Carrinho {cartCount > 0 && `(${cartCount})`}
              </a>
            </MobileNavLinks>
          </MobileMenuPanel>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
