import React from 'react';

import { StaffHeader } from '../../components/StaffHeader'; 

export const StaffOrders = props => {

    const handleLogout = () => {
        props.history.push('/');
        window.localStorage.removeItem('JWT');
    }

    return(
        <>
            <StaffHeader handleLogout={handleLogout} />
        </>
    )
}