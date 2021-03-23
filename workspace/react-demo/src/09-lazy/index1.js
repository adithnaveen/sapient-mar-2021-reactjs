import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'; 



// http://localhost:3000/
import Home from './Home'; 
import Sample from './Sample'; 
import Testing from './Testing';
const App = () => {
    return(
        <div>
           <Router>
            
                <Switch>
                <Route path="/" exact={true}>
                        <Home /> 
                        <Sample /> 
                    </Route>

                    <Route path="/sample" exact={true}>
                        <Sample /> 
                    </Route>

                    <Route path="/testing" exact={true}>
                        <Testing /> 
                    </Route>


                </Switch>
            
           </Router>
        </div>
    );
}

export default App; 