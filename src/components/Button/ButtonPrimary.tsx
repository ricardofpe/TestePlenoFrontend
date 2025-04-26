import { StyledButton } from "./ButtonPrimaryStyled";
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void; 
}

export default function ButtonPrimary({ children, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}