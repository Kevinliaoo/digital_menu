import React from 'react'; 

import { FoodCard } from '../FoodCard'; 

import './styles.scss';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg';
const DEFAULT_SRC = 'https://images.pexels.com/photos/5423258/pexels-photo-5423258.jpeg?cs=srgb&dl=pexels-mariah-green-5423258.jpg&fm=jpg';

const DUMMY = [
    {
        key: 1,
        name: 'Milanesa1', 
        price: 100,
        descr: 'Milanesa de ternera', 
        src: DEFAULT_SRC,
    },
    {
        key: 2,
        name: 'Milanesa2', 
        price: 100,
        descr: 'Milanesa de ternera', 
        src: DEFAULT_SRC,
    },
    {
        key: 3,
        name: 'Milanesa3', 
        price: 100,
        descr: 'Milanesa de ternera', 
        src: DEFAULT_SRC,
    },
    {
        key: 4,
        name: 'Milanes4', 
        price: 100,
        descr: 'Milanesa de ternera', 
        src: DEFAULT_SRC,
    },
    {
        key: 5,
        name: 'Milanesa5', 
        price: 100,
        descr: 'Milanesa de ternera', 
        src: DEFAULT_SRC,
    },
]

export const ListOfFoodCards = props => {

    const { 
        img = DEFAULT_IMG, 
        modal,  
        openModal, 
        setModalData 
    } = props;

    let i = 0; 
    return(
        <div className="listOfFoodCards">
            {
                DUMMY.map(card => {
                    i ++; 
                    let aos_data = i%2===0 ? 'fade-right' : 'fade-left'; 
                    return <FoodCard 
                        {...card}
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