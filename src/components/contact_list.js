import React, { Component } from 'react';
import contactData from '../data/contacts';
import ContactCard from './contact_card';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contactData
        }
    }
    render() {
        const list = this.state.contacts.map((item, index) => {
            return (
                <ContactCard key={index} firstName={item.firstName} lastName={item.lastName}/>
            )
        });
        return <div>{list}</div>
    }
}

export default ContactList;