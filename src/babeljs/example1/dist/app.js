'use strict';

function f(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

    return x + y;
}

var a = f(3) == 15;

window.babel = 'working!';