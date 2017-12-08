import React, { Component } from 'react';
import eases from 'eases';

// https://github.com/kunukn/react-number-easing/blob/master/src/components/NumberEasing.jsx
const log = console.log.bind(console);

const TOGGLE = {
  EXPANDED: 1,
  COLLAPSED: 2,
  EXPANDING: 3,
  COLLAPSING: 4,
};

class ToggleBox extends Component {
  static defaultProps = {
    speed: 500,
    ease: 'quintInOut',
  };

  state = {
    box: TOGGLE.EXPANDED,
  };

  onToggle = () => {
    log(this.BoxElement.clientHeight);
  };
  render() {

    log(eases[this.props.ease](.3));

    //return this.props.children({onToggle: this.onToggle});
    return (
      <div className="togglebox">
        <Toggle onToggle={this.onToggle}>toggle</Toggle>
        <Box inputRef={el => (this.BoxElement = el)}>box</Box>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.delayTimeout);
  }

}

class Toggle extends Component {
  render() {
    return (
      <div className="togglebox__toggle">
        <button onClick={this.props.onToggle}>{this.props.children}</button>
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
    return <ToggleBox />;
  }
}

export default App;
