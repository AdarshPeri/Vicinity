import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Headlines from './components/Headlines';

import Particles from 'react-particles-js';
import './App.css';

const particleOptions={
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  }
  
}

class App extends Component{

  render(){
    return(
      <div>
      <Particles className='particles'
              params={particleOptions}
            />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={Headlines} />
      </Switch>
      </div>
      )
  }
}

export default App;
