import React, { Component } from 'react'

import EmployeeCard from './EmployeeCard';

class EmployeeList extends Component {
    state = { emps: [] }

    componentDidMount() {
        fetch("http://localhost:4000/employees")
            .then(resp => resp.json())
            .then(data => this.setState({ emps: data }))
    }
    render() {

        const employeeList = this.state.emps.map(emp => <EmployeeCard key={emp.id} emp={emp} />)

        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Employees</h1>
                {employeeList}
            </div>
        );
    }
}

export default EmployeeList;