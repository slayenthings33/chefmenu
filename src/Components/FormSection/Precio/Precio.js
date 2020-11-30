import React, { Component } from 'react';
import './Precio.css';

class Precio extends Component {
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
      <div>
        <div className="formElementContainer" id="precioContainer">
        <form>
          <label>
            <p className="formLabel">{this.state.label}</p>
            <input id='dishPriceInput' type="text" name="name" value='' />
          </label>
        </form>
      </div>
      </div>
    );
  }
}

export default Precio;