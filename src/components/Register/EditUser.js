import React from 'react';
import axios from 'axios';
import {DropdownButton,MenuItem,Button,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import StylesLoginForm from '../../assets/css/Login/StylesLoginForm';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';

import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = StylesLoginForm;

class EditUser extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.handleDni = this.handleDni.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleRol = this.handleRol.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleName =this.handleName.bind(this);
      this.handleUser = this.handleUser.bind(this);
      
      this.state = {
        Dni: '',
        Email:'',
        rols:[],
        rol:'',
        LastName:'',
        Name:'',
        Users: [],
        idUser:'',
      };
  }

  async componentDidMount() {
  alert(this.props.location.search);
  console.log(this.props.match.params.id);
    //  var accessToken =  localStorage.getItem('access-token');
  //  console.log(accessToken)
  //  await  axios.get('http://localhost:1337/Rol/rols',
  //   {headers: {'access-token': accessToken}})
  //     .then(res => {
  //       const rols = res.data;
  //       this.setState({rols : rols});
        
  //     })

  //     await  axios.get('http://localhost:1337/User/Users',
  //     {headers: {'access-token': accessToken}})
  //       .then(res => {
  //         const users = res.data;
  //         this.setState({Users : users});
  //       })
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
                       }
                   try {
                     var accessToken =  localStorage.getItem('access-token');
                      const res = await axios.put("http://localhost:1337/User/UpdateUser",data,{headers: {'access-token': accessToken}});                     
                      alert( res.data.message)  
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

  handleUser(e){
    this.setState({ idUser: e.target.value });
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

    handleEmail(e) {
        this.setState({ Email: e.target.value });
      }

    
   rolsList() {
    console.log(this.state.rols)
    const rols = this.state.rols
    console.log("roles"+rols)
    const listRols = rols.map((rol) =>
    <option value={rol.id}>{rol.Name}</option>
    );

    return (
    <FormGroup controlid="formControlsSelect">
    <ControlLabel>Select</ControlLabel>
      <FormControl
      controlid="formControlsSelect"
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

  usersList() {
    console.log(this.state.Users)
    const users = this.state.Users
    console.log("usuarios"+users)
    const listUser = users.map((users) =>
    <option value={users.id}>{users.Name}</option>
    );

    return (
    <FormGroup controlid="formControlsSelect">
    <ControlLabel>Seleccionar</ControlLabel>
      <FormControl
      controlid="formControlsSelect"
      componentClass="select" placeholder="select"
      value={this.state.idUser}
      placeholder="Enter text"
      onChange={this.handleUser}>
        <option value="">Seleccionar Usuario</option>
        {listUser} 
      </FormControl>
      </FormGroup>
    );

  }
 
  render() {

    const { classes } = this.props;

    return (
      <ul>
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Editar Emplados
                </Typography>
                <form className={classes.form}>
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
          {this.usersList()}
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
          <Button type="submit" onClick={this.handleSubmit}>Editar Usuario</Button>
          </form>
              </Paper>
            </main>
          </React.Fragment>
      </ul>
    )
  }
}

EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditUser);