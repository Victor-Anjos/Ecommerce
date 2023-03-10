import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../Routes";
import { AiTwotoneDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  CartItemContainer,
  CartTitle,
  BuyNow,
  ItemCart,
  Result,
  ResultContent,
  Delete,
} from "./styles";
import Modal from "../Modal";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [localCart, setLocalCart] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setLocalCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    setLocalCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = localCart.filter((item) => item.id !== itemId);
    setLocalCart(updatedCart);
    setCart(updatedCart);
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const handleAddItem = (itemId) => {
    const updatedCart = localCart.map((item) => {
      if (item.id === itemId) {
        item.qt++;
      }
      return item;
    });
    setLocalCart(updatedCart);
    setCart(updatedCart);
  };

  const handleMinusItem = (itemId) => {
    const updatedCart = localCart.map((item) => {
      if (item.id === itemId && item.qt > 1) {
        item.qt--;
      }
      return item;
    });
    setLocalCart(updatedCart);
    setCart(updatedCart);
  };

  return (
    <CartItemContainer>
      <CartTitle>Itens no carrinho</CartTitle>
      {localCart.length === 0 ? (
        <ul>
          <li>
            <h2>Nenhum item no carrinho</h2>
          </li>
        </ul>
      ) : (
        <ul>
          {localCart.map((item) => (
            <li key={item.id}>
              <Delete onClick={() => handleRemoveItem(item.id)}>
                <AiTwotoneDelete />
              </Delete>
              <img src={item.imgdata} alt="" />
              <ItemCart>
                <span>{item.name}</span>
                <span>
                  Qntd: {""}
                  <button onClick={() => handleMinusItem(item.id, item.qt)}>
                    <AiOutlineMinus />
                  </button>
                  <span>{item.qt}</span>
                  <button onClick={() => handleAddItem(item.id, item.qt)}>
                    <AiOutlinePlus />
                  </button>
                </span>
                <span>( R$ {item.price} )</span>
              </ItemCart>
            </li>
          ))}
        </ul>
      )}

      <Result>
        <ResultContent>
          <p>
            Valor total: R${" "}
            {localCart.reduce(
              (acc, item) => acc + parseFloat(item.price) * item.qt,
              0
            )}
            ,00
          </p>

          <BuyNow
            onClick={() => setOpen(true)}
            disabled={
              localCart.reduce(
                (acc, item) => acc + parseFloat(item.price),
                0
              ) === 0
            }
          >
            Comprar
          </BuyNow>

          <Modal isOpen={open} onClose={() => setOpen(false)} />
        </ResultContent>
      </Result>
    </CartItemContainer>
  );
};

export default CartItem;
