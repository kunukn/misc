import React, { Component } from 'react';
import eases from 'eases';

// https://github.com/kunukn/react-number-easing/blob/master/src/components/NumberEasing.jsx
const log = console.log.bind(console);

const TOGGLE = {
  EXPANDED: 'EXPANDED',
  COLLAPSED: 'COLLAPSED',
  EXPANDING: 'EXPANDING',
  COLLAPSING: 'COLLAPSING',
};

class ToggleBox extends Component {
  static defaultProps = {
    speed: 500,
    ease: 'quintInOut',
    box: TOGGLE.EXPANDED,
  };

  state = {
    box: this.props.box,
  };

  setBoxElement = element => {
    const el = element || null;
    this.boxElement = el;
    const boxHeight = (el && el.clientHeight) || 0;
    this.setState({
      boxHeight
    });
  };

  onToggle = () => {
    log(this.boxElement && this.boxElement.clientHeight);
    log(eases[this.props.ease](0.3));
  };

  render() {
    
    return this.props.children({
      onToggle: this.onToggle,
      setBoxElement: this.setBoxElement,
      state: this.state,
    });
  }

  componentDidUpdate(){
  }
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.delayTimeout);
  }
}

class App extends Component {
  render() {
    return (
      <ToggleBox>
        {({ onToggle, setBoxElement, state }) => {
          return (
            <div className="togglebox">
              <div className="togglebox__toggle">
                <button onClick={onToggle}>toggle</button>
              </div>
              <div className="togglebox__box" ref={setBoxElement}>
                box
              </div>
              <pre>{
                JSON.stringify(state, null, 2)
              }</pre>
            </div>
          );
        }}
      </ToggleBox>
    );
  }
}

export default App;
