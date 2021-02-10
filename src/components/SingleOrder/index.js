import React from 'react'; 

import './styles.scss'

export const SingleOrder = ({ order }) => {

    const styles = {
        display: 'flex', 
        'flex-direction': 'column', 
        'align-items': 'center'
    }

    return(
        <div style={styles}>
            <div className="ordercontent">
                <div className="ordercontent__name">{order.name}</div>
                <div className="ordercontent__units">{order.quant}</div>
                <div className="ordercontent__price">${order.unitPrice}</div>
            </div>
            <div className="bottomline"></div>
        </div>
    )
}