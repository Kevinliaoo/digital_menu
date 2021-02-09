import React from 'react'; 
import ReactDOM from 'react-dom';

import './styles.scss';

export const Modal = props => {
    const { isOpen, onClose } = props;

    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div 
            className='Modal' 
            data-aos="zoom-in-up"
        >
            <div classNam="Modal__container">
                <button onClick={onClose} className="Modal__close-button">X</button>
            </div>
            {props.children}
        </div>, 
        document.getElementById('modal')
    )
}