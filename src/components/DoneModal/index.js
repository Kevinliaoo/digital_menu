import React from 'react'; 

import { Modal } from '../Modal';

import './styles.scss'

export const DoneModal = props => {

    const { 
        isOpen, 
        closeModal,
        mode = 'showDone'
    } = props; 

    const closeMe = () => setTimeout(() => closeModal(false), 1300);
    closeMe()

    const showDone = () => {
        return(
            <>
                <div className="shape-container">
                    <div id='outer-circle'>
                        <div id="tick-mark"></div>
                    </div>
                </div>
                <p className="done__text" data-aos="zoom-in-up">Added!</p>
            </>
        )
    }

    const showError = () => {
        return (
            <>
                <div className="shape-container">
                    <div id='outer-circle'>
                        <div id="cross-mark">X</div>
                    </div>
                </div>
                <p className="done__text" data-aos="zoom-in-up">Error!</p>
            </>
        )
    }

    return(
        <Modal 
            isOpen = {isOpen}
            aos = 'flip-left'
            color_palette = 'black-transparent'
        >
            {
                mode === 'showDone' ? showDone() : ''
            }
            {
                mode === 'showError' ? showError() : ''
            }
        </Modal>
    )
}