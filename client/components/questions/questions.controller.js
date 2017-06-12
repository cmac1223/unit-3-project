QuestionsController.$inject = ['$state', '$stateParams', 'UsersService']

function QuestionsController($state, $stateParams, UsersService) {

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
}



module.exports = QuestionsController;