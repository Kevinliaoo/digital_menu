import React from 'react'; 
import { AiOutlineBars } from 'react-icons/ai';

import './styles.scss';

export const MenuButton = () => {
    return(
        <div className='floatMenuBtn'>
            <AiOutlineBars className='menuIcon' />
        </div>
    )
}