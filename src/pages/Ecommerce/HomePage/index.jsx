import React from "react";
import Header from "../../../components/Header";
import Accessories from "../../../components/Accessories";
import Footer from "../../../components/Footer";
import styled from "styled-components";

const Hero = styled.section`
  background-color: #111;
  padding: 56px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;

  @media screen and (max-width: 600px) {
    padding: 48px 24px;
  }
`;

const HeroEyebrow = styled.span`
  font-family: "Satoshi", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e35442;
`;

const HeroTitle = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
`;

const HeroSub = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1.2rem;
  color: #bbb;
  max-width: 480px;
  line-height: 1.75;
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 52px 24px 8px;

  h2 {
    font-family: "Satoshi", sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.01em;
  }

  p {
    font-family: "Satoshi", sans-serif;
    font-size: 1.3rem;
    color: #555;
    margin-top: 10px;
    font-weight: 500;
  }
`;

const Ecommerce = () => {
  const accessoriesIndexes = [
    0, 6, 12, 1, 7, 13, 2, 8, 14, 3, 9, 15, 4, 10, 16, 5, 11, 17,
  ];

  return (
    <div>
      <Header />

      <Hero>
        <HeroEyebrow>Nova Coleção 2026</HeroEyebrow>
        <HeroTitle>Moda com estilo e qualidade</HeroTitle>
        <HeroSub>
          Bolsas, calçados e acessórios selecionados para o seu dia a dia. Frete grátis em todo o Brasil.
        </HeroSub>
      </Hero>

      <SectionHeader>
        <h2>Todos os Produtos</h2>
        <p>Explore nossa coleção completa de moda e acessórios</p>
      </SectionHeader>

      <div className="testeContainer">
        <div className="teste">
          {accessoriesIndexes.map((index) => (
            <Accessories key={index} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ecommerce;
