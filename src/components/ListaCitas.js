import React, { Fragment } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <Fragment>
      <Container className='mt-5'>
        <Card className='p-5'>
          <h3>Listado de citas</h3>
          <ListGroup>
            <ListGroup.Item>
              {citas.map(cita => (
                <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </Fragment>
  );
};

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default ListaCitas;
