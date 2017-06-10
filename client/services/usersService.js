UsersService.$inject = ['$http']

function UsersService($http) {
    var self = this;
    
    self.getAllUsers = function () {
        return $http.get('/users');
    }

    self.addNewUser = function (newUser) {
        return $http.post('/users', newUser);
    }

    self.getSingleUserById = function (userId) {
        return $http.get('users/' + userId)
    }

}

angular
    .module('unit-3-project')
    .service('UsersService', UsersService);