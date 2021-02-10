import { useState } from 'react'; 

export const useCallApi = apiUrl => {
    const [loading, load] = useState(true); 

    setTimeout(() => {
        load(false);
    }, 1); 

    const error = null; 
    const data = {}; 

    return [loading, error, data];
}