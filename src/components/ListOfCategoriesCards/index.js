import React from 'react'; 

import { CategoryCard } from '../CategoryCard'; 

import './styles.scss';

// Dummy database 
const CATEGORIES = [
    {
        key: 1, 
        category: 'Petit déjeuner'
    },
    {
        key: 2, 
        category: 'Le déjeuner'
    },
    {
        key: 3, 
        category: 'Salades'
    },
    {
        key: 4,
        category: 'Pâtes'
    },
    {
        key: 5,
        category: 'Boissons'
    }, 
    {
        key: 6,
        category: 'Dessets'
    }
]

export const ListOfCategoriesCards = props => {
    const handleClick = (category) => {
        props.history.push(`/menu?category=${category}`); 
    }

    return (
        <div className="listOfCategories">
            {
                CATEGORIES.map(c => {
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