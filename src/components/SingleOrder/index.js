import React from 'react'; 
import { BsFillTrashFill } from 'react-icons/bs';

import { config } from '../../config';

import './styles.scss'

export const SingleOrder = ({ order }) => {

    const styles = {
        display: 'flex', 
        'flex-direction': 'column', 
        'align-items': 'center'
    }

    const deleteItem = () => {
        let current = JSON.parse(window.localStorage.getItem(config.STORAGE_KEYS.My_order));
        const index = getIndexByProdId(order.product_id, current.order); 
        if(index === 0) {
            current.order.shift();
        }
        else if(index) {
            current.order.splice(0, 1); 
        }
        window.localStorage.setItem(config.STORAGE_KEYS.My_order, JSON.stringify(current));
        window.location.reload();
    }

    const getIndexByProdId = (id, data) => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].product_id === id) return i; 
        }
    }

    return(
        <div style={styles}>
            <div className="ordercontent">
                <div className="ordercontent__name">{order.name}</div>
                <div className="ordercontent__units">{order.quant}</div>
                <div className="ordercontent__price">${order.unitPrice}</div>
                <BsFillTrashFill onClick={deleteItem} />
            </div>
            <div className="bottomline"></div>
        </div>
    )
}