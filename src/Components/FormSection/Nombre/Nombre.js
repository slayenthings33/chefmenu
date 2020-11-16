import React, { Component } from 'react';
import './Nombre.css';
import Form from 'react-bootstrap/Form'

class Nombre extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: this.props.label,
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
      <div className="formElementContainer" id="nombreContainer">
         <form>
          <label>
            <p className="formLabel">{this.state.label}</p>
            <input type="text" name="name" />
          </label>
        </form>
      </div>
    );
  }
}

export default Nombre;

        