import React, { Component } from 'react';
import ContactCard from './ContactCard';
import {connect} from 'react-redux'
import {fetchContacts} from '../actions/contacts-action'

class ContactList extends Component {

    componentDidMount() {
        this.props.getAllContacts()
    }

    render() {
        let list = null;
        let { contacts } = this.props;
        console.log(this.props);
        if (contacts instanceof Array && contacts.length > 0) {
            list = contacts.map(c => <ContactCard contact={c} key={c.id} />)
        }

        return (
            <div>
                {list}
            </div>
        );
    }
}

const stateAsProps = (reducers) => {
   
    return {
        contacts: reducers.contactsReducer.contacts
    }
}
const actionAsProps =  {
    getAllContacts: fetchContacts
}

export default connect(stateAsProps, actionAsProps) (ContactList);
