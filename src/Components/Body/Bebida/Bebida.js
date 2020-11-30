import React, { Component } from 'react';
import './Bebida.css';
import UnaComida from '../UnaComida/UnaComida'

class Bebida extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div id='bebidaContainer' className='platoBigContainer'>
        <h3 className='courseLabel'>bebidas</h3>
        <div id="bebidaContainer" className='platoSmallContainer'>
          <UnaComida/>
        </div>
      </div>
    );
  }
}

export default Bebida;