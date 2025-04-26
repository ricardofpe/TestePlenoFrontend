import { FaEye, FaEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonDisabled from "../../components/ButtonDisabled/ButtonDisabled";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import {
  ButtonContainer,
  LoginForm,
  LoginPageContainer,
  PasswordInputWrapper,
  PasswordToggle,
  Span,
  Title,
} from "./LoginStyled";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginPageContainer>
      <Logo />
      <LoginForm>
        <Title>Login</Title>
        <Input label="Email" placeholder="Digite seu email" />
        <PasswordInputWrapper>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type={showPassword ? "text" : "password"}
          />
          <PasswordToggle onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FaEyeSlash size={15} color="#868E96" />
            ) : (
              <FaEye size={15} color="#868E96" />
            )}
          </PasswordToggle>
        </PasswordInputWrapper>

        <ButtonContainer>
          <ButtonPrimary>Login</ButtonPrimary>
          <Span>Ainda não possui uma conta?</Span>

          <Link style={{textDecoration:"none"}} to="/register">
            {" "}
            <ButtonDisabled>Cadastre-se</ButtonDisabled>
          </Link>
        </ButtonContainer>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default Login;
