import React, { Component } from 'react'


import "./app-content.css";

class AppContent extends Component {

    render() {

        const companyName = "Sapinet";
        const name = "Sajal";

        return (
            <div className="app-content">
                <h1 className="myh1" >THIS IS MAIN CONTENT IN {companyName} </h1>
                <h2>This is from {name}</h2>
                
            </div>
        )
    }

}

export default AppContent;