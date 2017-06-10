require('angular-ui-router');
require('angular-messages');
const angular = require('angular');

angular.module('unit-3-project', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            template: '<users></users>'
        })
        .state('show_user/:userId', {
            url: '/show_user/:userId',
            params: ['showId'],
            template: '<show-user></show-user>'
        });
        // .state('edit_show/:showId', {
        //     url: '/edit_show/:showId',
        //     params: [ 'showId' ],
        //     template: '<edit-show></edit-show>'
        // })
        // .state('expenses', {
        //     url: '/expenses',
        //     template: '<expenses></expenses>'
        // })
        // .state('show_expense/:expenseId', {
        //     url: '/show_expense/:expenseId',
        //     params: [ 'expenseId' ],
        //     template: '<show-expense></show-expense>'
        // })
        // .state('edit_expense/:expenseId', {
        //     url: '/edit_expense/:expenseId',
        //     params: [ 'expenseId' ],
        //     template: '<edit-expense></edit-expense>'
        // });

    $urlRouterProvider.otherwise('/');
}