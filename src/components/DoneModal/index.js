import React from 'react'; 

import { Modal } from '../Modal';

import './styles.scss'

export const DoneModal = props => {

    const { isOpen, closeModal } = props; 

    const closeMe = () => setTimeout(() => closeModal(false), 1300);
    closeMe()

    return(
        <Modal 
            isOpen = {isOpen}
            aos = 'flip-left'
            color_palette = 'black-transparent'
        >
            <div className="shape-container">
                <div id='outer-circle'>
                    <div id="tick-mark"></div>
                </div>
            </div>
            <p className="done__text" data-aos="zoom-in-up">Added!</p>
        </Modal>
    )
}