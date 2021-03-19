import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';


class App extends Component {
    state = { emps: [] }
    componentDidMount() {
        fetch("http://localhost:4000/employees")
            .then(resp => resp.json())
            .then(data => this.setState({ emps: data }))
    }
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
                        <EmployeeList emps={this.state.emps} /> 
                    </div>
                </div>
            </div>
        );
    } 
}

export default App;