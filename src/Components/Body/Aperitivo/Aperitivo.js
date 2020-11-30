import React, { Component } from 'react';
import './Aperitivo.css';
import UnaComida from '../UnaComida/UnaComida';

class Aperitivo extends Component {
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
      <div id='aperitivoContainer' className='platoBigContainer'>
        <h3 className='courseLabel'>aperitivo</h3>
        <div id="comidaContainer" className='platoSmallContainer'>
          <UnaComida/>
        </div>
      </div>
    );
  }
}

export default Aperitivo;