import { InputContainer, InputStyled, LabelStyled } from "./InputStyled";

interface InputProps {
  placeholder?: string;
  label?: string;
  type?: string;
}


export default function Input({ placeholder, label ,type = "text"}: InputProps) {
  return (
    <InputContainer>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled type={type} placeholder={placeholder} />
    </InputContainer>
  );
}