var articlesTemplate = require('./articles.html')
var articlesController = require('./articles.controller')

const ArticlesComponent = {
      template: articlesTemplate,
      controller: articlesController
}

angular
    .module('trivia-trainer')
    .component('articles', ArticlesComponent);
