import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'; 

// list of components
// the home component is available on the first go of the load 
// http://localhost:3000/
import Home from './Home'; 

// http://localhost:3000/sample
const Sample = React.lazy(() => import("./Sample")); 

// http://localhost:3000/testing
const Testing = React.lazy(() => import("./Testing")); 

// http://localhost:3000/aslodjflajsfd
const NotFound = React.lazy(() => import("./NotFound"))
const App = () => {
    return(
        <div>
           <Router>
           <Suspense fallback = {<div>Please wait its loading.. </div>}>
                <Switch>
                <Route path="/" exact={true}>
                        <Home /> 
                    </Route>

                    <Route path="/sample" exact={true}>
                        <Sample /> 
                    </Route>

                    <Route path="/testing" exact={true}>
                        <Testing /> 
                    </Route>

                    <Route component={NotFound} /> 
                </Switch>
            </Suspense>
           </Router>
        </div>
    );
}

export default App; 