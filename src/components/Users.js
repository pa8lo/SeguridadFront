import React from 'react';
import axios from 'axios';
import {DropdownButton,MenuItem} from 'react-bootstrap';

export default class Users extends React.Component {
  state = {
    rols: [1,2]
  }

  async componentDidMount() {
   var accessToken =  localStorage.getItem('access-token');
   console.log(accessToken)
   await  axios.get('http://localhost:1337/Rol/Rols',
    {headers: {'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiQWRtaW4iLCJJZCI6MSwiQXV0aG9yaXphdGlvbnMiOlt7ImNyZWF0ZWRBdCI6MTUzNjk1NTExMjA4OCwidXBkYXRlZEF0IjoxNTM2OTU1MTEyMDg4LCJpZCI6MSwiTmFtZSI6IlVzdWFyaW8iLCJEZXNjcmlwdGlvbiI6IlBlcm1pdGUgbGEgY3JlYWNpb24gZGUgdmVyICwgY3JlYXIsZWRpdGFyIHkgZWxpbWluYXIgdXN1YXJpbyJ9XSwiaWF0IjoxNTM3Mjc5MzkyfQ.iWHt4la5LfLJojip6B9bTH7N3O3UczEYe3MgAiTRcF4'}})
      .then(res => {
        const rols = res.data.roles;
        console.log( res.data)
        this.setState({  rols });
        
      })
  }
   rolsList() {
    console.log(this.state.rols)
    const rols = this.state.rols
    console.log(rols)
    const listRols = rols.map((rol) =>
    <option >{rol.Name}</option>
    );
    return (
      <DropdownButton>{listRols}</DropdownButton>
    );
  }

  render() {
    return (
      <ul>        
              {this.rolsList()}
             
      </ul>
    )
  }
}