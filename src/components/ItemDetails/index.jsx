import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StoreData from "../StoreData";
import { CartContext } from "../../Routes";

import { ItemAbout, ItemAttributes, ItemContainer } from "./styles";

const ItemDetails = () => {
  const { id } = useParams();
  const item = StoreData[id];
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const navigate = useNavigate();

  return (
    <div>
      <ItemContainer>
        <ItemAbout>
          <img src={item.imgdata} alt="" />

          <ItemAttributes>
            <h1>{item.name}</h1>
            <h2>R$ {item.price}</h2>
            <p>{item.desc}</p>

            <button
              onClick={() => {
                addToCart();
                navigate("/cart");
              }}
            >
              Adicionar ao Carrinho
            </button>
          </ItemAttributes>
        </ItemAbout>
      </ItemContainer>
    </div>
  );
};

export default ItemDetails;
