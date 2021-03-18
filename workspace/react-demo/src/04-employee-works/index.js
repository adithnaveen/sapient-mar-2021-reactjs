import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import EmployeeForm from './EmployeeForm';


class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Employee Management App</h1>
                <div className="row">
                    <div className="col">
                        <EmployeeForm />
                    </div>
                    <div className="col">
                        <h2>Employee List Goes Here</h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;