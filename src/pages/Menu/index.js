import React, { useEffect, useState } from 'react'; 

import { Header } from '../../components/Header';
import { ListOfFoodCards } from '../../components/ListOfFoodCards';
import { MenuButton } from '../../components/MenuButton';
import { AddToOrderModal } from '../../components/AddToOrderModal';
import { DoneModal } from '../../components/DoneModal';
import { useCallApi } from '../../hooks/useCallApi';
import { useScrollAppear } from '../../hooks/useScrollAppear';

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';


export const Menu = props => {
    const categoryQuery = props.location.search; 
    const categoryRegex = /category=(.+)?&?/; 
    const category = categoryQuery.match(categoryRegex)[1];

    const showFixed = useScrollAppear(100);
    
    useEffect(() => {
        // Scroll to top of the page when reloading 
        window.scrollTo(0, 0)
    }, []);

    const [modal, setModal] = useState(false); 
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }
    const [modalData, setModalData] = useState({});
    const [doneModal, setDoneModal] = useState(false);

    const [loading, error, data] = useCallApi();

    if(loading) {
        return 'Loading page'
    }

    return(
        <div className="menu-content">
            {
                showFixed ? <MenuButton className="menuButton" {...props} /> : <div />
            }
            <Header {...props} />
            <div className="home-title">
                <h2 className="home-title__title" >{category}</h2>
                <img className="home-title__portrait" src={DEFAULT_IMG} alt="Portriat" />
            </div>
            <ListOfFoodCards 
                modal = {modal} 
                openModal = {openModal} 
                setModalData = {setModalData}
            />
            <AddToOrderModal 
                isOpen = {modal} 
                onClose = {closeModal} 
                modalData = {modalData}
                openDoneModal = {setDoneModal}
            />
            <DoneModal 
                isOpen = {doneModal}
                closeModal = {setDoneModal}
            />
        </div>
    )
}