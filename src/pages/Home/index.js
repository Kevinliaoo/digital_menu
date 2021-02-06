import React from 'react'; 

import { config } from '../../config';
import { Logo } from '../../components/Logo';
import { MenuButton } from '../../components/MenuButton';
import { ListOfCategoriesCards } from '../../components/ListOfCategoriesCards';
import { useScrollAppear } from '../../hooks/useScrollAppear';

import './styles.scss';
import '../../styles/global.scss'

export const Home = props => {

    const showFixed = useScrollAppear(100);

    return(
        <div className="homapage">
            {
                showFixed ? <MenuButton className="menuButton" /> : <div />
            }
            <div className="entryImg">
                <img className="entryImg__image" src={config.URLs.MAIN_BCK} alt="Background" />
                <Logo className="entryImg__logo" />
            </div>
            <div className="menuContent">
                <p className="menuContent__menu">Menu</p>
                <ListOfCategoriesCards {...props} />
            </div>
        </div>
    )
}