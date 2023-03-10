import React from "react";

import Header from "../../../components/Header";
import Accessories from "../../../components/Accessories";
import Footer from "../../../components/Footer";

const Ecommerce = () => {
  const accessoriesIndexes = [
    0, 6, 12, 1, 7, 13, 2, 8, 14, 3, 9, 15, 4, 10, 16, 5, 11, 17,
  ];

  return (
    <div>
      <Header />
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
