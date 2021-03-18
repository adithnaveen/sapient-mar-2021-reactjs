import React, { Component } from 'react'

class EmployeeForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        picture: '',
        formError: {
            name: "Name is required",
            email: "Email is required",
            phone: "Phone is required"
        },
        errorMessages: ""
    }

    addEmployee = (evt) => {
        evt.preventDefault();
        console.log("Form Submitted... ")
        let { formError } = this.state;

        if (this.validateForm(formError)) {
            alert("Form Submitted Successfully");
        } else {
            let errorMessages = Object.values(formError).map((err, index) => err.length === 0 ? ""
                : <li key={index}>{err}</li>)
            this.setState({ errorMessages })
        }

    }

    /* 
        formError: {name:"", phone:""}
    */


    validateForm = (formError) => {
        let valid = true;
        Object.values(formError).forEach(err => valid = valid && err.length === 0);
        return valid;
    }

    tfHandler = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name]: value });
        let { formError } = this.state;

        switch (name) {
            case "name":
                if (!value || value.length === 0) {
                    formError.name = "Name is Required"
                } else if (value.length < 3 || value.length > 20) {
                    formError.name = "Name must be between 3 to 20 chars"
                } else {
                    formError.name = "";
                }
                break;
            case "email":
                if (!value || value.length === 0) {
                    formError.email = "Email Required"
                } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    formError.email = "Email format is invalid"
                } else {
                    formError.email = "";
                }
                break;
            case "phone":
                if (!value || value.length === 0) {
                    formError.phone = "Phone Number Required";
                } else if (!value.match(/\d{10,12}$/)) {
                    formError.phone = "Please enter phone between 10 to 12 chars"
                } else {
                    formError.phone = "";
                }
                break;

            default:
                break;
        }
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
                            <input type="text"
                                value={this.state.email}
                                name="email" onChange={this.tfHandler} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Employee Contact" className="control-label col-md-4">Employee Contact</label>
                        <div className="col-md-8">
                            <input type="text"
                                value={this.state.phone}
                                name="phone" onChange={this.tfHandler} className="form-control" />
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

                <hr />
                <div className="container">
                    <h2>Current State</h2>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>

                <div className="container">
                    <ul>
                        {this.state.errorMessages}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;