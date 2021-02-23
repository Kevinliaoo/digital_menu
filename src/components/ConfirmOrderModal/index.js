import React from 'react'; 

import { Modal } from '../Modal';

import './styles.scss';

export const ConfirmOrderModal = props => {

    const {
        isOpen,
        showModal,
    } = props;

    const handleClick = () => {
        // Mandar la orden a la cocina
        onClose();
    }

    const onClose = () => {
        showModal(false);
    }

    return(
        <Modal isOpen = {isOpen} >
            <div className="Modal__container">
                <button onClick={onClose} className="Modal__close-button">X</button>
            </div>
            <form className="orderform">
                <input 
                    className = "orderform__input"
                    placeholder = 'Insert your name: '
                />
                <div className="order-button-container">
                    <div className="order-button" onClick={handleClick}>Order</div>
                </div>
            </form>
        </Modal>
    )
}