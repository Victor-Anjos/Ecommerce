import React from "react";
import Header from "../../../components/Header";
import ItemDetails from "../../../components/ItemDetails";
import { useState, useContext } from "react";

const ItemDetailsPage = ({ id }) => {
  return (
    <div>
      <Header />
      <ItemDetails index={id} />
    </div>
  );
};

export default ItemDetailsPage;
