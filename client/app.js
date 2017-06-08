const angular = require('angular');
require('angular-ui-router');

angular.module('trivia-trainer', ['ui.router'])
.config(uiRouterSetup);
// Set up your UI Router HERE

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

// function uiRouterSetup($stateProvider, $urlRouterProvider) {
//  	$stateProvider
// 		.state('home', {
// 			url: '/',
// 			template: '<home></home>'
// 		})
		// .state('quotes', {
		// 	url: '/quotes',
		// 	template: '<quotes></quotes>'
		// });
// 		.state('criminals', {
// 			url: '/criminals',
// 		//if components name is 2 words such as CriminalsShow
// 		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
// 			template: '<criminals></criminals>'
// 		})
// 		.state('criminalsNew', {
// 			url: '/criminals/new',
// 		//if components name is 2 words such as CriminalsShow
// 		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
// 			template: '<criminals-new></criminals-new>'
// 		})
// 		.state('criminalsShow', {
// 			url: '/criminals/:criminalId',
// 		//if components name is 2 words such as CriminalsShow
// 		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
// 			template: '<criminals-show></criminals-show>'
// 		});

	$urlRouterProvider.otherwise('/');
// }
