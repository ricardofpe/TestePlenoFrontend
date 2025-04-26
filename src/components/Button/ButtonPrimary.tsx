import { StyledButton } from "./ButtonPrimaryStyled";

interface ButtonProps {
  children: React.ReactNode;
}


export default function ButtonPrimary({ children } : ButtonProps) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
