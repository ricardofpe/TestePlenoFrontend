import { InputContainer, InputStyled, LabelStyled } from "./InputStyled";

interface InputProps {
  placeholder?: string;
  label?: string;
}


export default function Input({ placeholder, label }: InputProps) {
  return (
    <InputContainer>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled placeholder={placeholder} />
    </InputContainer>
  );
}