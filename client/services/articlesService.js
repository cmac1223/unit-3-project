ArticlesService.$inject = ['$http'];

function ArticlesService($http) {

    const self = this;

    self.getArticles = function () {
        return $http.get('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions%7Cpageimages&rvprop=content&grnlimit=1')
            .then(function (response) {
                return response;
            });
    };

};

angular.module('trivia-trainer').service('ArticlesService', ArticlesService);
