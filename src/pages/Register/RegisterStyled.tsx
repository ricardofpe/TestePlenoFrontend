import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const RegisterForm = styled.div`
  background-color: #021a30;
  padding: 32px;
  border-radius: 3.21px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 370px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 8px;
  color: #fff;
  font-size: 14.39px;
  font-weight: 700;
  line-height: 22.39px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const Span = styled.span`
  color: #868e96;
  font-size: 9.59px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
  line-height: 17.59px;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SelectStyled = styled.select`
  background-color: #343b41;
  color: #868e96;
  border: none;
  border-radius: 3.21px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  height: 38.38px;
  width: 100%;
  min-width: 150px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 5'%3E%3Cpath d='M2.5 3.5L0 1h5z' fill='%23868E96'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 10px;
  padding-right: 30px;

  @media (min-width: 768px) {
    height: 48px;
    padding-left: 16.24px;
    padding-right: 16.24px;
  }
`;

export const LabelStyled = styled.label`
  color: #f8f9fa;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 9.77px;
`;

export const ButtonBack = styled.button`
  background-color: #021a30;
  border: none;
  height: 31.95px;
  padding-left: 12.99px;
  padding-right: 12.99px;
  font-size: 9.59px;
  font-weight: 600;
  line-height: 23.73px;
  color: #F8F9FA;
  cursor: pointer;
  min-width: 79.54px;
  margin: 0px 30px;
`

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0px 20px;
width: 390px;
margin-bottom: 5px;

@media (min-width: 768px) {
    width: 464px;
  }
`