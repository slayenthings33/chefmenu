import React, { Component } from 'react';
import './FormSection.css';
import Nombre from './Nombre/Nombre';
import Descripcion from './Descripcion/Descripcion';
import Precio from './Precio/Precio';
import Plato from './Plato/Plato';
import Imagen from './Imagen/Imagen';

class FormSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre:"nombre",
      descripcion:"descripción",
      precio:"precio",
      plato:"plato",
      imagen:"imagen",
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <Nombre label={this.state.nombre}/>
        <Descripcion label={this.state.descripcion}/>
        <Precio label={this.state.precio}/>
        <Plato label={this.state.plato}/>
        <Imagen label={this.state.imagen}/>
      </div>
    );
  }
}

export default FormSection;