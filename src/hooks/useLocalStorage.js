import { useState } from 'react'; 

export function useLocalStorage(key, initialValue) {

    const [ value, setValue ] = useState(initialValue); 

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