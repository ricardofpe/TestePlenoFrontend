import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: #343B41;
  height: 38.5px;
  border: none;
  padding-left: 13.03px;
  padding-right: 13.03px;
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

  @media (min-width: 768px) {
    height: 48px;
    padding-left: 16.24px;
    padding-right: 16.24px;
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

  @media (min-width: 768px) {
    font-size: 12.18px;
    margin-bottom: 12px;
  }
`;