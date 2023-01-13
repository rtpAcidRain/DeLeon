import { CSSProperties, FC, ReactNode } from "react";
import OverlayModal from "../OverlayModal/OverlayModal";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Close = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 4px;
    background: gray;
    top: 0;
    right: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  hideCloseIcon?: boolean;
  overlayProps?: {
    className: string;
    style: CSSProperties;
  };
}

const Modal: FC<ModalProps> = ({
  overlayProps,
  className,
  isOpen,
  title,
  onClose,
  hideCloseIcon = false,
  children,
}) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} className={overlayProps}>
      <Container className={className}>
        {children}
        {!hideCloseIcon && <Close onClick={onClose} />}
      </Container>
    </OverlayModal>
  );
};

export default Modal;
