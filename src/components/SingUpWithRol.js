import React from 'react';
import axios from 'axios';
import {DropdownButton,MenuItem,Button,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';

export default class SingUpWithRol extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.handleDni = this.handleDni.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleRol = this.handleRol.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleName =this.handleName.bind(this);
      this.handleDepartment=this.handleDepartment.bind(this);
      this.handleAdress=this.handleAdress.bind(this);
      this.handleFloor=this.handleFloor.bind(this);
      this.handleNumber=this.handleNumber.bind(this);
      this.state = {
        Dni: '',
        Email:'',
        rols:[],
        rol:'',
        LastName:'',
        Name:'',
        Department:'',
        Adress:'',
        Floor:'',
        Number:''
      };
  }

  async componentDidMount() {
   var accessToken =  localStorage.getItem('access-token');
   console.log(accessToken)
   await  axios.get('http://localhost:1337/Rol/Rols',
    {headers: {'access-token': accessToken}})
      .then(res => {
        const rols = res.data.roles;
        console.log( res.data)
        this.setState({  rols });
        
      })
  }
  async handleSubmit(e){
    console.log(this.state)
    try {
      
                   if(this.state.Dni !== '' && this.state.rol !== '' &&
                    this.state.Email !== '' && this.state.LastName !== ''&&
                     this.state.Name !== ''){
                       var data = {
                         User:{
                          Dni: this.state.Dni,
                          Email: this.state.Email,
                          Rols: this.state.rol,
                          Password:this.state.Dni,
                          LastName: this.state.LastName,
                          Name: this.state.Name,
                          Number: this.state.Number,
                        },
                        Adress:{
                          Department: this.state.Department,
                          Adress: this.state.Adress,
                          Floor: this.state.Floor,
                          
                        },
                        
                       }
                   try {
                     var accessToken =  localStorage.getItem('access-token');
                      const res = await axios.post("http://localhost:1337/User/SingUp",data,{headers: {'access-token': accessToken}});                     
                      } catch (error) {
                       alert(error)
                   } 
                   
                   }else{
                       return 'warning'
                       
                   }
               } catch (error) {
                   console.log(error)
               }
          }
  

  handleRol(e){
    this.setState({ rol: e.target.value });
  }

  handleDni(e) {
    this.setState({ Dni: e.target.value });

  }
    handleLastName(e){
      this.setState({ LastName: e.target.value });
    }

    handleName(e){
      this.setState({ Name: e.target.value });
    }

    handleAdress(e){
      this.setState({ Adress: e.target.value });
    }

    handleDepartment(e){
      this.setState({ Department: e.target.value });
    }

    handleFloor(e){
      this.setState({ Floor: e.target.value });
    }

    handleNumber(e){
      this.setState({ Number: e.target.value });
    }

    handleEmail(e) {
        this.setState({ Email: e.target.value });
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
      onChange={this.handleRol}>
        <option value="">Seleccionar Rol</option>
        {listRols} 
      </FormControl>
      </FormGroup>
    );

  }
 
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
          <FormGroup>
            <ControlLabel>Direcciòn</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Adress}
              placeholder="Enter text"
              onChange={this.handleAdress}
            />
           </FormGroup>
          <FormControl.Feedback />
          <FormGroup>
            <ControlLabel>Departamento</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Department}
              placeholder="Enter text"
              onChange={this.handleDepartment}
            />
           </FormGroup>
          <FormControl.Feedback />
          <FormGroup>
            <ControlLabel>Piso</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Floor}
              placeholder="Enter text"
              onChange={this.handleFloor}
            />
           </FormGroup>
          <FormControl.Feedback />
          <FormGroup>
            <ControlLabel>Telefono</ControlLabel>        
            <FormControl
              type="string"
              value={this.state.Number}
              placeholder="Enter text"
              onChange={this.handleNumber}
            />
           </FormGroup>
          <FormControl.Feedback />
          <Button type="submit" onClick={this.handleSubmit}>Iniciar Sesion</Button>
          
        
              
             
      </ul>
    )
  }
}