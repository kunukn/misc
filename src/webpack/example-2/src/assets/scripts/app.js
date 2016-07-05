require('../styles/app.scss'); // Apply styling

window.log = console.log.bind(console);
window.debug = console.debug.bind(console);

var ko = require('./library/knockout-extra'); // Update knockout module
window.ko = ko; // Usage in browser console to debug viewModel: ko.toJS(vm)

var viewModel = {
    isDebugMode: ko.observable(true),
    name: ko.observable('app')
};
ko.applyBindings(viewModel);
window.viewModel = window.vm = viewModel;

window.app = {
    name: 'app',
};

log('app and viewModel is available in console');

module.exports = 'app';
