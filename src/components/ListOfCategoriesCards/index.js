import React from 'react'; 

import { CategoryCard } from '../CategoryCard'; 

import './styles.scss';

export const ListOfCategoriesCards = props => {

    const { categories } = props;

    const handleClick = (category) => {
        props.history.push(`/menu?category=${category}`); 
    }

    return (
        <div className="listOfCategories">
            {
                categories.map(c => {
                    return <CategoryCard 
                        appearHeight = {window.innerHeight*(0.3+(c.key-1)*0.4)}
                        onClick = {handleClick} 
                        {...c} 
                    />
                })
            }
        </div>
    )
}