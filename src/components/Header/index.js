import React from 'react'; 

import { Logo } from '../Logo';

import './styles.scss';

export const Header = props => {

    const handleClick = () => {
        props.history.push('/');
    }

    return(
        <div className="header" onClick={handleClick}>
            <Logo className="header__logo" />
        </div>
    )
}