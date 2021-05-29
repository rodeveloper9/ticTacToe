import React from 'react';
import ModalBox from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Modal = (props) => {
    const { openModal = true, onCloseModal, className, closeOnEsc, closeOnOverlayClick, showCloseIcon } = props;
    return (
        <ModalBox
            open={openModal}
            onClose={onCloseModal}
            classNames={{ modal: className }}
            closeOnEsc={closeOnEsc}
            closeOnOverlayClick={closeOnOverlayClick}
            showCloseIcon={showCloseIcon}
        >
            {props.children}
        </ModalBox>
    )
}

export default Modal;