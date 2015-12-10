'use strict';

window.app = (function (ng) {

    var appVersion = 1;

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
            baa: 'templates/aaa.html',
            bab: 'templates/aab.html',
            bac: 'templates/aac.html',
            bba: 'templates/aba.html',
            bbb: 'templates/abb.html',
            bbc: 'templates/abc.html',
            bca: 'templates/aca.html',
            bcb: 'templates/acb.html',
            bcc: 'templates/acc.html'
        },
        c: {
            index: 'templates/c.html',
            ca: 'templates/ca.html',
            cb: 'templates/cb.html',
            cc: 'templates/cc.html',
            caa: 'templates/aaa.html',
            cab: 'templates/aab.html',
            cac: 'templates/aac.html',
            cba: 'templates/aba.html',
            cbb: 'templates/abb.html',
            cbc: 'templates/abc.html',
            cca: 'templates/aca.html',
            ccb: 'templates/acb.html',
            ccc: 'templates/acc.html'
        }
    };

    var app = angular.module('app', []);

    app.factory("storage", function () {
        return {
            path: {
                root: templates.home,
                a: ['', '', ''], // subpage, subsubpage, subsubsubpage
                b: ['', '', ''],
                c: ['', '', '']
            }
        };
    });

    app.controller('mainController', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = 'this is root';
        $scope.templates = templates;
        $scope.page = storage.path.root;

        $scope.pageClick = function (value) {
            $scope.page = value;
            storage.path.root = value;
        };
    }]).controller('A_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is a";
        $scope.templates = templates;
        $scope.subPage = storage.path.a[0];

        $scope.subPageClick = function (value) {
            $scope.subPage = value;
            storage.path.a[0] = value;
        };
    }]).controller('AA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is aa";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.a[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.a[1] = value;
        };
    }]).controller('AB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ab";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.a[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.a[1] = value;
        };
    }]).controller('AC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ac";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.a[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.a[1] = value;
        };
    }]).controller('B_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is b";
        $scope.templates = templates;
        $scope.subPage = storage.path.b[0];

        $scope.subPageClick = function (value) {
            $scope.subPage = value;
            storage.path.b[0] = value;
        };
    }]).controller('BA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ba";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.b[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.b[1] = value;
        };
    }]).controller('BB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is bb";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.b[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.b[1] = value;
        };
    }]).controller('BC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is bc";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.b[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.b[1] = value;
        };
    }]).controller('C_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is c";
        $scope.templates = templates;
        $scope.subPage = storage.path.c[0];

        $scope.subPageClick = function (value) {
            $scope.subPage = value;
            storage.path.c[0] = value;
        };
    }]).controller('CA_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is ca";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.c[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.c[1] = value;
        };
    }]).controller('CB_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is cb";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.c[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.c[1] = value;
        };
    }]).controller('CC_Controller', ['$scope', 'storage', function ($scope, storage) {
        $scope.message = "this is cc";
        $scope.templates = templates;
        $scope.subSubPage = storage.path.c[1];

        $scope.subSubPageClick = function (value) {
            $scope.subSubPage = value;
            storage.path.c[1] = value;
        };
    }]);

    // Document ready
    ng(document).ready(function () {});

    return app;
})(angular.element, undefined);