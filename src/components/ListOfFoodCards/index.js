import React from 'react'; 

import { FoodCard } from '../FoodCard'; 

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';

export const ListOfFoodCards = ({ img=DEFAULT_IMG }) => {
    let i = 0; 
    return(
        <div className="listOfFoodCards">
            {
                [1, 2, 4, 5].map(card => {
                    i ++; 
                    // LE TENGO QUE PASAR MÁS PARAMETROS A ESTE COMPONENT
                    if(i % 2 === 0) return <FoodCard aos='fade-right' />
                    return <FoodCard aos='fade-left' />
                })
            }
        </div>
    )
}