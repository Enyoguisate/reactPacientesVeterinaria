import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const citas = JSON.parse(localStorage.getItem('citas'));
    this.setState({citas: citas ? citas : []});
  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    console.log('datos', datos);
    const citas = [...this.state.citas, datos];
    this.setState({citas})
  }

  eliminarCita = id => {
    console.log('id', id)
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter( cita =>  cita.id !== id);
    console.log('citas', citas);
    this.setState({citas});
  }

  render () {
    return (
      <div className="container">
        <Header titulo='Administrador pacientes veterinaria'/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            ></NuevaCita>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
              ></ListaCitas>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
