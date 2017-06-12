ArticlesService.$inject = ['$http'];

function ArticlesService($http) {

    const self = this;

    self.getArticles = function () {
        return $http.get("http://forismatic.com/en/39477220ce/")

            .then(function (response) {
                return response;
            });
    };

};

angular.module('trivia-trainer').service('ArticlesService', ArticlesService);
