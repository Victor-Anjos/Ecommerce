import React from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Title from "../../../components/Title";
import Accessories from "../../../components/Accessories";

const AccessoriesEcommerce = () => {
  const accss = [12, 13, 14, 15, 16, 17];

  return (
    <div>
      <Header />
      <Title>Acessórios</Title>
      <div className="testeContainer">
        <div className="teste">
          {accss.map((index) => (
            <Accessories key={index} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessoriesEcommerce;
