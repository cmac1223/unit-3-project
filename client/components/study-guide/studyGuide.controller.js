StudyGuidesController.$inject = ['$http', '$state', '$stateParams', 'StudyGuidesService', '$scope'];

function StudyGuidesController($http, $state, $stateParams, StudyGuidesService, $scope) {

    let vm = this;
    let userIdForStudyGuide = $stateParams.userId;

    vm.userId = $stateParams.userId;

    function initialize() {
        getAllStudyGuidesByUserId();

    }
    initialize();

    function getAllStudyGuidesByUserId() {
        StudyGuidesService.getAllStudyGuidesByUserId(userIdForStudyGuide)
            .then(
            function success(response) {
                // if the call is successful, return the list of study guides
                vm.studyGuideList = response.data;
            },
            function failure(response) {
                console.log('Error retrieving User Entries from database!');
            });
    }

    vm.addNewStudyGuide = function () {

        // the new User object will be created by binding to the form inputs
        const newStudyGuide = {
            title: vm.newStudyGuideTitle,
        };

        // this function can be used to clear the shows form
        function resetForm() {
            vm.newStudyGuide = '';

        }
        // Make an ajax call to save the new User to the database:
        StudyGuidesService.addNewStudyGuide(userIdForStudyGuide, newStudyGuide)
            .then(
            function success(response) {
                // only push to the userEntries array if the ajax call is successful
                const newStudyGuide = response.data;
                // vm.userEntries.push(newStudyGuide);
                // then reset the form so we can submit more users
                 getAllStudyGuidesByUserId()

            },
            function failure(response) {
                // if the http call is not successful, log the error
                // DO NOT clear the form
                // DO NOT push the new object to the array
                console.log('Error saving new Study Guide to database!');
            });
    };

    vm.openStudyGuide = function (studyGuideId) {
        $state.go('showStudyGuide',
            {
                userId: userIdForStudyGuide,
                studyGuideId: studyGuideId
            });
    }

     vm.deleteStudyGuideFromDatabase = function (studyGuideToDelete) {
        let userIdToDeleteFrom = $stateParams.userId;
        StudyGuidesService.deleteStudyGuideFromDatabase(userIdToDeleteFrom, studyGuideToDelete)
            .then(
            function success(response) {
                getAllStudyGuidesByUserId()
                console.log('study guide deleted from database!');

            },
            function failure(response) {
                console.log('this is a failure');
            })
    }
}

module.exports = StudyGuidesController;