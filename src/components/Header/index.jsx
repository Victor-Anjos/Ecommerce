import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StoreData from "../StoreData";
import {
  Logo,
  Menu,
  FirstMenuContainer,
  SecondMenuContainer,
  ThirdMenuContainer,
  Busca,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const [active, setActive] = useState(false);

  useEffect(() => {
    const onDocumentClick = (e) => {
      if (active && !e.target.closest(".dropdown")) {
        setActive(false);
      }
    };

    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [active]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredItems = StoreData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <Logo>
        <a href="" onClick={() => navigate("/")}>
          <img src="/assets/imagens/logo.png" alt="" />
        </a>
      </Logo>
      <Menu>
        <FirstMenuContainer>
          <p>ECOMMERCE</p>
        </FirstMenuContainer>
        <SecondMenuContainer>
          <a href="" onClick={() => navigate("/")}>
            Inicio
          </a>
          <a href="" onClick={() => navigate("/sapatos")}>
            Sapatos
          </a>
          <a href="" onClick={() => navigate("/bolsas")}>
            Bolsas
          </a>
          <a href="" onClick={() => navigate("/acessorios")}>
            Acessorios
          </a>
        </SecondMenuContainer>
        <ThirdMenuContainer>
          <input
            className="dropdown"
            onClick={() => setActive(true)}
            type="text"
            placeholder="Busca..."
            onChange={handleInput}
            value={searchInput}
          />

          {active && (
            <Busca>
              {" "}
              {filteredItems.map((item) => (
                <div key={item.id}>
                  <a href="" onClick={() => navigate(`/item/${item.id}`)}>
                    <span>
                      <img src={item.imgdata} alt="" />
                      {item.name} <br />
                      R${item.price}
                    </span>
                  </a>
                </div>
              ))}
            </Busca>
          )}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/cart");
            }}
          >
            <FaShoppingCart />
          </a>
        </ThirdMenuContainer>
      </Menu>
    </div>
  );
};

export default Header;
