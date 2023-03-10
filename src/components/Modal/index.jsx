import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

import {
  ModalContainer,
  ModalInnerContainer,
  Success,
  DataTitle,
  FormAccount,
  SuccessPara,
  InputData,
  InputTitle,
  ButtonCancel,
  ButtonContinue,
  Loading,
  LoadingContainer,
} from "./styles";

const Steps = {
  LOADING: "LOADING",
  DATA: "DATA",
  ADDRESS: "ADDRESS",
  SUCCESS: "SUCCESS",
};

const handleClick = () => {
  window.location.reload();
};

const Modal = ({ onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthChange = (e) => {
    setBirth(e.target.value);
  };

  const handleCepChange = (e) => {
    setCep(e.target.value);
    const cepValue = e.target.value.replace(/\D/g, "");
    if (cepValue.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setCidade(data.localidade);
          setEstado(data.uf);
          setBairro(data.bairro);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleCidadeChange = (e) => {
    setCidade(e.target.value);
  };

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleBairroChange = (e) => {
    setBairro(e.target.value);
  };

  const [step, setStep] = useState(Steps.LOADING);

  useEffect(() => {
    if (step === Steps.LOADING) {
      setTimeout(() => setStep(Steps.DATA), 3000);
    }
  }, [step]);

  return (
    isOpen && (
      <ModalContainer>
        <ModalInnerContainer>
          {step === Steps.LOADING && (
            <>
              <DataTitle>Loading</DataTitle>
              <LoadingContainer>
                <Loading></Loading>
              </LoadingContainer>
              <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            </>
          )}

          {step === Steps.DATA && (
            <>
              <DataTitle>Preencha os dados</DataTitle>
              <FormAccount>
                <InputTitle>Nome</InputTitle>
                <InputData
                  required
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />

                <InputTitle>Email</InputTitle>
                <InputData
                  required
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />

                <InputTitle>Data de Nascimento</InputTitle>
                <InputData
                  required
                  type="date"
                  value={birth}
                  onChange={handleBirthChange}
                />
              </FormAccount>
              <ButtonContinue
                onClick={() => {
                  if (name && email && birth) {
                    setStep(Steps.ADDRESS);
                  } else {
                    alert("Por favor, preencha todos os campos");
                  }
                }}
              >
                Continuar
              </ButtonContinue>
              <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            </>
          )}

          {step === Steps.ADDRESS && (
            <>
              <DataTitle>Informe seu Endereço</DataTitle>
              <FormAccount>
                <InputTitle>CEP</InputTitle>
                <InputData
                  required
                  type="tel"
                  value={cep}
                  onChange={handleCepChange}
                />
                <InputTitle>Cidade</InputTitle>
                <InputData
                  required
                  type="text"
                  value={cidade}
                  onChange={handleCidadeChange}
                />
                <InputTitle>Estado</InputTitle>
                <InputData
                  required
                  type="text"
                  value={estado}
                  onChange={handleEstadoChange}
                />
                <InputTitle>Bairro</InputTitle>
                <InputData
                  required
                  type="text"
                  value={bairro}
                  onChange={handleBairroChange}
                />
              </FormAccount>
              <ButtonContinue
                onClick={() => {
                  if (cep && estado && cidade && bairro) {
                    setStep(Steps.SUCCESS);
                  } else {
                    alert("Por favor, preencha todos os campos");
                  }
                }}
              >
                Continuar
              </ButtonContinue>
            </>
          )}

          {step === Steps.SUCCESS && (
            <>
              <DataTitle>Parabéns</DataTitle>
              <SuccessPara>Sua compra foi realizada com sucesso</SuccessPara>
              <Success>{"Status: Concluido"}</Success>
              <ButtonContinue onClick={handleClick}>
                Concluir compra
              </ButtonContinue>
            </>
          )}
        </ModalInnerContainer>
      </ModalContainer>
    )
  );
};

export default Modal;
