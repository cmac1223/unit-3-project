
UsersController.$inject = ['$http', '$state', '$stateParams', 'UsersService', '$scope'];

function UsersController($http, $state, $stateParams, UsersService, $scope) {

    let vm = this;


    /**
     * We will run this function the first time we load our component.
     *
     * We can use an 'initialize' function to pre-load some data
     * from the database.
     */
    function initialize() {
        getAllUsers();
    }
    initialize();

    // this function grabs all of the users from the database
    // via an AJAX call
    function getAllUsers() {
        UsersService.getAllUsers()
            .then(
            function success(response) {
                // if the call is successful, return the list of users
                vm.userEntries = response.data;
            },
            function failure(response) {
                console.log('Error retrieving User Entries from database!');
            }
            );
    }

    // This function handles our form submission.
    vm.addNewUser = function () {

        // the new User object will be created by binding to the form inputs
        const newUser = {
            first_name: vm.newUserFirstName,
            last_name: vm.newUserLastName,
            username: vm.newUserUsername,
            email: vm.newUserEmail
        };

            // this function can be used to clear the shows form
    function resetForm() {
        vm.newUser = '';

    }

        // Make an ajax call to save the new User to the database:
        UsersService.addNewUser(newUser)
            .then(
            function success(response) {
                // only push to the userEntries array if the ajax call is successful
                const newUser = response.data;
                vm.userEntries.push(newUser);
                // then reset the form so we can submit more users
                resetForm();

            },
            function failure(response) {
                // if the http call is not successful, log the error
                // DO NOT clear the form
                // DO NOT push the new object to the array
                console.log('Error saving new User to database!');
            });
    };

    vm.showShow = function (showId) {
        $state.go('show_show/:showId', { showId: showId });
    }

    // this function can be used to clear the shows form
    function resetForm() {
        vm.newShowAmount = '';
        vm.newShowNote = '';
    }

    vm.totalShows = function () {
        if (vm.showEntries) {
            let totalShows = vm.showEntries.reduce(function (totalShows, showEntry) {
                return totalShows + showEntry.amount;
            }, 0)

            return totalShows;
        }
    }
};

module.exports = UsersController;
