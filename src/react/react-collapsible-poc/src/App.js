import React, {Component} from 'react'; // eslint-disable-line
import PropTypes from 'prop-types'; // eslint-disable-line
import eases from 'eases';

// https://github.com/kunukn/react-number-easing/blob/master/src/components/NumberEasing.jsx
const log = console.log.bind(console);
log(Object.keys(eases));

const TOGGLE = {
  EXPANDED: 'EXPANDED',
  COLLAPSED: 'COLLAPSED',
  EXPANDING: 'EXPANDING',
  COLLAPSING: 'COLLAPSING',
};

class ToggleBox extends Component {

  static propTypes = {
    duration: PropTypes.number,
    ease: PropTypes.oneOf(Object.keys(eases)),
  };

  static defaultProps = {
    duration: 500,
    ease: 'linear',
    //boxState: TOGGLE.EXPANDED,
  };

  state = {
    isAnimating: false,
    //boxState: TOGGLE.EXPANDED,
  };

  setBoxElement = element => {
    this.boxElement = element || null;
  };

  onToggle = () => {
    if (this.isAnimating) {
      log('isAnimating true');
      return;
    }

    if (this.state.boxState === TOGGLE.EXPANDED) {
      this.boxState = TOGGLE.COLLAPSING;
      this.isAnimating = true;
    } else if (this.state.boxState === TOGGLE.COLLAPSED) {
      this.boxState = TOGGLE.EXPANDING;
      this.isAnimating = true;
    } else {
      log('error');
    }

    log(this.boxState);

    log(this.boxElement && this.boxElement.clientHeight);
    log(eases[this.props.ease](0.3));

    this.updateHeight();
  };

  updateHeight = () => {
    //const duration = parseInt(this.props.duration, 10);

    if (!this.boxElement) {
      log('no boxElement');
      return;
    }

    // const now = new Date().getTime();
    // const elapsedTime = Math.min(
    //   this.props.duration,
    //   now - this.startAnimationTime,
    // );
    // const progress = eases[this.props.ease](elapsedTime / this.props.speed);

    // const currentDisplayValue = Math
    //   .round(((value - this.state.previousValue) * progress) + this.state.previousValue);

    // this.setState({
    //   displayValue: currentDisplayValue,
    // });

    // if (elapsedTime < this.props.duration) {
    //   this.timeout = setTimeout(this.updateHeight, 16);
    // } else {
    //   this.setState({
    //     previousValue: value,
    //   });
    // }
  };

  componentWillReceiveProps(nextProps) {
    // const duration = parseInt(this.props.duration, 10);
    // if (parseInt(nextProps.duration, 10) === duration) {
    //   return;
    // }
    // this.setState({
    //   previousValue: this.state.displayValue,
    // });
    // if (!window.isNaN(parseInt(this.props.delayValue, 10))) {
    //   this.delayTimeout = setTimeout(() => {
    //     this.startAnimationTime = new Date().getTime();
    //     this.updateNumber();
    //   }, this.props.delayValue);
    // } else {
    //   this.startAnimationTime = new Date().getTime();
    //   this.updateNumber();
    // }
  }

  render() {
    return this.props.render({
      onToggle: this.onToggle,
      setBoxElement: this.setBoxElement,
      state: this.state,
    });
  }

  componentDidUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    // clearTimeout(this.delayTimeout);
  }
}

class App extends Component {
  render() {
    return (
      <ToggleBox
        duration={1000}
        ease="linear"
        render={({ onToggle, setBoxElement, state }) => (
          <div className="togglebox">
            <div className="togglebox__toggle">
              <button onClick={onToggle}>toggle</button>
            </div>
            <div className="togglebox__box" ref={setBoxElement}>
              <div className="togglebox__box-inner">
                box inner
              </div>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>
        )}
      />
    );
  }
}

export default App;
