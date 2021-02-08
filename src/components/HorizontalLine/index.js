import React from 'react'; 

const DEFAULT_THIKNESS = '0.5rem';
const DEFAULT_COLOR = 'black';

export const HorizontalLine = ({ color=DEFAULT_COLOR, thikness=DEFAULT_THIKNESS }) => {

    const line = document.getElementById('horLine'); 

    const style = {
        'background-color': color, 
        width: '90%', 
        height: thikness,
        margin: 'auto'
    }

    return(
        <div 
            className = "horLine" 
            id = "horLine"
            style = {style}
        >
        </div>
    )
}