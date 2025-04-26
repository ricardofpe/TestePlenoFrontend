import { StyledButton } from "./ButtonDisabledStyled";

interface ButtonProps {
    children: React.ReactNode;
  }

export default function ButtonDisabled({ children } : ButtonProps) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
