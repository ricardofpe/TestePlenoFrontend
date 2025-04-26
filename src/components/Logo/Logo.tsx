import logo from "/capys-logo.png";
import { LogoImage } from "./LogoStyled";

interface LogoProps {
  height?: string;
  isLoginPage?: boolean; 
}

export default function Logo({ height, isLoginPage }: LogoProps) {
  return (
    
      <LogoImage src={logo} alt="Capys Logo" height={height} isLoginPage={isLoginPage} />
    
  );
}