import React from 'react'; 

import { Header } from '../../components/Header';

import './styles.scss'

export const Staff = props => {

    const handleSubmit = ev => {
        ev.preventDefault();
    }

    return(
        <div className="staff-page">
            <Header {...props} /> 
            <form className="loginform" onSubmit={handleSubmit} >
                <span className="loginform-title">Login:</span>
                <input 
                    className = "loginform__user"
                    name = "username"
                    placeholder = 'Username: '
                />
                <input 
                    className = "loginform__psw"
                    name = 'password'
                    placeholder = 'Password'
                    type = 'password'
                />
                <button>Login</button>
            </form>
        </div>
    )
}