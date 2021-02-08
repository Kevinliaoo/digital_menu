import React, { useEffect } from 'react'; 

import { Header } from '../../components/Header';
import { ListOfFoodCards } from '../../components/ListOfFoodCards';
import { MenuButton } from '../../components/MenuButton'; 
import { useScrollAppear } from '../../hooks/useScrollAppear';

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';


export const Menu = props => {
    const categoryQuery = props.location.search; 
    const categoryRegex = /category=(.+)?&?/; 
    const category = categoryQuery.match(categoryRegex)[1];

    const showFixed = useScrollAppear(100);
    
    useEffect(() => {
        // Scroll to top of the page when reloading 
        window.scrollTo(0, 0)
    }, []);

    return(
        <div className="menu-content">
            {
                showFixed ? <MenuButton className="menuButton" {...props} /> : <div />
            }
            <Header {...props} />
            <div className="home-title">
                <h2 className="home-title__title" >{category}</h2>
                <img className="home-title__portrait" src={DEFAULT_IMG} alt="Portriat" />
            </div>
            <ListOfFoodCards />
        </div>
    )
}