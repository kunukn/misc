'use strict';

import styles from '../styles/app.scss'; // Apply styling

const log = console.log.bind(console);

class Country {
    constructor(data) {
        var self = this;
        // Data parsing
        self.name = data.name;
        self.population = data.population;
        self.isIncluded = ko.observable(true);
    }
}

class Continent {
    constructor(data) {
        var self = this;
        // Data parsing
        self.name = data.name;
        self.isIncluded = ko.observable(true);
        self.countries = ko.observableArray([]);
        if (data.countries) {
            self.countries(data.countries.map(item => new Country(item)));
        }
        // Functions
        self.getTotal = ko.pureComputed(_ => {
            const countries = ko.unwrap(self.countries);
            return countries.reduce((total, current) => {
                return ko.unwrap(current.isIncluded) ?
                    total + current.population :
                    total;
            }, 0);

        });
    }
}

class ViewModel {
    constructor(data) {
        var self = this;
        // Data parsing
        self.isDebug = ko.observable(data.isDebug);
        self.title = data.title;
        self.continents = ko.observableArray([]);
        if (data.continents) {
            self.continents(data.continents.map(item => new Continent(item)));
        }
        // Functions
        self.getTotal = ko.pureComputed(_ => {
            const continents = ko.unwrap(self.continents);
            return continents.reduce((total, current) => {
                return total + current.getTotal();
            }, 0);
        });
    }
}


const viewModel = new ViewModel({
    isDebug: true,
    title: 'Nested list',
    continents: [{
            name: 'Europe',
            countries: [{
                    name: 'England',
                    population: 100
                },
                {
                    name: 'Germany',
                    population: 200
                }
            ]
        },
        {
            name: 'Asia',
            countries: [{
                    name: 'China',
                    population: 2000
                },
                {
                    name: 'Japan',
                    population: 500
                }
            ]
        }
    ],
});
ko.applyBindings(viewModel, document.getElementById('app'));
window.vm = window.viewModel = viewModel;


export class App {
    constructor() {}
}