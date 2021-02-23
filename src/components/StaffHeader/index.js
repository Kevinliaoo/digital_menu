import React from 'react'; 
import { BiLogOut } from 'react-icons/bi';

import { config } from '../../config.js';
import { useCallApi } from '../../hooks/useCallApi';
import { Loading } from '../../pages/Loading';

import './styles.scss';

const USER_ID = '6029bf8510d895bdc6618ddb';

export const StaffHeader = ({ handleLogout }) => {

    const JWT = window.localStorage.getItem(config.STORAGE_KEYS.JWT);

    const API_URL = `${config.URLs.API_URL}/api/auth/checkAuth`;
    const api_config = {
        headers: {
            Authorization: `Bearer ${JWT}`,
        }
    }
    const bodyParameters = {
        _id: USER_ID,
    }
    const [loading, error, data] = useCallApi(API_URL, api_config, bodyParameters);

    console.log(data);
    console.log(error);

    if(loading) {
        return <Loading />
    }

    return(
        <div className="header-container">
            <BiLogOut className="logout-icon" onClick={handleLogout} /> 
            <div className="logout-text" onClick={handleLogout}>Log out</div>
        </div>
    )
}