window.app = ((ng) => {

    const appVersion = 1;

    const templates = {
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


    let app = angular.module('app', []);

    app.factory("storage", function() {
        return {
            page: templates.home,
            subPage: '',
            subSubPage: '',
            subSubSubPage: '',
            data: 'some data',
            path: {
                a: '',
                b: '',
                c: ''
            }
        };
    });

    app.controller('mainController', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = 'this is root';
            $scope.templates = templates;
            $scope.page = storage.page;
            
            $scope.pageClick = (value) => {
                $scope.page = value;
                console.log(value);
            };
        }])
        .controller('A_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is a";
            $scope.templates = templates;
            
            $scope.subPageClick = (value) => {
                $scope.subPage = value;
                console.log(value);
            };
        }])
        .controller('AA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is aa";
            $scope.templates = templates;            

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                console.log(value);
            };
        }])
        .controller('AB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ab";
            $scope.templates = templates;
            storage.subPage = templates.a.ab;
        }])
        .controller('AC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ac";
            $scope.templates = templates;
            storage.subPage = templates.a.ac;
        }])
        .controller('B_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is b";
            $scope.templates = templates;
            $scope.subPage = storage.subPage;

            $scope.subPageClick = (value) => {
                $scope.subPage = value;
                console.log(value);
            };
        }])
        .controller('BA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ba";
            $scope.templates = templates;
            storage.subPage = templates.b.ba;
        }])
        .controller('BB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is bb";
            $scope.templates = templates;
            storage.subPage = templates.b.bb;
        }])
        .controller('BC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is bc";
            $scope.templates = templates;
            storage.subPage = templates.b.bc;
        }])
        .controller('C_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is c";
            $scope.templates = templates;
            $scope.subPage = storage.subPage;

            $scope.subPageClick = (value) => {
                $scope.subPage = value;
                console.log(value);
            };
        }])
        .controller('CA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ca";
            $scope.templates = templates;
            storage.subPage = templates.c.ca;
        }])
        .controller('CB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is cb";
            $scope.templates = templates;
            storage.subPage = templates.c.cb;
        }])
        .controller('CC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is cc";
            $scope.templates = templates;
            storage.subPage = templates.c.cc;
        }]);


    // Document ready
    ng(document).ready(function() {

    });

    return app;

})(angular.element, undefined);
