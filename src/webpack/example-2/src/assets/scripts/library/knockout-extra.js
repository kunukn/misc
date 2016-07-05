var ko = require('knockout');

// http://knockoutjs.com/examples/animatedTransitions.html

if (!ko.bindingHandlers.fadeVisible) {
    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value));
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
        }
    };
    console.debug('knockout fadeVisible');
}

if (!ko.bindingHandlers.fadeHeight) {
    ko.bindingHandlers.fadeHeight = {
        init: function(element, valueAccessor) {
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value));
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).slideDown(120) : $(element).slideUp(120);
        }
    };
    console.debug('knockout fadeHeight');
}

// Update knockout
module.exports = ko;
