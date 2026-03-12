import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaTruck, FaArrowLeft } from "react-icons/fa";
import StoreData from "../StoreData";
import CartContext from "../../context/CartContext";

import {
  ItemPageWrapper,
  ItemContainer,
  ImageSection,
  InfoSection,
  CategoryTag,
  ItemName,
  Divider,
  PriceBlock,
  ItemDesc,
  MetaRow,
  AddToCartButton,
  BackButton,
} from "./styles";

const categoryLabel = (id) => {
  if (id <= 5) return "Bolsas";
  if (id <= 11) return "Calçados";
  return "Acessórios";
};

const ItemDetails = () => {
  const { id } = useParams();
  const item = StoreData[id];
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!item) return null;

  const addToCart = () => {
    const exists = cart.findIndex((i) => i.id === item.id);
    let updatedCart;
    if (exists >= 0) {
      updatedCart = cart.map((i, idx) =>
        idx === exists ? { ...i, qt: Number(i.qt) + 1 } : i
      );
    } else {
      updatedCart = [...cart, { ...item, qt: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <ItemPageWrapper>
      <div style={{ width: "100%", maxWidth: "1040px" }}>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft /> Voltar
        </BackButton>

        <ItemContainer>
          <ImageSection>
            <img src={item.imgdata} alt={item.name} />
          </ImageSection>

          <InfoSection>
            <CategoryTag>{categoryLabel(Number(id))}</CategoryTag>
            <ItemName>{item.name}</ItemName>
            <Divider />

            <PriceBlock>
              <span className="price-label">Preço</span>
              <span className="price-value">R$ {item.price}</span>
            </PriceBlock>

            <ItemDesc>{item.desc}</ItemDesc>

            <MetaRow>
              <FaTruck />
              <span>Frete grátis para todo o Brasil</span>
            </MetaRow>

            <AddToCartButton
              onClick={() => {
                addToCart();
                navigate("/cart");
              }}
            >
              Adicionar ao Carrinho
            </AddToCartButton>
          </InfoSection>
        </ItemContainer>
      </div>
    </ItemPageWrapper>
  );
};

export default ItemDetails;
