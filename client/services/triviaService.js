//pulls a random trivia question and displays on the page
TriviaService.$inject = ['$http'];

function TriviaService($http) {

    const self = this;

    self.getTrivia = function () {
        return $http.get('http://jservice.io/api/random?count=1')
            .then(function (response) {
                return response;
            });
    };
};

angular.module('trivia-trainer').service('TriviaService', TriviaService);
