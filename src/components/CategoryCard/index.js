import React, { useEffect } from 'react'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css';

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';
const DEFAULT_CAT = 'Lorem'

export const CategoryCard = props => {
    const { src=DEFAULT_IMG, category=DEFAULT_CAT, onClick, appearHeight=500 } = props; 

    useEffect(() => {
        Aos.init({
            duration: 500
        });
    }, [])

    return(
        <div 
            className = 'categoryCard' 
            data-aos="fade-up"
            onClick={() => onClick(category)} 
        >
            <img src={src} alt='Cover pic' />
            <p>{category}</p>
        </div>
    )
}