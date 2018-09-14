import React from 'react';

import axios from 'axios';

export default class Users extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:1337/User/users`)
      .then(res => {
        const persons = res.data;
        alert(JSON.stringify(res.data))
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.Name}</li>)}
      </ul>
    )
  }
}