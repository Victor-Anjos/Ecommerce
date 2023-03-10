import React from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import Accessories from "../../../components/Accessories";

const BagsEcommerce = () => {
  const bags = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <Header />
      <Title>Bolsas</Title>
      <div className="testeContainer">
        <div className="teste">
          {bags.map((index) => (
            <Accessories key={index} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BagsEcommerce;
