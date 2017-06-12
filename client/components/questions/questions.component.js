var questionsTemplate = require('./questions.html')
var questionsController = require('./questions.controller')

const QuestionsComponent = {
    template: questionsTemplate,
    controller: questionsController
}

angular
    .module('trivia-trainer')
    .component('questions', QuestionsComponent);