'use strict';

import styles from '../styles/app.scss'; // Apply styling

var nst = require('native-slide-toggle');

const log = console.log.bind(console);

class Job {
    constructor(data) {
        var self = this;
        self.company = data.company;
        self.durationTotal = data.durationTotal;
        self.title = ko.observable('');
    }
}

class Role {
    constructor(data) {
        var self = this;
        self.title = data.title;
        self.durationTotal = data.durationTotal;
        self.durationFiveYears = data.durationFiveYears;
        self.jobs = ko.observableArray([]);

        if (data.jobs) {
            data.jobs.forEach(function(item) {
                self.jobs.push(new Job(item));
            });
        }
    }
}

class ViewModel {
    constructor(data) {
        var self = this;

        self.isDebug = ko.observable(data.isDebug),
            self.title = data.title;
        self.roles = ko.observableArray([]);

        if (data.roles) {
            data.roles.forEach(function(item) {
                self.roles.push(new Role(item));
            });
        }
    }
}


var viewModel = new ViewModel({
    isDebug: false,
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
        },
        {
            title: 'Developer',
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
        }
    ],
});
ko.applyBindings(viewModel, document.getElementById('app'));
window.vm = window.viewModel = viewModel;

setTimeout(function() {
    nst.initAll({
        log: 'nst - manual init all'
    });
}, 1000);

log('App running');

export class App {
    constructor() {}
}