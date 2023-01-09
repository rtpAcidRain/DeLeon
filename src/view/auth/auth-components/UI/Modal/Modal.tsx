import {CSSProperties, FC, ReactNode} from "react";
import OverlayModal from "../OverlayModal/OverlayModal";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface ModalProps {
    children: ReactNode,
    isOpen: boolean,
    onClose: ()=>void,
    title?: string,
    className?: string
    overlayProps?: {
        className: string
        style: CSSProperties
    },
}

const Modal: FC<ModalProps> = ({overlayProps, className, isOpen, title, onClose, children}) => {
    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} className={overlayProps}>
            <Container className={className}>
                {children}
            </Container>
        </OverlayModal>
    );
};

export default Modal;