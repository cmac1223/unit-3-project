var showUserTemplate = require('./showUser.html')
var showUserController = require('./showUser.controller')

const ShowUserComponent = {
    template: showUserTemplate,
    controller: showUserController
}

angular
    .module('trivia-trainer')
    .component('showUser', ShowUserComponent);