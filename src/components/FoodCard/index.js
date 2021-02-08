import React from 'react'; 
import { MdAddBox } from 'react-icons/md';
import { Aos } from 'aos';

import './styles.scss';

const DEFAULT_SRC = 'https://images.pexels.com/photos/5423258/pexels-photo-5423258.jpeg?cs=srgb&dl=pexels-mariah-green-5423258.jpg&fm=jpg';
const DEFAULT_DESCR = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const FoodCard = props => {
    const { 
        name = 'nome', 
        price = 100, 
        descr = DEFAULT_DESCR, 
        src = DEFAULT_SRC, 
        aos = aos 
    } = props
    return(
        <div className="foodCard" data-aos={aos} >
            <img src={src} alt='Food' />
            <p className="foodCard__foodName">{name}</p>
            <p className="foodCard__price">${price}</p>
            <p className="foodCard__descr">{descr}</p>
            <MdAddBox className="foodCard__add" />
        </div>
    )
}