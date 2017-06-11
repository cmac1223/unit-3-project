var articlesTemplate = require('./articles.html')
var articlesController = require('./articles.controller')

const articleComponent = {
    template: articlesTemplate,
    controller: articlesController
}

angular
    .module('trivia-trainer')
    .component('article', ArticleComponent);
