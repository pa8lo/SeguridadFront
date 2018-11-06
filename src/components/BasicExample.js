import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './User/UserList/Users';
import Login from './Login/Login.js';
import SingUpWithRol from './Register/SingUpWithRol';
import Reports from './Reports/Dashboard';
import PersistentDrawer from './SideBar';
import Checkout from './Order/Checkout';
import MainOrder from './Order/MainOrder';
import EditUser from './Register/EditUser';
// import SignInForm from './SignInForm'

const BasicExample = () => (
    <div>
    {/* <PersistentDrawer/> */}
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/users">Lista Usuarios</Link>
        </li>
        <li>
          <Link to="/sign-in">Ingresar</Link>
        </li>
        <li>
          <Link to="/sign-up">Registrarse</Link>
        </li>
        <li>
          <Link to="/reports">Reportes</Link>
        </li>
        <li>
          <Link to="/register-an-order">Generar Pedidos</Link>
        </li>
        <li>
          <Link to="/order">Pedido</Link>
        </li>
        <li>
          <Link to="/edit-user" params={{id: "foo"}}>Editar Usuario</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/users" component={Usuarios} />
      <Route path="/sign-in" component={Ingresar} />
      <Route path="/sign-up" component={Registrarse} />
      <Route path="/reports" component={Reportes} />
      <Route path="/register-an-order" component={GenerarPedido} />
      <Route path="/order" component={MainOrder} />
      <Route path="/edit-user/:id" component={EditarUsuario} />
    </div>
  </Router>
  </div>
);

const Usuarios = () => (
    <Users/>
);

const Ingresar = () => (
    <Login/>
);

const Registrarse = () => (
    <SingUpWithRol/>
);

const Reportes = () => (
    <Reports/>
);

const GenerarPedido = () => (
    <Checkout/>
);

const EditarUsuario = () => (
  <EditUser/>
);

/*
  const Topics   = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
        <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
            <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
        />
    </div>
    );

    const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>*/

export default BasicExample;