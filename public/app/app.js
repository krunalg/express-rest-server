//Basic Angular Application
(function (ng) {
    'use strict';
    ng.module('codebyte', ['ui.router']);
    ng.element(document).ready(function () {
        //angular application bootstraping
        ng.bootstrap(document, ['codebyte']);
        console.info("application bootstrap");
    });
    ng.module('codebyte').config(configFunc);
    configFunc.$inject = ['$stateProvider', '$locationProvider'];
    ng.module('codebyte').run(function () {
        //application run phase
        console.info("application run");
    });
    function configFunc($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        var homeState = {
            name: 'home',
            url: '/',
            template: '<h3>Home</h3>'
        };
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>Hello World!</h3>'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(helloState);
        console.info("application config phase");
    }
})(angular);