import { Link } from "react-router-dom";
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

function Register() {
  return (
    <RegisterPageContainer>
      <ContainerHeader>
        <Logo />
        <Link style={{ textDecoration: "none" }} to="/login">
          {" "}
          <ButtonBack>Voltar</ButtonBack>{" "}
        </Link>
      </ContainerHeader>

      <RegisterForm>
        <Title>Crie sua conta</Title>
        <Span>Rápido e grátis, vamos nessa</Span>
        <Input label="Nome" placeholder="Digite aqui seu nome" />
        <Input label="Email" placeholder="Digite aqui seu email" />

        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
        />

        <Input
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          type="password"
        />

        <Input label="Bio" placeholder="Fale sobre você" />
        <Input label="Contato" placeholder="Opção de contato" />

        <LabelStyled>Selecionar Cargo</LabelStyled>
        <SelectStyled>
          <option>Desenvolvedor Front-End</option>
          <option>Desenvolvedor Back-End</option>
          <option>Desenvolvedor Fullstack</option>
        </SelectStyled>

        <ButtonContainer>
          <ButtonPrimary>Cadastrar</ButtonPrimary>
        </ButtonContainer>
      </RegisterForm>
    </RegisterPageContainer>
  );
}

export default Register;