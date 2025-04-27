import { FaEye, FaEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonDisabled from "../../components/ButtonDisabled/ButtonDisabled";
import Input from "../../components/Input/Input";

import {
  ButtonContainer,
  LoginForm,
  LoginPageContainer,
  PasswordInputWrapper,
  PasswordToggle,
  Span,
  Title,
} from "./LoginStyled";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResponseLogin } from "../../Mocks/login";
import { StyledToastContainer, ToastType } from "../../components/StyledToastContainer/StyledToastContainer";
import Logo from "../../components/Logo/Logo";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [toast, setToast] = useState<ToastType | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const registeredEmail = localStorage.getItem("registeredEmail");
    if (registeredEmail) {
      setEmail(registeredEmail);
      localStorage.removeItem("registeredEmail");
    }
  }, []);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({
      message,
      type,
      visible: true,
      onClose: () => setToast(null),
    });

    setTimeout(() => {
      setToast(null);
    }, 5000);
  };


  const handleLogin = async () => {
    try {
      if (!email || !password) {
        showToast("Por favor, preencha todos os campos.", "error");
        return;
      }

      if (!validateEmail(email)) {
        showToast("Por favor, insira um email válido.", "error");
        return;
      }

      if (password.length < 6) {
        showToast("A senha deve ter pelo menos 6 caracteres.", "error");
        return;
      }


      const response = ResponseLogin({ Email: email, Senha: password });

      if (response.status === 200) {
        localStorage.setItem("loggedInEmail", email);
        showToast("Login efetuado com sucesso!", "success");


        setTimeout(() => {
          navigate("/");
        }, 2000);

      } else {
        showToast("Falha ao realizar o login. Verifique seu email e senha.", "error");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      showToast("Erro ao realizar o login.", "error");
    }
  };

  return (
    <>
      <LoginPageContainer>
        <Logo isLoginPage={true} />
        <LoginForm>
          <Title>Login</Title>
          <Input
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInputWrapper>
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <ButtonPrimary onClick={handleLogin}>Login</ButtonPrimary>
            <Span>Ainda não possui uma conta?</Span>

            <Link style={{ textDecoration: "none" }} to="/register">
              <ButtonDisabled>Cadastre-se</ButtonDisabled>
            </Link>
          </ButtonContainer>
        </LoginForm>
      </LoginPageContainer>
      {toast && (
        <StyledToastContainer
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          duration={3000}
          onClose={toast.onClose}
        />
      )}
    </>
  );
}

export default Login;