// https://egghead.io/series/getting-started-with-redux

'use strict';

var counter = function counter(state, action) {
  if (state === undefined) state = 0;

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

var Counter = function Counter(_ref) {
  var value = _ref.value;
  var onIncrement = _ref.onIncrement;
  var onDecrement = _ref.onDecrement;
  return React.createElement(
    'div',
    { className: 'redux' },
    React.createElement(
      'h1',
      null,
      value
    ),
    React.createElement(
      'button',
      { onClick: onIncrement },
      '+'
    ),
    React.createElement(
      'button',
      { onClick: onDecrement },
      '-'
    )
  );
};

var render = function render() {
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: function () {
      return store.dispatch({ type: 'INCREMENT' });
    },
    onDecrement: function () {
      return store.dispatch({ type: 'DECREMENT' });
    }
  }), document.querySelector('#app'));
};

store.subscribe(render);
render();