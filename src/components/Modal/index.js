import React from 'react'; 
import ReactDOM from 'react-dom';

import './styles.scss';

const DEFAULT_AOS = 'zoom-in-up'; 

export const Modal = props => {
    const { 
        isOpen, 
        aos = DEFAULT_AOS, 
        color_palette = 'main-color', 
    } = props;

    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div 
            className={`Modal ${color_palette}`} 
            data-aos={aos}
        >
            {props.children}
        </div>, 
        document.getElementById('modal')
    )
}