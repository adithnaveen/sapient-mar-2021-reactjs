import React, { Component } from 'react'

import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './style.css'; 

class App extends Component {
    render() {
        const footerProps ={
            website:"http://ps.com", 
            year:2021, 
            company:"Publicis Sapient, Bengaluru"
        }
        return (
            <div className="app">
                    <AppHeader 
                        company="Publicis Sapient"
                        location="Bengaluru" /> 
                    <AppContent /> 
                    <AppFooter {...footerProps} />
            </div>
        );
    }
}

export default App;