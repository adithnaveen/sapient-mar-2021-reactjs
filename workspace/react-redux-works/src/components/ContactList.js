import React, { Component } from 'react';
import ContactCard from './ContactCard';


class ContactList extends Component {


    render() {
        let list = null;
        let { contacts } = this.props;

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


export default ContactList;
