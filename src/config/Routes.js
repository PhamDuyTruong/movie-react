import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail/Detail';

const Routes = () => {
    return (
        <Switch>
             <Route exact path="/">
                  <Home />
             </Route>
             <Route exact path="/:category/search/:keyword">
                   <Catalog />
             </Route>
             <Route exact path="/:category/:id">
                   <Detail />
             </Route>
             <Route exact path="/:category">
                  <Catalog />
             </Route>
        </Switch>
    )
}

export default Routes
