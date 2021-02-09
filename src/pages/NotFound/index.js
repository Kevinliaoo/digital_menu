import React from 'react'; 

import { Header } from '../../components/Header';
import { config } from '../../config';

import './styles.scss';

export const NotFound = props => {

    const styles = {
        border: '2px solid red',
        display: 'flex', 
        'justify-content': 'center', 
        'font-weight': 'bold', 
        'box-shadow': '1rem 1rem 1rem rgba(0, 0, 0, 0.5)'
    }

    return(
        <>
            <Header {...props} />
            <div className="entryImg">
                <img className="entryImg__image" src={config.URLs.MAIN_BCK} alt="Background" />
                <div style = {styles}>
                    <p className="entryImg__notFoundText" >404 Not found</p>
                </div>
            </div>
        </>
    )
}