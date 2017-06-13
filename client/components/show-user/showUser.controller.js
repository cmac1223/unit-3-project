
ShowUserController.$inject = ['$state', '$stateParams', 'UsersService']

function ShowUserController($state, $stateParams, UsersService) {

    var vm = this;


    function initialize() {
        let userIdToShow = $stateParams.userId;

        UsersService.getSingleUserById(userIdToShow)
            .then(
            function success(response) {
                vm.userEntry = response.data;
                console.log(vm.userEntry);

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


    vm.deleteUser = function (userIdToDeleteFromDatabase) {
        console.log('delete user was called')
        UsersService.deleteIdFromDatabase(userIdToDeleteFromDatabase)
            .then(
                function success(response) {

                    var userIndexToDelete = vm.userEntries.indexOf(userIdToDeleteFromDatabase);
                    // only delete the User from the Angular array if
                    // it was successfully deleted from the database
                    vm.userEntries.splice(userIndexToDelete, 1);
                },
                function failure(response) {
                    // DO NOT delete the User from the Angular array if the
                    // user is not successfully deleted from the database
                    console.log('Error deleting User with ID of ' + userIdToDeleteFromDatabase);
                })
    }
    
     vm.showStudyGuide = function (userIdForStudyGuide) {
        $state.go('studyGuideIndex', { userId: userIdForStudyGuide });
    }

}

module.exports = ShowUserController;