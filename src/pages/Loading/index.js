import React from 'react'; 

import './styles.scss';

export const Loading = () => {
    return(
        <div className="loader-page-container">
            <div className="loader-container">
                <div className="loader1" ></div>
                <div className="loader2" ></div>
            </div>
        </div>
    )
}