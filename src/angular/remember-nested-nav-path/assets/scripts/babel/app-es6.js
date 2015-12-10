window.app = ((ng) => {

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

    let app = angular.module('app', []);

    app.factory("storage", () => {
        return {
            path: {
                root: templates.home,
                a: ['',''], // subpage, subsubpage
                b: ['',''],
                c: ['','']
            }
        };
    });

    app.controller('mainController', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = 'this is root';
            $scope.templates = templates;
            $scope.page = storage.path.root; //load from storage
            
            $scope.pageClick = (value) => {
                $scope.page = value; //update view
                storage.path.root = value; //update storage
            };
        }])
        .controller('A_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is a";
            $scope.templates = templates;
            $scope.subPage = storage.path.a[0]; //load from storage            
            
            $scope.subPageClick = (value) => {
                $scope.subPage = value; //update view
                storage.path.a[0] = value; //update storage
            };
        }])
        .controller('AA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is aa";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.a[1];            
            
            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.a[1] = value;
            };
        }])
        .controller('AB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ab";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.a[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.a[1] = value;
            };
        }])
        .controller('AC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ac";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.a[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.a[1] = value;
            };
        }])
        .controller('B_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is b";
            $scope.templates = templates;
            $scope.subPage = storage.path.b[0];            
            
            $scope.subPageClick = (value) => {
                $scope.subPage = value;
                storage.path.b[0] = value;
            };
        }])
        .controller('BA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ba";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.b[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.b[1] = value;
            };
        }])
        .controller('BB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is bb";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.b[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.b[1] = value;
            };
        }])
        .controller('BC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is bc";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.b[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.b[1] = value;
            };
        }])

        .controller('C_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is c";
            $scope.templates = templates;
            $scope.subPage = storage.path.c[0];            
            
            $scope.subPageClick = (value) => {
                $scope.subPage = value;
                storage.path.c[0] = value;
            };
        }])
        .controller('CA_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is ca";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.c[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.c[1] = value;
            };

           }])
        .controller('CB_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is cb";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.c[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.c[1] = value;
            };

        }])
        .controller('CC_Controller', ['$scope', 'storage', ($scope, storage) => {
            $scope.message = "this is cc";
            $scope.templates = templates;
            $scope.subSubPage = storage.path.c[1];

            $scope.subSubPageClick = (value) => {
                $scope.subSubPage = value;
                storage.path.c[1] = value;
            };

        }]);


    // Document ready
    ng(document).ready(function() {

    });

    return app;

})(angular.element, undefined);
