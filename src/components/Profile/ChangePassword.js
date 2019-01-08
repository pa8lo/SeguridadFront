import React from 'react';
import axios from 'axios';
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

import StylesLoginForm from '../../assets/css/Login/StylesLoginForm'

const styles = StylesLoginForm;

 class ChangePassword extends React.Component {
    constructor(props, context) {
      super(props, context);
     //   this.handleUsers = this.handleDni.bind(this);
        this.state = {
          password: "",
          newPassword:"",
          repeatPassword:""
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
            <CssBaseline />
            <main className={classes.layoutPassword}>
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
                      type="password"
                      value={this.state.Password}
                      placeholder="*********"
                      onChange={this.handlePassword}
                      autoComplete="current-password"
                    />
                    </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Nueva Contraseña</InputLabel>
                    <Input
                      type="password"
                      value={this.state.newPassword}
                      placeholder="*********"
                      onChange={this.handlenewPassword}
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Repetir Contraseña</InputLabel>
                    <Input
                      type="password"
                      value={this.state.repeatPassword}
                      placeholder="*********"
                      onChange={this.handlerepeatPassword}
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <Button
                    type="submit"
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
        )
      }
}
ChangePassword.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(ChangePassword);