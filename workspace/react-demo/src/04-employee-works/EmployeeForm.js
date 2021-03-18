import React, { Component } from 'react'

class EmployeeForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        picture: ''
    }

    addEmployee = (evt) => {
        console.log(evt.target);
    }

    tfHandler = (evt) => {
        // version 1.0 
        // let name = evt.target.name;
        // let value = evt.target.value;

        // let modifiedState = {};
        // modifiedState[name] = value;
        // this.setState(modifiedState);
        // console.log(this.state);

        // version 2.0 
        // this.setState({ [evt.target.name]: evt.target.value })

        let { name, value } = evt.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>Employee Form</h3>
                <form className="form" onSubmit={this.addEmployee}>

                    <div className="form-group row">
                        <label htmlFor="Employee Name" className="control-label col-md-4">Employee Name</label>
                        <div className="col-md-8">
                            <input type="text" name="name"
                                value={this.state.name}
                                onChange={this.tfHandler} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Employee email" className="control-label col-md-4">Employee email</label>
                        <div className="col-md-8">
                            <input type="email"
                                value={this.state.email}
                                name="email" onChange={this.tfHandler} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Employee Contact" className="control-label col-md-4">Employee Contact</label>
                        <div className="col-md-8">
                            <input type="text"
                                value={this.state.contact}
                                name="contact" onChange={this.tfHandler} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Employee Picture" className="control-label col-md-4">Employee Picture</label>
                        <div className="col-md-8">
                            <input type="text"
                                value={this.state.picture}
                                name="picture" onChange={this.tfHandler} className="form-control" />
                        </div>
                    </div>

                    <button className="btn btn-danger">Submit</button>

                </form>
            </div>
        );
    }
}

export default EmployeeForm;