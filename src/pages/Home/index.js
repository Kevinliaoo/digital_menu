import React, { useEffect } from 'react'; 

import { config } from '../../config';
import { Logo } from '../../components/Logo';
import { ListOfCategoriesCards } from '../../components/ListOfCategoriesCards';
import { useCallApi } from '../../hooks/useCallApi';
import { MenuButton } from '../../components/MenuButton';
import { Footer } from '../../components/Footer';
import { Loading } from '../../pages/Loading';
import { useScrollAppear } from '../../hooks/useScrollAppear';

import './styles.scss';
import '../../styles/global.scss'

export const Home = props => {

    const showFixed = useScrollAppear(100);

    useEffect(() => {
        // Scroll to top of the page when reloading 
        window.scrollTo(0, 0)
    }, []);

    const API_URL = `${config.URLs.API_URL}/api/categories`;
    const [loading, error, data] = useCallApi(API_URL);
    let categories = [];
    if(data) categories = data.data.body;

    if(loading) {
        return <Loading />
    }

    return(
        <>
            <div className="homapage">
                {
                    showFixed ? <MenuButton className="menuButton" {...props} /> : <div />
                }
                <div className="entryImg">
                    <img className="entryImg__image" src={config.URLs.MAIN_BCK} alt="Background" />
                    <Logo className="entryImg__logo" />
                </div>
                <div className="menuContent">
                    <p className="menuContent__menu">Menu</p>
                    <ListOfCategoriesCards {...props} categories={categories} />
                </div>
            </div>
            <Footer />
        </>
    )
}
