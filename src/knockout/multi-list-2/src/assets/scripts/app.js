'use strict';

import styles from '../styles/app.scss'; // Apply styling

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback /*, initialValue*/ ) {
        'use strict';
        if (this === null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this),
            len = t.length >>> 0,
            k = 0,
            value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

    Array.prototype.map = function(callback, thisArg) {

        var T, A, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the |this| 
        //    value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal 
        //    method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let A be a new array created as if by the expression new Array(len) 
        //    where Array is the standard built-in constructor with that name and 
        //    len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while (k < len) {

            var kValue, mappedValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal 
            //    method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal 
                //    method of O with argument Pk.
                kValue = O[k];

                // ii. Let mappedValue be the result of calling the Call internal 
                //     method of callback with T as the this value and argument 
                //     list containing kValue, k, and O.
                mappedValue = callback.call(T, kValue, k, O);

                // iii. Call the DefineOwnProperty internal method of A with arguments
                // Pk, Property Descriptor
                // { Value: mappedValue,
                //   Writable: true,
                //   Enumerable: true,
                //   Configurable: true },
                // and false.

                // In browsers that support Object.defineProperty, use the following:
                // Object.defineProperty(A, k, {
                //   value: mappedValue,
                //   writable: true,
                //   enumerable: true,
                //   configurable: true
                // });

                // For best browser support, use the following:
                A[k] = mappedValue;
            }
            // d. Increase k by 1.
            k++;
        }

        // 9. return A
        return A;
    };
}

var log = console.log.bind(console);

function applyCollapsibleToggles() {
    $('.sfs-js-ships-work-history__toggle').each(function(index, element) {
        var $button = $(element),
            $ships = $button.closest('.sfs-js-ships-work-history'),
            $collapsible = $ships.find('.sfs-js-ships-work-history__content').first();

        // init
        $collapsible.slideToggle(0);
        $button.toggleClass('sfs-show');

        // event binding
        $button.click(function(event) {
            $collapsible.slideToggle(200);
            $button.toggleClass('sfs-show');
        });
    });
}

function ViewModel(data) {

    function durationFormatter(duration, labels) {
        var days = duration.days,
            months = duration.months,
            dayLabel = days > 1 ? labels.dayPluralLabel : labels.dayLabel,
            monthLabel = months > 1 ? labels.monthPluralLabel : labels.monthLabel;

        if (days === 0 && months === 0)
            return labels.noneDurationLabel;
        else if (days === 0)
            return months + ' ' + monthLabel;
        else if (months === 0)
            return days + ' ' + dayLabel;
        return months + ' ' + monthLabel + ' ' + days + ' ' + dayLabel + ' ';
    }

    function getDays(duration) {
        return duration.months * 30 + duration.days;
    }

    function getDurationByDays(byDays) {
        var days = byDays % 30;
        var months = (byDays / 30) | 0;
        return {
            days: days,
            months: months
        };
    }

    var self = this;

    var options = {
        labels: {
            noneDurationLabel: data.noneDurationLabel,
            dayLabel: data.dayLabel,
            dayPluralLabel: data.dayPluralLabel,
            monthLabel: data.monthLabel,
            monthPluralLabel: data.monthPluralLabel,
        },
        durationFormatter: durationFormatter,
        getDays: getDays,
        getDurationByDays: getDurationByDays,
    };

    self.roles = ko.observableArray([]);
    self.title = data.title;
    self.afterRender = data.afterRender || function() {};

    log(self.afterRender);

    if (data.roles) {
        self.roles(data.roles.map(function(item) {
            return new Role(item, options);
        }));
    }

    self.getTotal = ko.computed(function() {
        var days = 0,
            roles = ko.unwrap(self.roles);

        if (roles.length) {
            days = roles.reduce(function(total, current) {
                return ko.unwrap(current.isIncluded) ? (total + current.getDaysTotal()) : total;
            }, 0);
        }


        var duration = options.getDurationByDays(days);

        return options.durationFormatter({ days: duration.days, months: duration.months }, options.labels);
    });

    self.getLastFiveYears = ko.computed(function() {
        var days = 0,
            roles = ko.unwrap(self.roles);

        if (roles.length) {
            days = roles.reduce(function(total, current) {
                return ko.unwrap(current.isIncluded) ? total + current.getDaysLastFiveYears() : total;
            }, 0);
        }
        var duration = options.getDurationByDays(days);

        return options.durationFormatter({ days: duration.days, months: duration.months }, options.labels);
    });
}

function Role(data, options) {
    //debugger;
    var self = this;
    self.isIncluded = ko.observable(!!data.isIncluded);
    self.name = data.name || '';
    self.ships = ko.observableArray([]);

    if (data.ships) {
        var ships = data.ships.map(function(item) {
            return new Ship(item, options);
        });
        self.ships(ships);
    }

    self.shipCount = ko.pureComputed(function() {
        return ko.unwrap(self.ships).length;
    });

    self.getDaysTotal = ko.pureComputed(function() {
        var ships = ko.unwrap(self.ships);
        if (!ships.length) {
            return 0;
        }

        var total = ships.reduce(function(total, current) {
            return total + current.getDaysTotal();
        }, 0);
        return total;
    });
    self.getDaysLastFiveYears = ko.pureComputed(function() {
        var ships = ko.unwrap(self.ships);
        if (!ships.length) {
            return 0;
        }
        var total = ships.reduce(function(total, current) {
            return total + current.getDaysLastFiveYears();
        }, 0);
        return total;
    });

    self.durationLastFiveYearsFormatted = ko.pureComputed(function() {
        var duration = options.getDurationByDays(self.getDaysLastFiveYears());
        return options.durationFormatter({ days: duration.days, months: duration.months }, options.labels);
    });
    self.durationTotalFormatted = ko.pureComputed(function() {
        var duration = options.getDurationByDays(self.getDaysTotal());
        return options.durationFormatter({ days: duration.days, months: duration.months }, options.labels);
    });
}

function Ship(data, options) {
    var self = this;

    self.isIncluded = ko.observable(!!data.isIncluded);
    self.name = data.name || '';
    self.tonnage = data.tonnage || 0;
    self.effect = data.effect || 0;
    self.durationLastFiveYears = { days: 0, months: 0 };
    self.durationTotal = { days: 0, months: 0 };

    if (data.durationTotal) {        
        self.durationTotal = options.getDurationByDays(data.durationTotal);
    }
    if (data.durationLastFiveYears) {        
        self.durationLastFiveYears = options.getDurationByDays(data.durationLastFiveYears);
    }

    self.getDaysTotal = ko.pureComputed(function() {
        if (ko.unwrap(self.isIncluded)) {
            return options.getDays(self.durationTotal);
        }
        return 0;
    });

    self.getDaysLastFiveYears = ko.pureComputed(function() {
        if (ko.unwrap(self.isIncluded)) {
            return options.getDays(self.durationLastFiveYears);
        }
        return 0;
    });

    self.durationTotalFormatted = ko.pureComputed(function() {
        var days = self.durationTotal.days,
            months = self.durationTotal.months;
        return options.durationFormatter({ days: days, months: months }, options.labels);
    });

    self.durationLastFiveYearsFormatted = ko.pureComputed(function() {
        var days = self.durationLastFiveYears.days,
            months = self.durationLastFiveYears.months;
        return options.durationFormatter({ days: days, months: months }, options.labels);
    });
}

var dataFromService = {
    title: 'Stillinger',
    noneDurationLabel: 'Ingen tid',
    dayLabel: 'dag',
    dayPluralLabel: 'dage',
    monthLabel: 'måned',
    monthPluralLabel: 'måneder',
    roles: [{
        name: 'Kaptajn',
        isIncluded: true,
        ships: [{
                name: 'Sea Hurricane',
                durationLastFiveYears: 63,
                durationTotal: 74,
                tonnage: 1,
                effect: 2000,
                isIncluded: true,
            },
            {
                name: 'Sea Hurricane',
                durationLastFiveYears: 63,
                durationTotal: 74,
                tonnage: 1,
                effect: 2000,
                isIncluded: true,
            },
        ],
    }, {
        name: 'Kaptajn',
        isIncluded: true,
        ships: [{
                name: 'Sea Hurricane',
                durationLastFiveYears: 63,
                durationTotal: 74,
                tonnage: 1,
                effect: 2000,
                isIncluded: true,
            },
            {
                name: 'Sea Hurricane',
                durationLastFiveYears: 63,
                durationTotal: 74,
                tonnage: 1,
                effect: 2000,
                isIncluded: true,
            },
        ],
    }, ]
};

dataFromService.afterRender = applyCollapsibleToggles;
var vm = new ViewModel(dataFromService);
ko.applyBindings(vm, document.getElementById('sfs-ship-page'));
window.vm = vm;