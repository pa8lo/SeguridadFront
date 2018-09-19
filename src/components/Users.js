import React from 'react';
import axios from 'axios';
import {DropdownButton,MenuItem,Button,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';

export default class Users extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.handleDni = this.handleDni.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleRol = this.handleRol.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleName =this.handleName.bind(this);
      this.state = {
        Dni: '',
        Email:'',
        rols:[],
        rol:'',
        LastName:'',
        Name:''
      };
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
  handleSubmit(e){
    console.log(this.state);
  }

  handleRol(e){
    this.setState({ rol: e.target.value });
  }

  handleDni(e) {
    this.setState({ Dni: e.target.value });

  }
handleLastName(e){

}
handleName(e){

}
  handleEmail(e) {
      this.setState({ Password: e.target.value });
    }
   rolsList() {
    console.log(this.state.rols)
    const rols = this.state.rols
    console.log(rols)
    const listRols = rols.map((rol) =>
    <option value={rol.id}>{rol.Name}</option>
    
    );
    return (
    <FormGroup controlId="formControlsSelect">
    <ControlLabel>Select</ControlLabel>
      <FormControl
      controlId="formControlsSelect"
      componentClass="select" placeholder="select"
      value={this.state.rol}
      placeholder="Enter text"
      onChange={this.handleRol}>{listRols} <option value="asd">213</option>
      </FormControl>
      </FormGroup>
    );

  }
 // id:1 ,Dni: '35111111', Name: 'Admin',LastName:'Test',Password:'123456',Rols: 1
  render() {
    return (
      <ul>    
          <FormGroup>
            <ControlLabel>Dni</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Dni}
              placeholder="Enter text"
              onChange={this.handleDni}
            />
           </FormGroup>
           <FormGroup>
            <ControlLabel>Nombre</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Name}
              placeholder="Enter text"
              onChange={this.handleName}
            />
           </FormGroup>
           <FormGroup>
            <ControlLabel>Apellido</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.LastName}
              placeholder="Enter text"
              onChange={this.handleLastName}
            />
           </FormGroup>
          <FormControl.Feedback />
          <ControlLabel>Email</ControlLabel>
          <FormGroup>
          <FormControl
            type="email"
            value={this.state.Email}
            placeholder="Enter text"
            onChange={this.handleEmail}
          />
          </FormGroup>   
          {this.rolsList()}
          <FormControl.Feedback />
          <Button type="submit" onClick={this.handleSubmit}>Iniciar Sesion</Button>
          
        
              
             
      </ul>
    )
  }
}