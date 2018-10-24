import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import StylesMainOrder from '../../assets/css/Order/StylesMainOrder'

const styles = StylesMainOrder;

class MainOrder extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }
    render() {

      const { classes } = this.props;

      return (
        <div className={classes.root}>
        <Grid container spacing={16}>

          <Grid item xs={3}>
              <Button variant="outlined" color="secondary" className={classes.button}>
                Nuevo Pedido
              </Button>
              
          </Grid>

          <Grid item xs={3}>
          </Grid>

          <Grid item xs={3}>
          </Grid>

          <Grid item xs={3}>
              <Button variant="outlined" color="primary" className={classes.button}>
                Asignar Delivery
              </Button>
          </Grid>

          <Grid item xs={1}>
        </Grid>

        {/* <Grid item xs={6} sm container>
        <Paper className={classes.paper}>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Standard license
              </Typography>
              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
              <Typography color="textSecondary">ID: 1030114</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
          </Paper>
          </Grid> */}

        <Grid item xs={10}>
          <Paper className={classes.paper}>
          PEDIDOS
          <Divider />
          <Grid container spacing={16} style={{ paddingTop: 30 }}>
            <Grid item xs={6}>
              <Typography gutterBottom variant="subtitle1">
                Standard license
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
              <Typography color="textSecondary">ID: 1030114</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="subtitle1">O</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="subtitle1">O</Typography>
            </Grid>
          </Grid>
          </Paper>
        </Grid>

          <Grid item xs={1}>
          </Grid>

        </Grid>

      </div>
       );
    }
  }

  MainOrder.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(MainOrder);