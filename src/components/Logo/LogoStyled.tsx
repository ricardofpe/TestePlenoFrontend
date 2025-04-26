import styled from "styled-components";

interface LogoImageProps {
  height?: string;
  isLoginPage?: boolean;
}

export const LogoImage = styled.img<LogoImageProps>`
  width: auto;
  height: ${({ height }) => height || '85px'};

  ${({ isLoginPage }) =>
    isLoginPage &&
    `
    @media (min-width: 768px) {
      height: 130px;
    }
  `}
`;