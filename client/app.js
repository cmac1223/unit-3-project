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
            params: ['userId'],
            template: '<study-guide></study-guide>'
        })
        .state('articles', {
            url: '/articles',
            template: '<articles></articles>'
        })
        .state('showStudyGuide', {
            url: '/users/:userId/studyGuide/:studyGuideId/questions',
            template: '<questions></questions>'
        })

        .state('trivia', {
            url: '/trivia',
            template: '<trivia></trivia>'
        })

    $urlRouterProvider.otherwise('/users');
}
