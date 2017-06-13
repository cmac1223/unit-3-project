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
        .state('showUser', {
            url: '/users/:userId',
            params: ['showId'],
            template: '<show-user></show-user>'
        })
        .state('studyGuideIndex', {
            url: '/users/:userId/studyGuide',
            params: [ 'userId' ],
            template: '<study-guide></study-guide>'
        })
        .state('showStudyGuide', {
            url: '/users/:userId/studyGuide/:studyGuideId/questions',
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