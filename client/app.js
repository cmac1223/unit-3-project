require('angular-ui-router');
require('angular-messages');
const angular = require('angular');

angular.module('trivia-trainer', ['ui.router', 'ngMessages']).config(uiRouterSetup);

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
        })
        .state('study_guide/:userId', {
            url: '/study_guide/:userId',
            params: [ 'userId' ],
            template: '<study-guide></study-guide>'
        })

        .state('study_guide/:userId/questions', {
            url: '/study_guide/:userId/questions',
            template: '<questions></questions>'
        })
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
         .state('trivia', {
            url: '/trivia',
            template: '<trivia></trivia>'
        })

    $urlRouterProvider.otherwise('/users');
}