import React from 'react'; 
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp, IoTimeSharp } from 'react-icons/io5'; 
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import { Logo } from '../Logo';

import './styles.scss';

const INFO = {
    phonenumber: '+54 11 6960 5765', 
    email: 'loremipsum@lorem.com', 
    location: 'Paris', 
    time: '11:00 ~ 22:30',
}

export const Footer = () => {
    return(
        <div className="footer">
            <Logo className="footer__logo" />
            <div className="restaurant-information">
                <div>
                    <FaPhoneAlt />
                    <p>{INFO.phonenumber}</p>
                </div>
                <div>
                    <MdEmail />
                    <p>{INFO.email}</p>
                </div>
                <div>
                    <IoLocationSharp />
                    <p>{INFO.location}</p>
                </div>
                <div>
                    <IoTimeSharp />
                    <p>{INFO.time}</p>
                </div>
            </div>
            <div className="social">
                <AiFillFacebook />
                <div />
                <AiFillInstagram />
            </div>
        </div>
    )
}