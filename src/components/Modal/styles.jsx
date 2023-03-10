import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalInnerContainer = styled.div`
  transform: translate(0, 30%);
  font-size: 14px;
  font-weight: bold;
  width: 350px;
  padding: 20px;
  margin: auto;
  border-radius: 15px;
  background-color: #fff;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  margin: 15px;
  border-top: 4px solid #e35442;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #e35442;
  border-right: 4px solid #e35442;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  animation: rotating 2s linear infinite;

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const ButtonContinue = styled.button`
  margin-top: 25px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #e35442;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  border: 1px solid #e35442;
  color: #e35442;
  font-weight: bold;
  margin-top: 10px;
`;

export const DataTitle = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: #e35442;
  font-family: "Monrape", sans-serif;
  padding-bottom: 10px;
  text-align: center;
`;

export const InputTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: #000;
  font-family: "Poppins", sans-serif;
`;

export const InputData = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #a7a7a7;
`;

export const SuccessPara = styled.p`
  color: #e35442;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;
`;

export const Success = styled.div`
  border: 1px solid #e35442;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 12px;
  font-family: "Satoshi", sans-serif;
  text-transform: uppercase;
  color: #e35442;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FormAccount = styled.form``;
