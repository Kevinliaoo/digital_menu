import React, { useState } from 'react';

export function useLocalStorage(key, initialState = '') {

    console.log('Entrando al hook sanamente')

    const [value, setValue] = useState(initialState)

    console.log('Se pudo hacer useState')

    const setLocalStorage = val => {
        try {
            window.localStorage.setItem(key, value); 
            setValue(val);
        } catch(e) {
            console.log(e); 
        }
    }

    return [value, setLocalStorage];
}