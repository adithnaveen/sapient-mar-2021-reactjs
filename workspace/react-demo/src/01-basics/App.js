import React, { Component } from 'react'

import './style.css';

class App extends Component {

    render() {

        const companyName = "Sapinet";
        const name = "Sajal";

        return (
            <div>
                <h1 className="myh1" >THIS IS MAIN CONTENT IN {companyName} </h1>
                <h2>This is from {name}</h2>
            </div>
        ) 
    }

}

export default App; 