import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { AiTwotoneDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import {
  CartPageWrapper,
  CartInner,
  CartItemContainer,
  CartTitle,
  BuyNow,
  ItemCart,
  Delete,
  EmptyCart,
  CartList,
  CartListItem,
  SummaryPanel,
  SummaryHeader,
  SummaryTotal,
  SummaryBody,
  SummaryRow,
  SummaryDivider,
} from "./styles";
import Modal from "../Modal";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);
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

  const handleRemoveItem = (cartIndex) => {
    const updatedCart = localCart.filter((_, i) => i !== cartIndex);
    setLocalCart(updatedCart);
    setCart(updatedCart);
  };

  const handleAddItem = (cartIndex) => {
    const updatedCart = localCart.map((item, i) => {
      if (i === cartIndex) return { ...item, qt: Number(item.qt || 1) + 1 };
      return item;
    });
    setLocalCart(updatedCart);
    setCart(updatedCart);
  };

  const handleMinusItem = (cartIndex) => {
    const updatedCart = localCart.map((item, i) => {
      if (i === cartIndex && Number(item.qt || 1) > 1) {
        return { ...item, qt: Number(item.qt) - 1 };
      }
      return item;
    });
    setLocalCart(updatedCart);
    setCart(updatedCart);
  };

  const parsePrice = (price) => parseFloat(String(price).replace(",", "."));

  const subtotal = localCart.reduce(
    (acc, item) => acc + parsePrice(item.price) * Number(item.qt || 1),
    0
  );

  const totalItems = localCart.reduce((acc, item) => acc + Number(item.qt || 1), 0);

  const formatCurrency = (value) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  return (
    <CartPageWrapper>
      <CartInner>
        {/* Coluna esquerda — lista de itens */}
        <CartItemContainer>
          <CartTitle>
            Meu Carrinho
            {totalItems > 0 && (
              <span className="cart-count">{totalItems} {totalItems === 1 ? "item" : "itens"}</span>
            )}
          </CartTitle>

          {localCart.length === 0 ? (
            <EmptyCart>
              <FaShoppingCart />
              <h2>Nenhum item no carrinho</h2>
            </EmptyCart>
          ) : (
            <CartList>
              {localCart.map((item, index) => (
                <CartListItem key={index}>
                  <img src={item.imgdata} alt={item.name} />
                  <ItemCart>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">R$ {item.price} / unidade</span>
                    <div className="quantity-controls">
                      <button onClick={() => handleMinusItem(index)}>
                        <AiOutlineMinus />
                      </button>
                      <span className="qty-number">{item.qt || 1}</span>
                      <button onClick={() => handleAddItem(index)}>
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </ItemCart>
                  <Delete onClick={() => handleRemoveItem(index)} title="Remover item">
                    <AiTwotoneDelete />
                  </Delete>
                </CartListItem>
              ))}
            </CartList>
          )}
        </CartItemContainer>

        {/* Coluna direita — resumo do pedido */}
        <SummaryPanel>
          <SummaryHeader>
            <h2>Resumo do Pedido</h2>
            <SummaryTotal>
              <span className="currency">R$</span>
              <span className="amount">{formatCurrency(subtotal)}</span>
            </SummaryTotal>
          </SummaryHeader>

          <SummaryBody>
            <SummaryRow>
              <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "itens"})</span>
              <strong>R$ {formatCurrency(subtotal)}</strong>
            </SummaryRow>
            <SummaryRow>
              <span>Frete</span>
              <strong style={{ color: "#4caf50" }}>Grátis</strong>
            </SummaryRow>

            <SummaryDivider />

            <SummaryRow>
              <span style={{ fontWeight: 700, color: "#111", fontSize: "0.95rem" }}>Total</span>
              <strong style={{ color: "#111", fontSize: "1rem" }}>R$ {formatCurrency(subtotal)}</strong>
            </SummaryRow>

            <BuyNow
              onClick={() => setOpen(true)}
              disabled={localCart.length === 0}
            >
              Finalizar Compra
            </BuyNow>
          </SummaryBody>
        </SummaryPanel>
      </CartInner>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </CartPageWrapper>
  );
};

export default CartItem;
