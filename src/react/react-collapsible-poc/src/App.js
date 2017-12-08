import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const log = console.log.bind(console);

const TOGGLE = {
  EXPANDED: 1,
  COLLAPSED: 2,
  EXPANDING: 3,
  COLLAPSING: 4,
};

class ToggleBox extends Component {
  state = {
    box: TOGGLE.EXPANDED
  };
  onToggle = () => {
    log(this.BoxElement.clientHeight);
  }
  render() {
    //return this.props.children({onToggle: this.onToggle});
    return (
      <div className="togglebox">
        <Toggle onToggle={this.onToggle}>toggle</Toggle>  
        <Box inputRef={el => this.BoxElement = el}>box</Box>
      </div>
    );
  }
}

class Toggle extends Component {
  render() {
    return (      
      <div className="togglebox__toggle">
        <button onClick={this.props.onToggle}>
          {this.props.children}
        </button>        
    </div>    
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div className="togglebox__box" ref={this.props.inputRef}>
        {this.props.children}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <ToggleBox/>
    );
  }
}

export default App;
