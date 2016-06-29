// Apply styling
require('../styles/app.scss');

var ko = require('knockout');
window.ko = ko;  // Could be added in webpack config file


// Data binding
var viewModel = {
	name:  ko.observable('John Doe'),
};
ko.applyBindings(viewModel);
window.viewModel = viewModel;

// ------------------------

console.log('App and viewModel is available in console');

module.exports = {name: 'i am an object'};
