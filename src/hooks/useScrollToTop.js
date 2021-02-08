import { useEffect } from 'reac'; 

export function useScrollToTop() {
    return useEffect(() => {
        // Scroll to top of the page when reloading 
        window.scrollTo(0, 0)
    }, []);
}