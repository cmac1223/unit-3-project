ArticleService.$inject = ['$http']

function ArticlesService($http) {
    var self = this;

    self.getAllArticles = function () {
        return $http.get('/articles');
    }

    self.getSingleArticleById = function (articleIdToShow) {
        return $http.get('articalss/' + articleIdToShow)
    }

}

angular
    .module('trivia-trainer')
    .service('ArticlesService', ArticlesService);
