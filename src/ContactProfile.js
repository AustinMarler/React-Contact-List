import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMobileAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import data from './people.json'

library.add(faUser)
library.add(faEnvelope)
library.add(faMobileAlt)
library.add(faGlobeAmericas)

class ContactProfile extends Component {
  state = {
    name: '',
    email: '',
    phoneNum: '',
    location: '',
    picture: ''
  }

  componentDidMount() {
    const person = data.find(person => {
      return person.id === Number(this.props.match.params.id);
    })

    person.name.first = person.name.first.charAt(0).toUpperCase() + person.name.first.substr(1);
    person.name.last = person.name.last.charAt(0).toUpperCase() + person.name.last.substr(1);
    person.location.city = person.location.city.charAt(0).toUpperCase() + person.location.city.substr(1);
    person.location.state = person.location.state.charAt(0).toUpperCase() + person.location.state.substr(1);

    this.setState({
      name: `${person.name.first} ${person.name.last}`,
      email: person.email,
      phoneNum: person.phone,
      location: `${person.location.city}, ${person.location.state}`,
      picture: person.picture.large
    })
  }

  handleClick = (e) => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="profileContainer">
        <div className="profileColumn">
          <button onClick={this.handleClick} className="backButton">&#8592;</button>
          <div className="profilePictureContainer">
            <div className="profilePicture" style={{backgroundImage: 'url(' + this.state.picture + ')'}}></div>
          </div>
          <ul className="profileDataList">
            <li><FontAwesomeIcon icon={faUser}/><span>{this.state.name}</span></li>
            <li><FontAwesomeIcon icon={faEnvelope}/><span>{this.state.email}</span></li>
            <li><FontAwesomeIcon icon={faMobileAlt}/><span>{this.state.phoneNum}</span></li>
            <li><FontAwesomeIcon icon={faGlobeAmericas}/><span>{this.state.location}</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactProfile