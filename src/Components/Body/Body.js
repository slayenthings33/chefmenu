import React, { Component } from 'react';
import './Body.css';
import Aperitivo from './Aperitivo/Aperitivo'
import Bebida from './Bebida/Bebida'
import ParaPicar from './ParaPicar/ParaPicar'
import PlatoPrincipal from './PlatoPrincipal/PlatoPrincipal'
import Postre from './Postre/Postre'
import Tostas from './Tostas/Tostas'
import Vegetariano from './Vegetariano/Vegetariano'
import PlatosCarne from './PlatosCarne/PlatosCarne'
import PlatosPollo from './PlatosPollo/PlatosPollo'

class Body extends Component {
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
      <div id="bodyContainer">
        <Aperitivo title='aperitivo'/>
        <Tostas title='tostas'/>
        <ParaPicar title='para picar'/>
        <Vegetariano title='vegetariano'/>
        <PlatoPrincipal title='plato principal'/>
        <PlatosCarne title='platos de carne'/>
        <PlatosPollo title='platos de pollo'/>
        <Postre title='postre'/>
        <Bebida title='bebida'/>
      </div>
    );
  }
}

export default Body;