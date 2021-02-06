import React from 'react'; 

import { Logo } from '../Logo';

import './styles.scss';

export const Header = () => {
    return(
        <div className="header">
            <Logo className="header__logo" />
        </div>
    )
}