import React from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import Accessories from "../../../components/Accessories";

const ShoesEcommerce = () => {
  const shoes = [6, 7, 8, 9, 10, 11];

  return (
    <div>
      <Header />
      <Title>Sapatos</Title>
      <div className="testeContainer">
        <div className="teste">
          {shoes.map((index) => (
            <Accessories key={index} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoesEcommerce;
