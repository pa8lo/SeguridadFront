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
   console.log(accessToken)
   await  axios.get('http://localhost:1337/User/users',
    {headers: {'access-token': accessToken}})
      .then(res => {
        const users = res.data;
        console.log( res.data)
        this.setState({  users });
        
      })
  }
  async userDetail(id){
      alert(id)
  } 
   usersFills() {
    const listUser = this.state.users.map((user) =>
      <TableRow key={user.id} onClick={() => this.userDetail(user.id)} >
        <TableCell component="th" scope="row"> 
          {user.Dni}
        </TableCell>
        <TableCell >{user.Name}</TableCell>
        <TableCell >{user.LastName}</TableCell>
        <TableCell >{user.Email}</TableCell>
      </TableRow>
    )
    return (
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
    );
  }
  render() {
    return (
      this.usersFills()
    )
  }

}