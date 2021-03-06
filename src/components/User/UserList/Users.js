import React from 'react';
import axios from 'axios';
import {DropdownButton,MenuItem,Button,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

export default class Users extends React.Component {
  constructor(props, context) {
    super(props, context);
   //   this.handleUsers = this.handleDni.bind(this);
      this.state = {
        users:[]
      };
  }

  async componentDidMount() {
    
   var accessToken =  localStorage.getItem('access-token');
   alert(accessToken);
   console.log(accessToken);
   try {
    
   await  axios.get('http://localhost:1337/User/users',
    {headers: {'access-token': accessToken}})
      .then(res => {
        const users = res.data;
        console.log( res.data)
        this.setState({  users });
      })
      
    } catch(err) {
      alert(err);
    }
  }
  async userDelete(id){
    var accessToken =  localStorage.getItem('access-token');
    var data = {'id': id};
    await axios.patch("http://localhost:1337/User/DeleteUser",data,{headers: {'access-token': accessToken}})
    .then(res => {
      alert(res)
    })
    }
  
    userEdit(){
      
    }

     usersFills() {
    const listUser = this.state.users.map((user) =>
      <TableRow key={user.id}>
        <TableCell component="th" scope="row">
          {user.Dni}
        </TableCell>
        <TableCell >{user.Name}</TableCell>
        <TableCell >{user.LastName}</TableCell>
        <TableCell >{user.Email}</TableCell>
        <TableCell><Button onClick={() => this.userDelete(user.id)}>eliminar usuario</Button></TableCell>
        <TableCell><Button onClick={() => this.userEdit(user.id)}>eliminar usuario</Button></TableCell>
      </TableRow>
    )  
    
    return (
    <Grid container spacing={16}>
      <Grid item xs={1}>
      </Grid>
        <Grid item xs={10}>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Documento de identidad</TableCell>
                  <TableCell >Nombre</TableCell>
                  <TableCell >Apellido</TableCell>
                  <TableCell >Email</TableCell>
                  <TableCell >Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listUser}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
    );
  }
  render() {
    return (
      this.usersFills()
    )
  }

}