import React, { useState } from 'react'; 

import { Modal } from '../Modal';
import { config } from '../../config';

import './styles.scss';

export const AddToOrderModal = props => {

    const {
        isOpen, 
        onClose,
        modalData,
        openDoneModal,
    } = props;

    const [quant, setQuant] = useState(1);
    const add = () => {
        setQuant(quant + 1);
    }
    const remove = () => {
        if(quant === 1) return; 
        setQuant(quant - 1);
    }

    const addToCart = () => {
        const STORE_KEY = config.STORAGE_KEYS.My_order;

        const data = window.localStorage.getItem(STORE_KEY);
        let jsonData = null;
        if(data === null) {
            jsonData = {
                order: [
                    {
                        product_id: modalData._id, 
                        quant: quant, 
                        unitPrice: modalData.price,
                    }
                ]
            }
        } else { 
            jsonData = JSON.parse(data);
            const ordered = checkOrdered(jsonData.order, modalData._id); 
            if(ordered !== false) {
                jsonData.order[ordered].quant = (
                    parseInt(jsonData.order[ordered].quant) + 
                    parseInt(quant)
                )
            } else {
                jsonData.order.push({
                    product_id: modalData._id, 
                    quant: quant, 
                    unitPrice: modalData.price,
                }); 
            }
        }
        window.localStorage.setItem(STORE_KEY, JSON.stringify(jsonData));

        closeModal();
    }

    const closeModal = () => {
        // Close modal if any order was made 
        setQuant(1); 
        onClose();
        openDoneModal(true);
    }

    const checkOrdered = (data, target) => {
        for(let i = 0; i < data.length; i ++) {
            if(data[i].product_id === target) return i;
        }
        return false; 
    }

    return(
        <Modal isOpen = {isOpen} >
            <div classNam="Modal__container">
                <button onClick={onClose} className="Modal__close-button">X</button>
            </div>
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
                <div className="modalAddContent__okButton" onClick={addToCart} >
                    <p>Add</p>
                </div>
            </div>
        </Modal>
    )
}