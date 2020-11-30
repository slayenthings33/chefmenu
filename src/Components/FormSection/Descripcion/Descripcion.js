import React, { Component } from 'react';
import './Descripcion.css';

class Descripcion extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: this.props.label,
    };
  }

  render() {
    return (
      <div className="formElementContainer" id="descriptionContainer">
        <form>
          <label>
            <p className="formLabel">{this.state.label}</p>
            <input id='dishDescriptionInput' type="text" name="description" value='' />
          </label>
        </form>
      </div>
    );
  }
}

export default Descripcion;