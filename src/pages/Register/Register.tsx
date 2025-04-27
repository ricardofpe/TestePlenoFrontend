import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import {
  RegisterPageContainer,
  RegisterForm,
  Title,
  Span,
  ButtonContainer,
  SelectStyled,
  LabelStyled,
  ButtonBack,
  ContainerHeader,
} from "./RegisterStyled";
import { StyledToastContainer, ToastType } from "../../components/StyledToastContainer/StyledToastContainer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("Desenvolvedor Fullstack");
  const [toast, setToast] = useState<ToastType | null>(null);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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


  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword || !bio || !contact) {
      showToast("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (name.length < 3) {
      showToast("O nome deve ter pelo menos 3 caracteres.", "error");
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

    if (password !== confirmPassword) {
      showToast("As senhas não coincidem.", "error");
      return;
    }

    try {
      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("registeredRole", role);
      showToast("Cadastro efetuado com sucesso!", "success");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      showToast("Erro ao realizar o cadastro.", "error");
    }
  };

  return (
    <>
      <RegisterPageContainer>
      <ContainerHeader>
          <Logo />
          <Link style={{ textDecoration: "none" }} to="/login">
            <ButtonBack>Voltar</ButtonBack>
          </Link>
        </ContainerHeader>

        <RegisterForm>
          <Title>Crie sua conta</Title>
          <Span>Rápido e grátis, vamos nessa</Span>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Input
            label="Bio"
            placeholder="Fale sobre você"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Input
            label="Contato"
            placeholder="Opção de contato"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <LabelStyled>Selecionar Cargo</LabelStyled>
          <SelectStyled value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Desenvolvedor Front-End</option>
            <option>Desenvolvedor Back-End</option>
            <option>Desenvolvedor Fullstack</option>
          </SelectStyled>

          <ButtonContainer>
            <ButtonPrimary onClick={handleRegister}>Cadastrar</ButtonPrimary>
          </ButtonContainer>
        </RegisterForm>
      </RegisterPageContainer>
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

export default Register;