import React from 'react'; 
import { MdAddBox } from 'react-icons/md';

import './styles.scss';

export const FoodCard = props => {

    const { 
        name, 
        price, 
        descr, 
        src, 
        aos, 
        modal, 
        openModal,
        setModalData,
    } = props

    const handleClick = () => {
        setModalData(); 
        openModal();
    }

    return(
        <div className="foodCard" data-aos={aos} >
            <img src={src} alt='Food' />
            <p className="foodCard__foodName">{name}</p>
            <p className="foodCard__price">${price}</p>
            <p className="foodCard__descr">{descr}</p>
            <MdAddBox onClick={handleClick} className="foodCard__add" />
        </div>
    )
}