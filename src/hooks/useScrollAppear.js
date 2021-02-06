import React, { useEffect, useState } from 'react'; 

export function useScrollAppear(toggleHeight) {
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > toggleHeight; 
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
    
        document.addEventListener('scroll', onScroll);
        return() => document.removeEventListener('scroll', onScroll);
    }, [showFixed])

    return showFixed;
}

