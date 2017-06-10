
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
    
    // vm.editUserEntry = function (userEntryId) {
    //     $state.go('edit_user/:userId', { userId: userEntryId });
    // }

    vm.updateUserInformation = function () {
        UsersService.updateSingleUser(
            vm.userToUpdate
        ).then(
            function success(response) {
                // redirect to the individual user page when successfully updated
                $state.go('show_user/:userId', { userId: vm.userToUpdate._id });
                
            },
            function failure(response) {
                console.log('Failed to updated user with ID of ' + userEntryId);
            }
        )
    }
}

module.exports = ShowUserController;
