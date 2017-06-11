StudyGuidesController.$inject = ['$http', '$state', '$stateParams', 'StudyGuidesService', '$scope'];

function StudyGuidesController($http, $state, $stateParams, StudyGuidesService, $scope) {

    let vm = this;


    /**
     * We will run this function the first time we load our component.
     *
     * We can use an 'initialize' function to pre-load some data
     * from the database.
     */
    function initialize() {
        getAllStudyGuides();
    }
    initialize();

    // this function grabs all of the StudyGuides from the database
    // via an AJAX call
    function getAllStudyGuides() {
        StudyGuidesService.getAllStudyGuides()
            .then(
            function success(response) {
                // if the call is successful, return the list of study guides
                vm.studyGuideEntries = response.data;
            },
            function failure(response) {
                console.log('Error retrieving Study Guide Entries from database!');
            }
            );
    }

    // This function handles our form submission.
    vm.addNewStudyGuide = function () {

        // the new StudyGuide object will be created by binding to the form inputs
        // const newStudyGuide = {
        //     first_name: vm.newStudyGuideFirstName,
        //     last_name: vm.newStudyGuideLastName,
        //     studyGuide: vm.newStudyGuideStudyGuidename,
        //     email: vm.newStudyGuideEmail
        // };

        var Study_GuideSchema = new Schema({
            study_guide: [{
                title: vm.newStudyGuideTitle,
                questions: [{
                    question: String,
                    answer: String,
                    topic: String,
                    difficulty: String,
                }]
            }]

        });

        // this function can be used to clear the shows form
        function resetForm() {
            vm.newStudyGuide = '';

        }

        // Make an ajax call to save the new StudyGuide to the database:
        StudyGuidesService.addNewStudyGuide(newStudyGuide)
            .then(
            function success(response) {
                // only push to the StudyGuideEntries array if the ajax call is successful
                const newStudyGuide = response.data;
                vm.userEntries.push(newStudyGuide);
                // then reset the form so we can submit more study guide
                resetForm();

            },
            function failure(response) {
                // if the http call is not successful, log the error
                // DO NOT clear the form
                // DO NOT push the new object to the array
                console.log('Error saving new Study Guide to database!');
            });
    };


    vm.showStudyGuide = function (userId) {
        $state.go('study_guide/:userId', { userId: userId });
    }


}

module.exports = StudyGuidesController;