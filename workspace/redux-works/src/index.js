import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'; 
import './index1.css'; 
import Product from './components/Product'

import {createStore} from 'redux';
import {Provider} from 'react-redux'

const product = {
    price : 1000
}

const reducer = (state=product , action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {price : state.price + action.data}
        case 'DECREMENT':
            return {price : state.price - action.data}
        default:
            return state;
    }
}

const store = createStore(reducer); 

const App = () => {
    return(
        <div>
            <Provider store={store} >
                <Product />
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")); 