import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.15s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export const ModalInnerContainer = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: bold;
  width: 420px;
  padding: 32px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 32px);
    padding: 24px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 1.1rem;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #e35442;
    background-color: #f5f5f5;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
`;

export const StepDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#e35442" : "#e0e0e0")};
  transition: background-color 0.3s;
  ${(props) => props.$active && `
    width: 24px;
    border-radius: 4px;
  `}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;

  p {
    font-family: "Satoshi", sans-serif;
    color: #888;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const Loading = styled.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #e35442;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: rotating 0.9s linear infinite;

  @keyframes rotating {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const ButtonContinue = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background-color: #e35442;
  font-size: 0.95rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #c93e2e;
    transform: translateY(-1px);
  }
`;

export const ButtonCancel = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1.5px solid #eee;
  background-color: transparent;
  font-size: 0.9rem;
  font-family: "Satoshi", sans-serif;
  color: #888;
  font-weight: 600;
  margin-top: 10px;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: #e35442;
    color: #e35442;
  }
`;

export const DataTitle = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: #111;
  font-family: "Satoshi", sans-serif;
  font-weight: 800;
  letter-spacing: 0.06em;
  padding-bottom: 20px;
  text-align: center;
`;

export const InputTitle = styled.label`
  display: block;
  margin-top: 16px;
  margin-bottom: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  font-family: "Satoshi", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const InputData = styled.input`
  width: 100%;
  padding: 11px 14px;
  border-radius: 8px;
  outline: none;
  border: 1.5px solid #e0e0e0;
  font-family: "Satoshi", sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.2s;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "#333")};

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #e35442;
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 16px;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #e35442;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.8rem;
`;

export const SuccessPara = styled.p`
  color: #333;
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  line-height: 1.5;
`;

export const Success = styled.div`
  border: 1.5px solid #e8e8e8;
  border-radius: 8px;
  font-size: 0.85rem;
  padding: 10px 16px;
  font-family: "Satoshi", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #4caf50;
  font-weight: 700;
  background-color: #f0fff4;
  border-color: #c8e6c9;
`;

export const FormAccount = styled.form``;
