
ShowUserController.$inject = ['$state', '$stateParams', 'UsersService']

function ShowUserController($state, $stateParams, UsersService) {

    var vm = this;


    function initialize() {
        let userIdToShow = $stateParams.userId;

        UsersService.getSingleUserById(userIdToShow)
            .then(
            function success(response) {
                vm.userEntry = response.data;

            },
            function failure(response) {
                console.log('Failed to retrieve information for User with ID of ' + userIdToShow)
            }
            )
    }
    initialize();

    vm.updateUserInformation = function () {
        UsersService.updateSingleUser(vm.userEntry)
            .then(
            function success(response) {
            },
            function failure(response) {
                console.log('Failed to updated user with ID of ' + userEntryId);
            }
            )
    }
}

module.exports = ShowUserController;
