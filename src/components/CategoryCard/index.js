import React from 'react'; 

import { useScrollAppear } from '../../hooks/useScrollAppear';

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';
const DEFAULT_CAT = 'Lorem'

export const CategoryCard = props => {
    const { src=DEFAULT_IMG, category=DEFAULT_CAT, onClick, appearHeight=500 } = props; 
    const show = useScrollAppear(appearHeight)

    return(
        <div className={`categoryCard ${show ? 'is-visible' : ''}`} onClick={() => onClick(category)} >
            <img src={src} alt='Cover pic' />
            <p>{category}</p>
        </div>
    )
}