import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';

const Cita = ({ cita, eliminarCita }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={12} md={3} lg={3}>
          Doctor: {cita.doctor}
        </Col>
        <Col xs={12} md={3} lg={3}>
          Paciente: {cita.paciente}
        </Col>
        <Col xs={12} md={3} lg={3}>
          Fecha: {cita.fecha}
        </Col>
        <Col xs={12} md={3} lg={3}>
          Hora: {cita.hora}
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          Sintomas: {cita.sintomas}
        </Col>
      </Row>
      <Button onClick={() => eliminarCita(cita.id)}>Eliminar cita</Button>
    </ListGroup.Item>
  );
};

export default Cita;
