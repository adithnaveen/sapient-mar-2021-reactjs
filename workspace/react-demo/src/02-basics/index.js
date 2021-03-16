import React, { Component } from 'react'

import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './style.css'; 

class App extends Component {
    render() {
        return (
            <div className="app">
                    <AppHeader 
                        company="Publicis Sapient"
                        location="Bengaluru" /> 
                    <AppContent /> 
                    <AppFooter />
            </div>
        );
    }
}

export default App;