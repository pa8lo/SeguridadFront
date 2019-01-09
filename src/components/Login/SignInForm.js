import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import StylesLoginForm from '../../assets/css/Login/StylesLoginForm'

const styles = StylesLoginForm;

class SignInForm extends Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleDni = this.handleDni.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleSubmiit = this.handleSubmiit.bind(this);
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
    async handleSubmiit(e){
         try {
          alert("aca")
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
      
      const { classes } = this.props;

        return (
          <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Iniciar Sesión
                </Typography>
                <form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email" >DNI</InputLabel>
                    <Input 
                      type="string"
                      value={this.state.Dni}
                      placeholder="Documento Nacional de Identidad"
                      onChange={this.handleDni}/>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                      type="password"
                      value={this.state.Password}
                      placeholder="*********"
                      onChange={this.handlePassword}
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recordarme"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick= {this.handleSubmiit}
                  >
                    Ingresar
                  </Button>
                </form>
              </Paper>
            </main>
          </React.Fragment>
      );
    }
  }

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInForm);