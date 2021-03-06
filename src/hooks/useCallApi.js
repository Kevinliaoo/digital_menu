import axios from 'axios'; 
import { useState, useEffect } from 'react'; 

// Calls API (GET)
export const useCallApi = (apiUrl, api_config={}, bodyParameters={}) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(apiUrl, bodyParameters, api_config)
            .then(response => {
                setData(response); 
                setLoading(false);
            })
            .catch(e => {
                setLoading(false); 
                setError(e);
            })
    }, []);

    return [loading, error, data];
}