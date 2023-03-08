import React from 'react';
import Homes from '../pages/homes/Homes';
import Markets from "../pages/markets/Markest";
import Memorials from './memorials/Memorials';
import Industries from './industries/Industries';
import { BrowserRouter, 
  Route, 
  Switch } from 'react-router-dom';
import Navline from "../components/Navline";



function Router() {
  return (
    <BrowserRouter>
      <Navline/>
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route path="/markets" component={Markets} />
        <Route path="/memorials" component={Memorials} />
        <Route exact path="/industries" component={Industries} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Router;