StudyGuidesController.$inject = ['$http', '$state', '$stateParams', 'StudyGuidesService', '$scope'];

function StudyGuidesController($http, $state, $stateParams, StudyGuidesService, $scope) {

    let vm = this;
    let userIdForStudyGuide = $stateParams.userId;

    vm.userId = $stateParams.userId;

// what runs when the page loads
    function initialize() {
        getAllStudyGuidesByUserId();

    }
    initialize();
//finds the study guides to render on the page
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
//new study guide
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

                const newStudyGuide = response.data;
//after a new SG is aded re-populate the page
                getAllStudyGuidesByUserId()

            },
            function failure(response) {

                console.log('Error saving new Study Guide to database!');
            });
    };
    //function that opens the study guide
    vm.openStudyGuide = function (studyGuideId) {
        $state.go('showStudyGuide',
            {
                userId: userIdForStudyGuide,
                studyGuideId: studyGuideId
            });
    }
    //delete the study guide
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