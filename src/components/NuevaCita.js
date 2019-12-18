import React, { Component, Fragment } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
  cita: {
    doctor: '',
    paciente: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
};
class NuevaCita extends Component {
  state = { ...stateInicial };

  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Extraer los valores del state
    const { doctor, paciente, fecha, hora, sintomas } = this.state.cita;
    // Validar que todos los campos esten llenos
    if (
      doctor === '' ||
      paciente === '' ||
      fecha === '' ||
      hora === '' ||
      sintomas === ''
    ) {
      this.setState({ error: true });
      // Detener ejecución
      return;
    }
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    // Agregar cita al state de la app
    this.props.crearNuevaCita(nuevaCita);

    this.setState({ ...stateInicial });
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        <Container className='mt-5'>
          <Card>
            <Form className='m-5' onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  {error ? (
                    <Form.Text className='text-danger'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  ) : null}
                  <Form.Group>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Nombre del doctor'
                      name='doctor'
                      onChange={this.handleChange}
                      value={this.state.cita.doctor}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Paciente</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Nombre del paciente'
                      name='paciente'
                      onChange={this.handleChange}
                      value={this.state.cita.paciente}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type='date'
                      name='fecha'
                      onChange={this.handleChange}
                      value={this.state.cita.fecha}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                      type='time'
                      name='hora'
                      onChange={this.handleChange}
                      value={this.state.cita.hora}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows='3'
                      placeholder='Describe los sintomas del paciente'
                      name='sintomas'
                      onChange={this.handleChange}
                      value={this.state.cita.sintomas}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Button
                    className='float-right'
                    variant='primary'
                    type='submit'
                  >
                    Crear cita
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
};

export default NuevaCita;
