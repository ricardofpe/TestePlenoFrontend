import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: #343B41;
  height: 38.5px;
  border: none;
  padding-left: 16px;
  padding-right: 16px;
  color: #FFFFFF; 
  border-radius: 4px;

  &::placeholder {
    color: #868E96; 
  }

  &:focus {
    outline: none;
    border: 1px solid #FFFFFF; 
  }

  &:focus::placeholder {
    color: #FFFFFF; 
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

`;

export const LabelStyled = styled.label`
  color: #F8F9FA;
  margin-bottom: 5px;
  font-weight:400 ;
  font-size: 9.77px;
`;