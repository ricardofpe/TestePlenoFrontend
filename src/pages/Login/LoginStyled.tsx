import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.div`
  background-color: #021A30;
  padding: 32px;
  border-radius: 3.21px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 296px;
  height: 402px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #fff;
  font-size: 14px;
`;

export const Span = styled.span`
  color: #868E96;
  font-size: 12px;
  align-self: center;
  margin-top: 15px;
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-direction: column;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const PasswordToggle = styled.span`
  position: absolute;
  right: 10px;
  top: 68%;
  transform: translateY(-50%);
  cursor: pointer;
`;