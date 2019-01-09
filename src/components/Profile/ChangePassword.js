import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import StylesLoginForm from '../../assets/css/Login/StylesLoginForm'

const styles = StylesLoginForm;

 class ChangePassword extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handlerepeatPassword = this.handlerepeatPassword.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handlenewPassword = this.handlenewPassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.openSnackbarNotTheSamePassword = this.openSnackbarNotTheSamePassword.bind(this);
      this.state = {
          passwordError:false,
          password: "",
          newPasswordError:false,
          newPassword:"",
          repeatPasswordError:false,        
          repeatPassword:"",
          SnackbarPassword:false,
          SnackbarNotTheSamePassword:false
      };
    }
    handleClosePassword = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({ SnackbarPassword: false });
    };
    openSnackbarnewPassword(){
      this.setState({newPasswordError : true})
      this.setState({ SnackbarPassword: true });
    }
    openSnackbarrepeatPassword(){
      this.setState({repeatPasswordError : true})
      this.setState({ SnackbarPassword: true });
    }
    openSnackbarPassword(){
      this.setState({passwordError : true})
      this.setState({ SnackbarPassword: true });
    }
    openSnackbarNotTheSamePassword(){
      this.setState({repeatPasswordError : true})
      this.setState({ SnackbarNotTheSamePassword: true });
    }
    handlePassword(e) {
      this.setState({ password: e.target.value });
    }
    handlenewPassword(e) {
      this.setState({ newPassword: e.target.value });
    }
    handlerepeatPassword(e) {
      this.setState({ repeatPassword: e.target.value });
    }
    async handleSubmit(e){
      try {
        (this.state.newPassword==="")? this.openSnackbarnewPassword() :this.setState({newPasswordError : false});
        (this.state.password==="")?this. openSnackbarrepeatPassword():this.setState({passwordError : false});
        (this.state.repeatPassword==="")?this.openSnackbarPassword():this.setState({repeatPasswordError : false});
        if(this.state.newPassword !=="" && this.state.password !=="" && this.state.repeatPassword !=="") {
          if(this.state.newPassword === this.state.repeatPassword){
              this.setState({repeatPasswordError : false})
              var data= {
                Password : this.state.password,
                NewPassword :this.state.newPassword
              }

            try {
              var accessToken =  localStorage.getItem('access-token');
              const res = await axios.post("http://localhost:1337/User/ChangePassword",data,{headers: {'access-token': accessToken}});

              alert( res.data.message)
              } catch (error) {
            } 
          }else{

            this.openSnackbarNotTheSamePassword()
          }
        }
         
          
          
      } catch (error) {
       //   alert(error)
      }
 }

    render() {
        const { classes } = this.props;
        return (
      <Grid container spacing={24}>
        <Snackbar
          open={this.state.SnackbarPassword}
          autoHideDuration={2000}
          onClose={this.handleClosePassword}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Campos requeridos vacios</span>}
        />

        <Snackbar
          open={this.state.SnackbarNotTheSamePassword}
          autoHideDuration={2000}
          onClose={this.handleClosePassword}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Las contraseñas ingresadas no coinciden</span>}
        />
         
          <Grid item xs={1} md={3} lg={4}>
          </Grid>
          <Grid item xs={10} md={6} lg={4} >
          <React.Fragment>
              <CssBaseline />
              <main >
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Cambiar contraseña
                  </Typography>
                  <form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Contraseña Actual</InputLabel>
                      <Input
                        id="passwordActual"
                        type="password"
                        value={this.state.Password}
                        placeholder="*********"
                        onChange={this.handlePassword}
                        autoComplete="current-password"
                        error={this.state.passwordError}
                      />
                      </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Nueva Contraseña</InputLabel>
                      <Input
                        id="newPassword"
                        type="password"
                        value={this.state.newPassword}
                        placeholder="*********"
                        onChange={this.handlenewPassword}
                        autoComplete="current-password"
                        error={this.state.newPasswordError}
                      />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Repetir Contraseña</InputLabel>
                      <Input
                        id="repeatPassword"
                        type="password"
                        value={this.state.repeatPassword}
                        placeholder="*********"
                        onChange={this.handlerepeatPassword}
                        autoComplete="current-password"
                        error={this.state.repeatPasswordError}
                      />
                    </FormControl>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick= {this.handleSubmit}
                    >
                      Modificar Contraseña
                    </Button>
                  </form>
                </Paper>
              </main>
            </React.Fragment>
          </Grid>
          <Grid item xs={1} md={3} lg={4}>         
          </Grid>          
        </Grid>
        )
      }
}
ChangePassword.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(ChangePassword);