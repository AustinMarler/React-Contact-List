import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import data from './people.json'

class ContactList extends Component {
  render() {
    return (
      <div id="contactsContainer">
        <h3>Contacts</h3>
        <nav id="contacts">
          <ul id="contactsList">
          {
            data.map(person => {
              var first = person.name.first.charAt(0).toUpperCase() + person.name.first.substr(1);
              var last = person.name.last.charAt(0).toUpperCase() + person.name.last.substr(1);
              
              return <li key={`contact-${person.id}`}><div style={{backgroundImage: 'url(' + person.picture.thumbnail +')'}}></div><span><Link to={`/contact/${person.id}`}>{first} {last}</Link></span></li>
            })
          }
          </ul>
        </nav>
      </div>
    );
  }
}

export default ContactList