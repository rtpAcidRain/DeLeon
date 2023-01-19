import React, { CSSProperties, FC, ReactNode, useEffect } from "react";
import Portal from "../Portal/Portal";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 36px;
  z-index: 10;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  overflow: hidden;
`;

interface OverlayProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: { style?: CSSProperties; className?: string };
}

const OverlayModal: FC<OverlayProps> = ({
  children,
  onClose,
  isOpen,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Container role="dialog">
        <Overlay
          aria-label="overlay"
          role="button"
          tabIndex={0}
          onClick={onClose}
          {...className}
        />
        {children}
      </Container>
    </Portal>
  );
};

export default OverlayModal;
