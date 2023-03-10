import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreData from "../StoreData";
import styled from "styled-components";

import { AcessoriesDetails, BuyNow, AccessoriesCard } from "./styles";

const Accessories = ({ index }) => {
  const accs = StoreData[index];
  if (!accs) return null;

  const { name, imgdata, price } = accs;
  const [buyNow, setBuyNow] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setBuyNow(true)}
      onMouseLeave={() => setBuyNow(false)}
    >
      <AccessoriesCard>
        {buyNow && (
          <BuyNow onClick={() => navigate(`/item/${index}`)}>
            Compre Agora
          </BuyNow>
        )}
        <img src={imgdata} alt="" height="100%" width="100%" />

        <AcessoriesDetails>
          <p>{name}</p>
          <p>R$ {price}</p>
        </AcessoriesDetails>
      </AccessoriesCard>
    </div>
  );
};

export default Accessories;
