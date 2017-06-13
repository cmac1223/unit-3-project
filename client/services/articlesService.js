ArticlesService.$inject = ['$http'];

function ArticlesService($http) {

    const self = this;

    self.getArticles = function () {
        return $http.get("http://www.google.com/ig/api?weather=")

            .then(function (response) {
                return response;
            });
    };
};

angular.module('trivia-trainer').service('ArticlesService', ArticlesService);


