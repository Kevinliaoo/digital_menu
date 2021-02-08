import React, { useState, useEffect } from 'react'; 
import { AiOutlineBars } from 'react-icons/ai';
import { ImCross } from 'react-icons/Im';

import { Logo } from '../Logo';
import { HorizontalLine } from '../HorizontalLine';

import './styles.scss';

export const MenuButton = props => {

    const lineWidth = '0.15rem'; 
    const lineColor = 'white'

    const [menuDeployed, setMenuDeployed] = useState(false); 

    const deployMenu = () => {
        setMenuDeployed(!menuDeployed);
    }

    const scrollToBottom = () => {
        window.scrollTo(0, window.innerHeight * 1e8);
    }

    const showAbout = () => {
        deployMenu(); 
        scrollToBottom();
    }

    const goToHome = () => {
        if(props.location.pathname === '/') {
            deployMenu();
        } else {
            props.history.push('/');
        }
    }

    const goToOrder = () => {
        props.history.push('order')
    }

    const showMenuContent = () => {
        return(
            <div className="navMenuContent">
                <div className="navMenuContent__cross">
                    <ImCross onClick={deployMenu} />
                </div>
                <div className="navMenuContent__section">
                    <Logo className="navMenuContent__logo" />
                </div>
                <div className="navMenuContent__section">
                    <ul>
                        <li onClick={showAbout}>About us</li>
                        <li onClick={goToHome}>Menu</li>
                    </ul>
                </div>
                <div className="navMenuContent__section">
                    <ul>
                        <li onClick={goToOrder}>My order</li>
                    </ul>
                </div>
                <div className="navMenuContent__section">
                    <ul>
                        <li>Log in</li>
                    </ul>
                </div>
            </div>
        )
    }

    return(
        <>
            <div 
                className = {`navMenu ${menuDeployed ? 'deployed' : ''}`}
            >
                {
                    menuDeployed ? showMenuContent() : ''
                }
            </div>
            <div className='floatMenuBtn' onClick={deployMenu} >
                <AiOutlineBars className='menuIcon' />
            </div>
        </>
    )
}