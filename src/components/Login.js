import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FormularioLogin from './FormularioLogin';
import CarruselLogin from './CarruselLogin';
//this.props.history.push('/SignUpOk');   

class LoginForm extends React.Component {

  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={7}>
              <FormularioLogin/>
            </Col>
            <Col xs={6} md={5}>
              <CarruselLogin/>
            </Col>
          </Row>
        </Grid>
    )
  }
}
export default LoginForm;