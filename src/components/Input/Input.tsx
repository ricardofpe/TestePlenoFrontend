import { InputContainer, InputStyled, LabelStyled } from "./InputStyled";

interface InputProps {
  placeholder?: string;
  label?: string;
  type?: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function Input({ placeholder, label, type = "text", value, onChange }: InputProps) {
  return (
    <InputContainer>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}