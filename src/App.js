import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

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

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Header />
        <NuevaCita crearNuevaCita={this.crearNuevaCita} />
      </Fragment>
    );
  }
}

export default App;
