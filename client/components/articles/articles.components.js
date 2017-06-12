let articlesTemplate = require('./articles.html')
let articlesController = require('./articles.controller')

let ArticlesComponent = {
      template: articlesTemplate,
      controller: articlesController
}

angular
    .module('trivia-trainer')
    .component('articles', ArticlesComponent);
