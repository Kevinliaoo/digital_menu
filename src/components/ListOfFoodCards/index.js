import React from 'react'; 

import { FoodCard } from '../FoodCard'; 

import './styles.scss';

export const ListOfFoodCards = () => {
    return(
        <div className="listOfFoodCards">
            {
                [1, 2, 4, 5].map(card => <FoodCard />)
            }
        </div>
    )
}