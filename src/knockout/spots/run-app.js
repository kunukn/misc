var app =
    (function () {
    	var spots = ko.observableArray([
            { type: ko.observable('apple') },
            { type: ko.observable('orange') },
            { type: ko.observable('banana') },
		    { type: ko.observable('tomato') },
		    { type: ko.observable('silver') },
            { type: ko.observable('apple') },
            { type: ko.observable('orange') },
            { type: ko.observable('banana') },
            { type: ko.observable('tomato') },
            { type: ko.observable('silver') },
            { type: ko.observable('apple') },
            { type: ko.observable('orange') },
            { type: ko.observable('banana') },
            { type: ko.observable('tomato') },
            { type: ko.observable('silver') },
            { type: ko.observable('apple') },
            { type: ko.observable('orange') },
            { type: ko.observable('banana') },
            { type: ko.observable('tomato') },
            { type: ko.observable('silver') }
    	]);
    	var data = {
    		spots: spots
    	};
    	ko.applyBindings(data);
    	return data;
    })();
