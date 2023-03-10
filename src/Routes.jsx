import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

import Ecommerce from "./pages/Ecommerce/HomePage";
import ShoesEcommerce from "./pages/Ecommerce/ShoesPage";
import BagsEcommerce from "./pages/Ecommerce/BagsPage";
import AccessoriesEcommerce from "./pages/Ecommerce/AccessoriesPage";
import ItemDetails from "./pages/Item/ItemDetailsPage";
import ShoppingCart from "./pages/Cart/CartPage";

const CartContext = React.createContext();

const TestandoContext = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce />,
  },
  {
    path: "/sapatos",
    element: <ShoesEcommerce />,
  },
  {
    path: "/acessorios",
    element: <AccessoriesEcommerce />,
  },
  {
    path: "/bolsas",
    element: <BagsEcommerce />,
  },
  {
    path: "/item/:id",
    element: <ItemDetails />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

const Routes = () => <TestandoContext />;

export default Routes;

export { CartContext };
