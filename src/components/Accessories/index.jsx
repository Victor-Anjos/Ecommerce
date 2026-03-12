import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import StoreData from "../StoreData";
import { AcessoriesDetails, BuyNow, AccessoriesCard, CardOverlay, ImageWrapper } from "./styles";

const Accessories = ({ index }) => {
  const accs = StoreData[index];
  if (!accs) return null;

  const { name, imgdata, price } = accs;
  const navigate = useNavigate();

  return (
    <AccessoriesCard onClick={() => navigate(`/item/${index}`)}>
      <ImageWrapper>
        <img src={imgdata} alt={name} />
        <CardOverlay>
          <BuyNow onClick={(e) => { e.stopPropagation(); navigate(`/item/${index}`); }}>
            Ver Produto
          </BuyNow>
        </CardOverlay>
      </ImageWrapper>

      <AcessoriesDetails>
        <div className="card-info">
          <span className="card-name">{name}</span>
          <span className="card-price">R$ {price}</span>
        </div>
        <div className="card-arrow">
          <FaArrowRight />
        </div>
      </AcessoriesDetails>
    </AccessoriesCard>
  );
};

export default Accessories;
