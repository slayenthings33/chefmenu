import React, { Component } from 'react';
import './Plato.css';

class Plato extends Component {
  constructor(props){
  super(props);
  this.state = {
    label:this.props.label,
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
    return <div>
      <div className="formElementContainer" id="platoContainer">
        <form>
          <label>
            <p className="formLabel">{this.state.label}</p>
            <select id='dishPlatoInput' value=''>
              <option value="select" className="platoOptions">-- seleccione --</option>
              <option value="aperitivo" className="platoOptions">aperitivo</option>
              <option value="vegetariano" className="platoOptions">vegetariano</option>
              <option value="tostas" className="platoOptions">tostas</option>
              <option value="paraPicar" className="platoOptions">para picar</option>
              <option value="platoPrincipal" className="platoOptions">plato principal</option>
              <option value="postre" className="platoOptions">postre</option>
              <option value="bebida" className="platoOptions">bebida</option>
          </select>
          </label>
        </form>
      </div>
    </div>;
  }

}

export default Plato;