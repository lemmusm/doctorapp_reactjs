import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {};

  crearNuevaCita = datos => {
    console.log(datos);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <NuevaCita crearNuevaCita={this.crearNuevaCita} />
      </Fragment>
    );
  }
}

export default App;
