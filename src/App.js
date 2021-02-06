import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Layout } from './components/Layout';

export const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/menu' component={Menu} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}