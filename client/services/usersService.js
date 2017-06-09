UsersService.$inject = ['$http']

function UsersService($http) {
    var self = this;
    
    self.getAllUsers = function () {
        return $http.get('/');
    }

    self.addNewUser = function (newUser) {
        return $http.post('/', newUser);
    }

}

angular
    .module('trivia-trainer')
    .service('UsersService', UsersService);