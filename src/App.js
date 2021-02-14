import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Order } from './pages/Order';
import { Staff } from './pages/Staff';
import { NotFound } from './pages/NotFound';

export const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/menu' component={Menu} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/staff" component={Staff} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}