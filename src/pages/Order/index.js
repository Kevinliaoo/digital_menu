import React, { useState, useEffect } from 'react'; 

import { Header } from '../../components/Header';
import { MenuButton } from '../../components/MenuButton';
import { SingleOrder } from '../../components/SingleOrder';
import { ConfirmOrderModal } from '../../components/ConfirmOrderModal';
import { useScrollAppear } from '../../hooks/useScrollAppear';
import { config } from '../../config'; 

import './styles.scss';
 
export const Order = props => {

    const showFixed = useScrollAppear(100);

    const data = JSON.parse(window.localStorage.getItem(config.STORAGE_KEYS.My_order)).order; 

    const calculateTotal = () => {
        let total = 0; 
        for(let i = 0; i < data.length; i++) {
            const j = data[i]; 
            total += parseInt(j.unitPrice) * parseInt(j.quant); 
        }
        return total;
    }

    const mainStyles = {
        'display': 'flex',
        'flex-direction': 'column', 
        'width': '100vw',
    }

    const [confirmModal, showModal] = useState(false); 
    
    const handleClick = () => {
        showModal(true); 
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div style={mainStyles}>
            {
                showFixed ? <MenuButton className="menuButton" {...props} /> : <div />
            }
            <Header {...props} />
            <div className="orderslist">                
                {
                    data.map(order => {
                        return <SingleOrder order={order} />
                    })
                }
            </div>
            <div className="order-total">
                Total: ${calculateTotal()}
            </div>
            <div className="order-button-container">
                <div className="order-button" onClick={handleClick}>Order</div>
            </div>
            {
                confirmModal 
                    ? <ConfirmOrderModal 
                        isOpen = {confirmModal} 
                        showModal = {showModal}
                    />
                    : <></>
            }
        </div>
    )
}