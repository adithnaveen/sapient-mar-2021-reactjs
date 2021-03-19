import React, { Component } from 'react'

import EmployeeCard from './EmployeeCard';
import loading1 from './loading1';

class EmployeeList extends Component {
    
    render() {

        const employeeList = this.props.emps.map(emp => <EmployeeCard key={emp.id} emp={emp} />)
 
        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Employees</h1>
                {employeeList}
            </div>
        );
    }
}

export default loading1(EmployeeList);