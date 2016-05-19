'use strict';

function appendTransform(defaults, transform) {
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return defaults.concat(transform);
}

export class GithubStatusService {
        
    _this;
    http;

    static $inject = ['$http'];    

    constructor($http) {   
        this.http =     $http;
        this._this = this;
    }
    
    getStatus () {
        return this.http({
            method: 'jsonp',
            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
            transformResponse: appendTransform(this.http.defaults.transformResponse, function(value) {
                return (value.status === 'good');
            })
        });
    }
}

angular.module('app.services').service('githubStatusService', GithubStatusService);
