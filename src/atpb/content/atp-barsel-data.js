define([], function() {

	 var Task = function(header, teaser, footerText) {
            this.title = 'Dine opgaver';
            this.header = header;
            this.teaser = teaser;
            this.footerText = footerText;
        },
        Plan = function(header, teaser, footerText) {
            this.title = 'Din barselsplan';
            this.header = header;
            this.teaser = teaser;
            this.footerText = footerText;
        },
        Economy = function(header, teaser, footerText) {
            this.title = 'Din økonomi';
            this.header = header;
            this.teaser = teaser;
            this.footerText = footerText;
        },
        RemainingLeave = function(footerText) {
            this.title = 'Restorlov i uger';
            this.footerText = footerText;
        },
        Events = function(header, teaser, footerText) {
            this.title = 'Hændelser';
            this.header = header;
            this.teaser = teaser;
            this.footerText = footerText;
        },
        Information = function(header, teaser, footerText) {
            this.title = 'Grundoplysninger';
            this.header = header;
            this.teaser = teaser;
            this.footerText = footerText;
        };

	var personas = [];

    var mona = {
        name: 'mona',
        state: 'task-none',
        task: new Task('Tjek oplysninger', 'fra arbejdsgiver', 'Tjek her!'),
        plan: new Plan('Termin', 'd. 11.11.2015', 'Har du ændringer til din barselsplan?'),
        economy: new Economy('Du får løn', 'fra din arbejdsgiver', 'Se din udbetalingsplan'),
        remainingLeave: new RemainingLeave('Se restorlov for dine andre børn'),
        events: new Events('Modtaget fra', 'udbetaling Danmark', 'Se dine breve'),
        information: new Information('Om Dig', 'og din barsel', 'Se dine oplysninger')
    };

    var lisa = {
        name: 'lisa',
        state: 'task-todo',
        task: new Task('Tjek oplysninger', 'fra arbejdsgiver', 'Tjek her!'),
        plan: new Plan('Termin', 'd. 30.10.2015', 'Har du ændringer til din barselsplan?'),
        economy: new Economy('Du får løn', 'fra din arbejdsgiver', 'Se din udbetalingsplan'),
       	remainingLeave: new RemainingLeave('Se restorlov for dine andre børn'),
        events: new Events('Modtaget fra', 'udbetaling Danmark', 'Se dine breve'),
        information: new Information('Om Dig', 'og din barsel', 'Se dine oplysninger')
    };


    personas.push(mona);
    personas.push(lisa);

	return personas;
});