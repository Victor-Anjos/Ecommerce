import React from "react";
import CartItem from "../../../components/CartItem";
import Header from "../../../components/Header";
import { useState } from "react";

const ShoppingCart = () => {
  return (
    <div>
      <Header />
      <CartItem />
    </div>
  );
};

export default ShoppingCart;
