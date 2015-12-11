'use strict';

window.app = (function (ng) {

    var templates = {
        home: 'templates/home.html',
        a: {
            index: 'templates/a.html',
            aa: 'templates/aa.html',
            ab: 'templates/ab.html',
            ac: 'templates/ac.html',
            aaa: 'templates/aaa.html',
            aab: 'templates/aab.html',
            aac: 'templates/aac.html',
            aba: 'templates/aba.html',
            abb: 'templates/abb.html',
            abc: 'templates/abc.html',
            aca: 'templates/aca.html',
            acb: 'templates/acb.html',
            acc: 'templates/acc.html'
        },
        b: {
            index: 'templates/b.html',
            ba: 'templates/ba.html',
            bb: 'templates/bb.html',
            bc: 'templates/bc.html',
            baa: 'templates/baa.html',
            bab: 'templates/bab.html',
            bac: 'templates/bac.html',
            bba: 'templates/bba.html',
            bbb: 'templates/bbb.html',
            bbc: 'templates/bbc.html',
            bca: 'templates/bca.html',
            bcb: 'templates/bcb.html',
            bcc: 'templates/bcc.html'
        },
        c: {
            index: 'templates/c.html',
            ca: 'templates/ca.html',
            cb: 'templates/cb.html',
            cc: 'templates/cc.html',
            caa: 'templates/caa.html',
            cab: 'templates/cab.html',
            cac: 'templates/cac.html',
            cba: 'templates/cba.html',
            cbb: 'templates/cbb.html',
            cbc: 'templates/cbc.html',
            cca: 'templates/cca.html',
            ccb: 'templates/ccb.html',
            ccc: 'templates/ccc.html'
        }
    };

    var app = angular.module('app', []);

    var buildNavigation = function buildNavigation() {
        var navigation = [];
        navigation['root'] = templates.home;
        return navigation;
    };

    app.factory("storage", function () {
        return {
            navigation: buildNavigation()
        };
    });

    app.controller('mainController', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = 'this is root';
        $scope.templates = templates;
        $scope.page = storage.navigation['root']; //load from storage

        $scope.pageClick = function (value) {
            $scope.page = value; //update view
            storage.navigation['root'] = value; //update storage
        };
    }]).controller('A_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is a";
        $scope.templates = templates;
        $scope.subPage = storage.navigation['a']; //load from storage           

        $scope.subPageClick = function (value) {
            $scope.subPage = value; //update view               
            storage.navigation['a'] = value;
        };
    }]).controller('AA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is aa";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['aa'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['aa'] = value;
        };
    }]).controller('AB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ab";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['ab'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['ab'] = value;
        };
    }]).controller('AC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ac";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['ac'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['ac'] = value;
        };
    }]).controller('B_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is b";
        $scope.templates = templates;
        $scope.subPage = storage.navigation['b'];

        $scope.subPageClick = function (value) {
            $scope.subPage = value;
            storage.navigation['b'] = value;
        };
    }]).controller('BA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ba";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['ba'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['ba'] = value;
        };
    }]).controller('BB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is bb";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['bb'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['bb'] = value;
        };
    }]).controller('BC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is bc";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['bc'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['bc'] = value;
        };
    }]).controller('C_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is c";
        $scope.templates = templates;
        $scope.subPage = storage.navigation['c'];

        $scope.subPageClick = function (value) {
            $scope.subPage = value;
            storage.navigation['c'] = value;
        };
    }]).controller('CA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ca";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['ca'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['ca'] = value;
        };
    }]).controller('CB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is cb";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['cb'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['cb'] = value;
        };
    }]).controller('CC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is cc";
        $scope.templates = templates;
        $scope.subSubPage = storage.navigation['cc'];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.navigation['cc'] = value;
        };
    }]);

    // Document ready
    ng(document).ready(function () {});

    return app;
})(angular.element, undefined);