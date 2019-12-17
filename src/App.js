import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];
    this.setState({
      citas
    });
  };
  /* Elimina cita del state */
  eliminarCita = id => {
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({ citas });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <NuevaCita crearNuevaCita={this.crearNuevaCita} />
        <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
      </Fragment>
    );
  }
}

export default App;
