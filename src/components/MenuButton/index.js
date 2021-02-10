import React, { useState } from 'react'; 
import { AiOutlineBars } from 'react-icons/ai';
import { ImCross } from 'react-icons/Im';

import { Logo } from '../Logo';

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
            <div className="navMenuContent" data-aos="fade-right">
                <div className="navMenuContent__cross">
                    <ImCross onClick={deployMenu} />
                </div>
                <div className="navMenuContent__section">
                    <Logo className="navMenuContent__logo" />
                </div>
                <div className="navMenuContent__section">
                    <div className="navMenuContent__item" onClick={showAbout}>About us</div>
                    <div className="navMenuContent__item" onClick={goToHome}>Menu</div>
                </div>
                <div className="navMenuContent__section">
                    <div className="navMenuContent__item" onClick={goToOrder}>My order</div>
                </div>
                <div className="navMenuContent__section">
                    <div className="navMenuContent__item">Staff</div>
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