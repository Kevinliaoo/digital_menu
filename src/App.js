import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Order } from './pages/Order';
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout';

export const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/jij' component={Home} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path="/order" component={Order} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}