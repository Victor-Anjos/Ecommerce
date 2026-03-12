import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterContainer, FooterInner, FooterBrand, FooterLinks, FooterBottom } from "./styles";

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <FooterInner>
        <FooterBrand>
          <h2>ECOMMERCE</h2>
          <p>Sua loja de moda com estilo e qualidade. Encontre os melhores produtos para o seu dia a dia.</p>
        </FooterBrand>

        <FooterLinks>
          <h3>Categorias</h3>
          <ul>
            <li><a href="/" onClick={(e) => handleNav(e, "/")}>Início</a></li>
            <li><a href="/sapatos" onClick={(e) => handleNav(e, "/sapatos")}>Sapatos</a></li>
            <li><a href="/bolsas" onClick={(e) => handleNav(e, "/bolsas")}>Bolsas</a></li>
            <li><a href="/acessorios" onClick={(e) => handleNav(e, "/acessorios")}>Acessórios</a></li>
          </ul>
        </FooterLinks>

        <FooterLinks>
          <h3>Sua Conta</h3>
          <ul>
            <li><a href="/cart" onClick={(e) => handleNav(e, "/cart")}>Carrinho</a></li>
          </ul>
        </FooterLinks>
      </FooterInner>

      <FooterBottom>
        <p>Desenvolvido por <strong>Victor César</strong> &mdash; {new Date().getFullYear()}</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
