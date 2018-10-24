import React, { Component } from 'react';
import {Button,FormGroup,FormControl,HelpBlock,ControlLabel, Label, Form, Checkbox, Col} from 'react-bootstrap';
import axios from 'axios';


class FormularioLogin extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleDni = this.handleDni.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          Dni: '',
          Password:''
        };
      }
    
      handleDni(e) {
        this.setState({ Dni: e.target.value });
   
      }
  
      handlePassword(e) {
          this.setState({ Password: e.target.value });
        }
        
      async handleSubmit(e){
           try {
  
               if(this.state.Dni !== '' && this.state.Password !== ''){
                   var data = {
                       Dni:this.state.Dni,
                       Password:this.state.Password
                   }
               try {
                  const res = await axios.post("http://localhost:1337/User/login",data);
                  localStorage.setItem('access-token', res.data.token);
                  alert( res.data.token)
                  } catch (error) {
                  alert(error)
               } 
               
               }else{
                  alert("error")
                   return 'warning'
                   
               }
           } catch (error) {
               alert(error)
           }
      }

    render() { 
        return (
            <form>
                <h2>
                Iniciar Sesión
            </h2>
            <Form horizontal>
            <br/>
  <FormGroup controlId="formDni">
    <Col componentClass={ControlLabel} sm={4}>
      DNI
    </Col>
    <Col sm={5}>
      <FormControl type="string"
              value={this.state.Dni}
              placeholder="Documento Nacional de Identidad"
              onChange={this.handleDni} />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={4}>
      Clave
    </Col>
    <Col sm={5}>
      <FormControl type="password"
              value={this.state.Password}
              placeholder="*********"
              onChange={this.handlePassword}/>
        </Col>
    </FormGroup>

    <FormGroup>
        <Col smOffset={2} sm={8}>
        <Checkbox>Remember me</Checkbox>
        </Col>
    </FormGroup>
    <br/>
    <FormGroup>
        <Col smOffset={2} sm={8}>
        <Button type="submit" onClick={this.handleSubmit}>Iniciar Sesion</Button>
        </Col>
    </FormGroup>
    </Form>;
          </form>
         );
    }
}
 
export default FormularioLogin;