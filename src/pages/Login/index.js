import React, { useState } from 'react'; 
import axios from 'axios';

import { Header } from '../../components/Header';
import { DoneModal } from '../../components/DoneModal';
import { config } from '../../config.js';

import './styles.scss'

export const Login = props => {

    const [form, setForm] = useState({});
    const [pswInc, setPswInc] = useState(false);

    const handleInput = event => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value.trim(), 
        })
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        if(!checkForm()) return false; 

        const URL = `${config.URLs.API_URL}/api/auth/login`;
        axios.post(URL, form)
            .then(result => {
                const jwt = result.data.body.jwt; 
                window.localStorage.setItem(config.STORAGE_KEYS.JWT, jwt); 
                props.history.push('./staff-orders');
            })
            .catch(() => setPswInc(true));
    }

    const checkForm = () => {
        const usernameInput = document.getElementById('loginform__user'); 
        const pswInput = document.getElementById('loginform__psw'); 
        if(usernameInput.value.length > 0 && pswInput.value.length > 0) return true;
        return false;
    }

    return(
        <div className="staff-page">
            <Header {...props} /> 
            <form className="loginform" onSubmit={handleSubmit} >
                <span className="loginform-title">Login:</span>
                <input 
                    className = "loginform__user"
                    id = "loginform__user"
                    name = "username"
                    placeholder = 'Username: '
                    onChange = {handleInput}
                />
                <input 
                    className = "loginform__psw"
                    id = "loginform__psw"
                    name = 'password'
                    placeholder = 'Password'
                    type = 'password'
                    onChange = {handleInput}
                />
                <button>Login</button>
            </form>
            <DoneModal 
                isOpen = {pswInc}
                closeModal = {setPswInc}
                mode = 'showError'
            />
        </div>
    )
}