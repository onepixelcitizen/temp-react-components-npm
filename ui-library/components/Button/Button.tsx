import React, { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: #57c32c;
  padding: 5px 20px;
  color: #fff;
  border-radius: 4px;
`;

interface IButton {
  text: string;
  onClick: (e: any) => void;
}

const Button: FC<IButton> = ({ text, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

export default Button;
