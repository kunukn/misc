import React, { Component } from 'react'; // eslint-disable-line
//import PropTypes from 'prop-types'; // eslint-disable-line
import eases from 'eases';

// inspiration from
// https://github.com/kunukn/react-number-easing/blob/master/src/components/NumberEasing.jsx
const log = console.log.bind(console);
//log(Object.keys(eases));

const TOGGLE = {
  EXPANDED: 'EXPANDED',
  COLLAPSED: 'COLLAPSED',
  EXPANDING: 'EXPANDING',
  COLLAPSING: 'COLLAPSING',
};

const rAF = window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : cb => setTimeout(cb, 16);

class ToggleBox extends Component {
  static propTypes = {
    // duration: PropTypes.number,
    // ease: PropTypes.oneOf(Object.keys(eases)),
  };

  static defaultProps = {
    duration: 500,
    ease: 'quartInOut',
    //boxState: TOGGLE.EXPANDED,
  };

  constructor(props){
    super(props);
    this.state = {};
    this._state_ = {
      boxElement: null,
      isAnimating: false,
      toggleState: this.props.toggleState || TOGGLE.EXPANDED,
    };


  }


  setBoxElement = element => {
    this._state_.boxElement = element || null;
    if(element && this._state_.toggleState === TOGGLE.COLLAPSED){
      this.setCollapsedState();
    }
  };

  onToggle = () => {
    if (this._state_.isAnimating) {
      log('working.. please wait - isAnimating true');
      return;
    }

    const updateState = ({toggleState, display}) => {
      this._state_.isAnimating = true;
      this._state_.toggleState = toggleState;
      if(typeof display !== undefined){
        this._state_.boxElement.style.display = display;  
      }
      this._state_.boxHeight = this._state_.boxElement.clientHeight;
      this._state_.startAnimationTime = new Date().getTime();
    };

    if (this._state_.toggleState === TOGGLE.EXPANDED) {
      updateState({toggleState: TOGGLE.COLLAPSING});
      this.collapse();
    } else if (this._state_.toggleState === TOGGLE.COLLAPSED) {
      updateState({toggleState: TOGGLE.EXPANDING, display: ''});
      this.expand();
    } else {
      log('error onToggle');
    }
  };

  setCollapsedState = () => {
    this._state_.boxElement.style.display = 'none';
    this._state_.boxElement.style.height = '';
    this._state_.toggleState = TOGGLE.COLLAPSED;
    this._state_.isAnimating = false;
  };

  collapse = () => {
    if (!this._state_.boxElement) {
      log('no boxElement');
      return;
    }

    const duration = parseInt(this.props.duration, 10);

    const now = new Date().getTime();
    const elapsedTime = Math.min(duration, now - this._state_.startAnimationTime);
    const range = elapsedTime / duration;
    const progress = 1 - eases[this.props.ease](range);
    const currentHeightValue = Math.round(this._state_.boxHeight * progress);

    if (elapsedTime < duration) {
      this._state_.boxElement.style.height = `${currentHeightValue}px`;
      this._state_.timeout = this.nextTick(this.collapse);
    } else {
      this.setCollapsedState();
    }
  };

  setExpandedState = () => {
    this._state_.boxElement.style.height = '';
    this._state_.toggleState = TOGGLE.EXPANDED;
    this._state_.isAnimating = false;
  };

  expand = () => {
    if (!this._state_.boxElement) {
      log('no boxElement');
      return;
    }

    const duration = parseInt(this.props.duration, 10);
    const now = new Date().getTime();
    const elapsedTime = Math.min(duration, now - this._state_.startAnimationTime);
    const range = elapsedTime / duration;
    const progress = eases[this.props.ease](range);
    let currentHeightValue = Math.round(this._state_.boxHeight * progress);

    if (elapsedTime < duration) {
      this._state_.boxElement.style.height = `${currentHeightValue}px`;
      this._state_.timeout = this.nextTick(this.expand);
    } else {
      this.setExpandedState();
    }
  };

  nextTick = callback => {
    return setTimeout(callback, 16);
  };

  componentWillReceiveProps(nextProps) {}

  render() {
    return this.props.render({
      onToggle: this.onToggle,
      setBoxElement: this.setBoxElement,
      state: {},
    });
  }

  componentDidUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

class App extends Component {
  render() {
    return (
      <ToggleBox
        duration={300}
        ease="quartInOut"
        toggleState='COLLAPSED'
        render={({ onToggle, setBoxElement, state }) => (
          <div className="togglebox">
            <div className="togglebox__toggle">
              <button onClick={onToggle}>toggle</button>
            </div>
            <div className="togglebox__box" ref={setBoxElement}>
              <div className="togglebox__box-inner">box inner</div>
            </div>
            <pre>{(() => {
              return JSON.stringify(state, null, 2)
            })()
            }</pre>
          </div>
        )}
      />
    );
  }
}

export default App;
