import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const progressBarFill = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const getColor = (type: 'success' | 'error'): string => {
  return type === 'success' ? '#3FE864' : '#E83F5B';
};

export const ToastWrapper = styled.div<{ type: 'success' | 'error'; visible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #343B41;
  color: white;
  width: 286px;
  height: 69px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${props => (props.visible ? slideIn : slideOut)} 0.3s ease-in-out forwards;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const ProgressBar = styled.div<{ type: 'success' | 'error'; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: ${props => getColor(props.type)};
  width: 100%;
  animation: ${progressBarFill} ${props => props.duration}ms linear forwards;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const IconWrapper = styled.div<{ type: 'success' | 'error' }>`
  color: ${props => getColor(props.type)};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #868E96;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    color: #ccc;
  }
`;