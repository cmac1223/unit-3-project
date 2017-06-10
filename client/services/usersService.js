UsersService.$inject = ['$http']

function UsersService($http) {
    var self = this;
    
    self.getAllUsers = function () {
        return $http.get('/users');
    }

    self.addNewUser = function (newUser) {
        return $http.post('/users', newUser);
    }

    self.getSingleUserById = function (userIdToShow) {
        return $http.get('users/' + userIdToShow)
    }

    self.updateSingleUser = function (userToUpdate) {
        return $http.patch('users/', userToUpdate);
    }

}

angular
    .module('trivia-trainer')
    .service('UsersService', UsersService);