import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = ({
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
});

class NuevaCita extends Component {
    state = ({...stateInicial});

    handleChange = (e) => {
        this.setState({error:false});
        this.setState({cita:{...this.state.cita,[e.target.name]: e.target.value}});
    }

    isEmpty = () => {
        return this.state.cita.mascota === '' || this.state.cita.propietario === '' || this.state.cita.fecha === '' || this.state.cita.hora === '' || this.state.cita.sintomas === '';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        if ( this.isEmpty() ) {
            this.setState({error:true});
            return;
        } else {
            this.setState({error:false});
            const nuevaCita = {...this.state.cita};
            nuevaCita.id = uuid();
            this.props.crearNuevaCita(nuevaCita);
            this.setState({...stateInicial});
        }
    }

    render () {

        const { error } = this.state;

        return ( 
            <div className="card mt-5 py-t">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear Nueva Cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null }

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="duenio"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    id="fecha"
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    id="hora"
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea id="sintomas" className="form-control" name="sintomas" placeholder="Describe los sintomas" onChange={this.handleChange}
                                  value={this.state.cita.sintomas}  />
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"></input>

                    </form>
                </div>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;