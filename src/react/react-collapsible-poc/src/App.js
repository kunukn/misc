import React, {Component} from 'react'; // eslint-disable-line
import PropTypes from 'prop-types'; // eslint-disable-line
import eases from 'eases';

// inspiration from
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
  //  boxState: TOGGLE.EXPANDED,
  };

  boxState = TOGGLE.EXPANDED;

  setBoxElement = element => {
    this.boxElement = element || null;
  };

  onToggle = () => {
    
    if (this.isAnimating) {
      log('isAnimating true');
      return;
    }

    if (this.boxState === TOGGLE.EXPANDED) {
      this.boxState = TOGGLE.COLLAPSING;
      this.boxHeight = this.boxElement.clientHeight;
      this.isAnimating = true;
      this.startAnimationTime = new Date().getTime();
      this.collapse();
    } else if (this.boxState === TOGGLE.COLLAPSED) {
      this.boxState = TOGGLE.EXPANDING;
      this.boxHeight = this.boxElement.clientHeight;
      this.isAnimating = true;
      this.startAnimationTime = new Date().getTime();
      this.expand();
    } else {
      log('error onToggle');
    }

 //   log(this.boxState);
 //   log(this.boxElement && this.boxElement.clientHeight);
//    log(eases[this.props.ease](0.3));

  };

  collapse = () => {
   
    if (!this.boxElement) {
      log('no boxElement');
      return;
    }

    const duration = parseInt(this.props.duration, 10);

    const now = new Date().getTime();
    const elapsedTime = Math.min(
      duration,
      now - this.startAnimationTime,
    );
    const progress = 1 - eases[this.props.ease](elapsedTime / duration);
    let currentHeightValue = Math.round(this.boxHeight * progress);

    this.setState({
      heightValue: currentHeightValue,
    });

    log(currentHeightValue);

    if (elapsedTime < duration) {
      this.timeout = setTimeout(this.collapse, 160);
    } else {
      log('done');
    }
  }

  expand = () => {
   
    if (!this.boxElement) {
      log('no boxElement');
      return;
    }
    //const duration = parseInt(this.props.duration, 10);
    
  }

  componentWillReceiveProps(nextProps) {
    //  const duration = parseInt(this.props.duration, 10);
    //  if (parseInt(nextProps.duration, 10) === duration) {
    //   return;
    // }

    //this.setState({
    //   previousValue: this.state.displayValue,
    // });
    //   this.startAnimationTime = new Date().getTime();
    //   this.updateNumber();
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
