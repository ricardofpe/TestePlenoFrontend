import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.div`
  background-color: #021a30;
  padding: 33.69px 17.65px;
  border-radius: 3.21px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 296px;
  height: 402px;

  @media (min-width: 768px) {
    width: 369px;
    height: 502px;
    padding: 42px 22px;
    gap: 22px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #fff;
  font-size: 14.44px;
  line-height: 22.46px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const Span = styled.span`
  color: #868e96;
  font-size: 12px;
  align-self: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;

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
