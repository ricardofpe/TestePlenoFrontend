import { MdCheckCircle, MdError, MdClose } from 'react-icons/md';
import { ToastWrapper, ProgressBar, IconWrapper, CloseButton } from './StyledToastContainerStyled';

export interface ToastType {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
  duration?: number;
  onClose: () => void;
}

const StyledToastContainer: React.FC<ToastType> = ({ message, type, visible, duration = 3000, onClose }) => {


  return (
    <ToastWrapper type={type} visible={visible}>
      <IconWrapper type={type}>
        {type === 'success' ? <MdCheckCircle size={24} /> : <MdError size={24} />}
      </IconWrapper>
      <span>{message}</span>
      <CloseButton onClick={onClose}>
        <MdClose size={20} />
      </CloseButton>
      <ProgressBar type={type} duration={duration} />
    </ToastWrapper>
  );
};

export { StyledToastContainer };