import React, { useEffect, useState, useContext } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import CartContext from "../../context/CartContext";

import {
  ModalContainer,
  ModalInnerContainer,
  ModalCloseButton,
  StepIndicator,
  StepDot,
  Success,
  DataTitle,
  FormAccount,
  SuccessPara,
  SuccessContainer,
  SuccessIcon,
  InputData,
  InputTitle,
  ButtonCancel,
  ButtonContinue,
} from "./styles";

const Steps = {
  DATA: "DATA",
  ADDRESS: "ADDRESS",
  SUCCESS: "SUCCESS",
};

const stepIndex = {
  [Steps.DATA]: 1,
  [Steps.ADDRESS]: 2,
  [Steps.SUCCESS]: 3,
};

const Modal = ({ onClose, isOpen }) => {
  const { setCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [cepLoading, setCepLoading] = useState(false);

  const [step, setStep] = useState(Steps.DATA);

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
    const cepValue = value.replace(/\D/g, "");
    if (cepValue.length === 8) {
      setCepLoading(true);
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setCidade(data.localidade);
            setEstado(data.uf);
            setBairro(data.bairro);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setCepLoading(false));
    }
  };

  const handleFinish = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    onClose();
  };

  const currentStepIndex = stepIndex[step];

  return (
    isOpen && (
      <ModalContainer>
        <ModalInnerContainer>
          {step !== Steps.SUCCESS && (
            <ModalCloseButton onClick={onClose} aria-label="Fechar">
              <FaTimes />
            </ModalCloseButton>
          )}

          {step !== Steps.SUCCESS && (
            <StepIndicator>
              {[1, 2, 3].map((s) => (
                <StepDot key={s} $active={currentStepIndex >= s} />
              ))}
            </StepIndicator>
          )}

          {step === Steps.DATA && (
            <>
              <DataTitle>Seus Dados</DataTitle>
              <FormAccount>
                <InputTitle htmlFor="name">Nome completo</InputTitle>
                <InputData
                  id="name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="João da Silva"
                />

                <InputTitle htmlFor="email">E-mail</InputTitle>
                <InputData
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="joao@email.com"
                />

                <InputTitle htmlFor="birth">Data de Nascimento</InputTitle>
                <InputData
                  id="birth"
                  required
                  type="date"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </FormAccount>
              <ButtonContinue
                onClick={() => {
                  if (name && email && email.includes("@") && birth) {
                    setStep(Steps.ADDRESS);
                  } else {
                    alert("Por favor, preencha todos os campos com dados válidos.");
                  }
                }}
              >
                Continuar
              </ButtonContinue>
            </>
          )}

          {step === Steps.ADDRESS && (
            <>
              <DataTitle>Endereço de Entrega</DataTitle>
              <FormAccount>
                <InputTitle htmlFor="cep">CEP</InputTitle>
                <InputData
                  id="cep"
                  required
                  type="text"
                  maxLength="9"
                  value={cep}
                  onChange={handleCepChange}
                  placeholder="00000-000"
                />

                <InputTitle htmlFor="cidade">Cidade</InputTitle>
                <InputData
                  id="cidade"
                  disabled
                  required
                  type="text"
                  value={cepLoading ? "Buscando..." : cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Preenchido automaticamente"
                />

                <InputTitle htmlFor="estado">Estado</InputTitle>
                <InputData
                  id="estado"
                  disabled
                  required
                  type="text"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  placeholder="Preenchido automaticamente"
                />

                <InputTitle htmlFor="bairro">Bairro</InputTitle>
                <InputData
                  id="bairro"
                  disabled
                  required
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Preenchido automaticamente"
                />
              </FormAccount>
              <ButtonContinue
                onClick={() => {
                  if (cep && estado && cidade && bairro) {
                    setStep(Steps.SUCCESS);
                  } else {
                    alert("Por favor, insira um CEP válido para preencher o endereço.");
                  }
                }}
              >
                Confirmar Pedido
              </ButtonContinue>
              <ButtonCancel onClick={() => setStep(Steps.DATA)}>
                Voltar
              </ButtonCancel>
            </>
          )}

          {step === Steps.SUCCESS && (
            <>
              <DataTitle>Pedido Confirmado</DataTitle>
              <SuccessContainer>
                <SuccessIcon>
                  <FaCheck />
                </SuccessIcon>
                <SuccessPara>
                  Sua compra foi realizada com sucesso!<br />
                  Em breve você receberá um e-mail de confirmação.
                </SuccessPara>
                <Success>Status: Confirmado</Success>
              </SuccessContainer>
              <ButtonContinue onClick={handleFinish}>
                Concluir
              </ButtonContinue>
            </>
          )}
        </ModalInnerContainer>
      </ModalContainer>
    )
  );
};

export default Modal;
