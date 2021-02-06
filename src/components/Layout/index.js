import React from 'react'; 

import { Footer } from '../Footer'; 

export const Layout = props => {
    return (
        <>
            {
                props.children
            }
            <Footer />
        </>
    )
}