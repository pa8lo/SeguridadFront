import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './Users.js';
import Login from './Login.js';
import SingUpWithRol from './SingUpWithRol';

const BasicExample = () => (
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
      </ul>

      <hr />

      <Route exact path="/users" component={Usuarios} />
      <Route path="/sign-in" component={Ingresar} />
      <Route path="/sign-up" component={Registrarse} />
    </div>
  </Router>
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