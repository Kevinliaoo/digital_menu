import React from 'react'; 

import { Header } from '../../components/Header';
import { ListOfFoodCards } from '../../components/ListOfFoodCards';

import './styles.scss';

export const Menu = props => {
    const categoryQuery = props.location.search; 
    const categoryRegex = /category=(.+)?&?/; 
    const category = categoryQuery.match(categoryRegex)[1];

    return(
        <div className="menu-content">
            <Header />
            <h2>{category}</h2>
            <ListOfFoodCards />
        </div>
    )
}