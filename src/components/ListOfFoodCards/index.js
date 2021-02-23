import React from 'react'; 

import { FoodCard } from '../FoodCard'; 

import './styles.scss';

export const ListOfFoodCards = props => {

    const { 
        modal,  
        openModal, 
        setModalData, 
        menuList
    } = props;

    let i = 0;      // Esto es solo para ver si el elemento sale de izq o der
    return(
        <div className="listOfFoodCards">
            {
                menuList.map(card => {
                    i ++; 
                    let aos_data = i%2===0 ? 'fade-right' : 'fade-left'; 
                    return <FoodCard 
                        {...card}
                        key = {card._id}
                        aos = {aos_data} 
                        modal = {modal} 
                        openModal = {openModal} 
                        setModalData = {() => {
                            setModalData({...card})
                        }}
                    />
                })
            }
        </div>
    )
}