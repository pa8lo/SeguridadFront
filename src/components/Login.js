import React from 'react';
import {Button,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import axios from 'axios';
//this.props.history.push('/SignUpOk');   

class LoginForm extends React.Component {
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
  
    getValidationState() {
      const length = this.state.Dni.length;
      if (length == 0) return 'warning';
       return null;
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
    return (<form>
        <FormGroup
          controlId="formDni"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Dni</ControlLabel>
          <FormControl
            type="string"
            value={this.state.Dni}
            placeholder="Enter text"
            onChange={this.handleDni}
          />
          <FormControl.Feedback />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.Password}
            placeholder="Enter text"
            onChange={this.handlePassword}
          />
          <FormControl.Feedback />
          <Button type="submit" onClick={this.handleSubmit}>Iniciar Sesion</Button>
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}
export default LoginForm;