import React, { useState } from 'react'; 

import { Modal } from '../Modal';

import './styles.scss';

export const AddToOrderModal = props => {

    const {
        isOpen, 
        onClose,
        modalData,
    } = props;

    const [quant, setQuant] = useState(1);
    const add = () => {
        setQuant(quant + 1);
    }
    const remove = () => {
        if(quant === 1) return; 
        setQuant(quant - 1);
    }

    return(
        <Modal 
            isOpen = {isOpen} 
            onClose = {onClose}
        >
            <div className="modalAddContent">
                <p className='modalAddContent__name'>{modalData.name}</p>
                <p className="modalAddContent__price" >${modalData.price}</p>
                <div className="quantitySelector">

                </div>
                <div className="modalAddContent__buttons">
                    <div className="minusButton" onClick={remove}><p>-</p></div>
                    <div className="quantity"><p>{quant}</p></div>
                    <div className="plusButton" onClick={add}><p>+</p></div>
                </div>
            </div>
        </Modal>
    )
}