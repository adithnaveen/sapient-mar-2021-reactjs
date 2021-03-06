import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById } from '../actions/contacts-action'

class ContactDetail extends Component {

    componentDidMount() {
        // invoke the state here 
        let { id } = this.props.match.params
        this.props.getContact(id);
    }

    render() {
        let { contact = {} } = this.props;

        return (
            <div className="container">
                <h2>Contact Details</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src={contact.picture}
                            className="img img-thumbnail"
                            alt={contact.name} style={{ height: 200 }} />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <table class="table table-striped">
                                <tr>
                                    <td class="table-primary">Name</td>
                                    <td><div className="card-title">{contact.gender === 'male' ? "Mr: " : "Ms/Mrs: "}{contact.name}  </div></td>
                                </tr>
                                <tr>
                                    <td class="table-primary">Email </td>
                                    <td>  <div className="card-text">{contact.email}</div></td>
                                </tr>
                                <tr>
                                    <td class="table-primary">Phone </td>
                                    <td><div className="card-text">{contact.phone}</div></td>
                                </tr>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reducers) => ({
    contact: reducers.contactsReducer.contact
})

const mapDispatchToProps = {
    getContact: getContactById
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);