import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import {
  ButtonLogout,
  ContainerHeader,
  FavoritoIcon,
  HomeContainer,
  HomeLivrosContainer,
  LivroCard,
  LivroCardDetalhes,
  LivroCardTitulo,
  LivroStar,
  TitleContainer,
  UserName,
  UserRole,
  WelcomeSection,
} from "./HomeStyled";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { ResponseLivros } from "../../Mocks/livros";

interface Livro {
  ID: number;
  NOME: string;
  Star: number;
  DATA_PUBLICACAO: string;
  EDITORA: string;
  AUTOR: string;
  FL_FAVORITO: boolean;
}

function Home() {
  const [livros, setLivros] = useState<Livro[]>(
    ResponseLivros().data.lstLivros
  );
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");
    const role = localStorage.getItem("registeredRole");

    if (email) {
      setLoggedInEmail(email);
    }
    if (role) {
      setUserRole(role);
    }
  }, []);

  const toggleFavorito = (id: number) => {
    setLivros(
      livros.map((livro) =>
        livro.ID === id ? { ...livro, FL_FAVORITO: !livro.FL_FAVORITO } : livro
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    localStorage.removeItem("registeredRole");
    setLoggedInEmail(null);
    setUserRole(null);
  };

  return (
    <HomeContainer>
      <ContainerHeader>
        <Logo />
        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          onClick={handleLogout}
        >
          <ButtonLogout>Sair</ButtonLogout>
        </Link>
      </ContainerHeader>

      <WelcomeSection>
        <UserName>Olá, {loggedInEmail || "Usuário"}</UserName>
        <UserRole>{userRole || "Desenvolvedor Front-End"}</UserRole>{" "}
      </WelcomeSection>

      <HomeLivrosContainer>
        {livros.map((livro) => (
          <LivroCard key={livro.ID} style={{ position: "relative" }}>
            <TitleContainer>
              <LivroCardTitulo>{livro.NOME}</LivroCardTitulo>
              <FavoritoIcon
                isFavorito={livro.FL_FAVORITO}
                onClick={() => toggleFavorito(livro.ID)}
              >
                {livro.FL_FAVORITO ? (
                  <FaHeart size={24} />
                ) : (
                  <FaRegHeart size={24} />
                )}
              </FavoritoIcon>
            </TitleContainer>
            <LivroCardDetalhes>Autor: {livro.AUTOR}</LivroCardDetalhes>
            <LivroCardDetalhes>Editora: {livro.EDITORA}</LivroCardDetalhes>
            <LivroCardDetalhes>
              Publicação: {new Date(livro.DATA_PUBLICACAO).toLocaleDateString()}
            </LivroCardDetalhes>
            <LivroStar>
              <FaStar style={{ color: "#FFD700", marginRight: "5px" }} />{" "}
              {livro.Star}
            </LivroStar>
          </LivroCard>
        ))}
      </HomeLivrosContainer>
    </HomeContainer>
  );
}

export default Home;