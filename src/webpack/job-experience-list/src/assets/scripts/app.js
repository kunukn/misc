'use strict';

import styles from '../styles/app.scss'; // Apply styling

const log = console.log.bind(console);

function Job(data) {
    var self = this;
    self.title = ko.observable('');

}

function Role(data) {
    var self = this;
    self.jobs = ko.observableArray([]);

    // if (data.jobs) {
    //     data.jobs.forEach(function(item) {
    //         self.jobs.push(new Job(item));
    //     });
    // }
}

function ViewModel(data) {
    var self = this;
    self.title = data.title;
    self.roles = ko.observableArray([]);

    if (data.roles) {
        data.roles.forEach(function(item) {
            self.roles.push(new Role(item));
        });
    }

    log(self.roles());
}



var viewModel = new ViewModel({
    title: 'Positions',
    roles: [{
        title: 'Architect',
        durationTotal: '5 years 1 month',
        durationFiveYears: '2 years 1 month',
        jobs: [{
                company: 'ABC',
                durationTotal: '2 years 1 month'
            },
            {
                company: 'DBC',
                durationTotal: '1 years 1 month'
            }
        ]
    }],
});
ko.applyBindings(viewModel, document.getElementById('app'));
window.viewModel = viewModel;

log('App running');

export class App {
    constructor() {}
}