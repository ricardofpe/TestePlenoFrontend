import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #021a30;
  min-height: 100vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const WelcomeSection = styled.div`
  width: 100%;
  background-color: #01121F;
  padding: 16px 0;
  margin-bottom: 20px;
  height: 131px;
`;

export const UserName = styled.h2`
  color: #f8f9fa;
  font-size: 18px;
  font-weight: 700;
  margin: 0 20px;
  line-height: 28px;
`;

export const UserRole = styled.span`
  color: #868e96;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
  margin: 4px 20px 0;
  display: block;
`;

export const MessageSection = styled.div`
  width: 100%;
  padding: 20px;
  text-align: start;
`;

export const MessageTitle = styled.h3`
  color: #f8f9fa;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const MessageText = styled.p`
  color: #adb5bd;
  font-size: 14px;
  line-height: 1.5;
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border: none;
  color: #f8f9fa;
  font-weight: 600;
  font-size: 12px;
  line-height: 28.42px;
  cursor: pointer;
`;

export const HomeLivrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

export const LivroCard = styled.div`
  background-color: #01121F;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: calc(33.33% - 20px);
  min-width: 250px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  color: #f8f9fa;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const LivroCardTitulo = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #f8f9fa;
`;

export const LivroCardDetalhes = styled.p`
  font-size: 0.9em;
  color: #adb5bd;
  margin-bottom: 5px;
`;

export const LivroStar = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #FFD700;
  margin-bottom: 5px;
`;

export const FavoritoIcon = styled.div<{ isFavorito: boolean }>`
  cursor: pointer;
  color: ${props => props.isFavorito ? '#E91E63' : '#f8f9fa'};
`;

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`