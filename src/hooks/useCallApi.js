import axios from 'axios'; 
import { useState, useEffect } from 'react'; 

// Calls API (GET)
export const useCallApi = apiUrl => {
    const [data, setData] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setData(response); 
                setLoading(false);
            })
            .catch(e => {
                setLoading(false); 
                setError(e);
            })
    }, [])

    return {loading, error, data};
}



// import { useState } from 'react'; 

// export const useCallApi = apiUrl => {
//     const [loading, load] = useState(true); 

//     setTimeout(() => {
//         load(false);
//     }, 1); 

//     const error = null; 
//     const data = {}; 

//     return [loading, error, data];
// }