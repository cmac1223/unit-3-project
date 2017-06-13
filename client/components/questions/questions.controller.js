QuestionsController.$inject = ['$http', '$state', '$stateParams', 'QuestionService', '$scope']

function QuestionsController($http, $state, $stateParams, QuestionService, $scope) {

    var vm = this;
    vm.newQuestion = {};
    var userIdForQuestion = $stateParams.userId;
    var studyGuideId = $stateParams.studyGuideId;

    function initialize() {

        getAllQuestionsByStudyGuideId();

    }

    initialize();
    function getAllQuestionsByStudyGuideId() {
        QuestionService.getAllQuestionsByStudyGuideId(userIdForQuestion, studyGuideId)
            .then(
            function success(response) {
                // if the call is successful, return the list of study guides
                vm.questionList = response.data.studyGuideQuestions;
                console.log('dvhdfhdfhdfjdhfjdhfjd',vm.questionList);
            },
            function failure(response) {
                console.log('Error retrieving User Entries from database!');
            });
    }

    vm.addNewQuestion = function () {

        console.log(vm.newQuestion);
        // this function can be used to clear the shows form
        function resetForm() {
            vm.newQuestion = '';
        }

        // Make an ajax call to save the new User to the database:
        QuestionService.addNewQuestion(userIdForQuestion, studyGuideId, vm.newQuestion)
            .then(
            function success(response) {
                // only push to the userEntries array if the ajax call is successful
                const newQuestion = response.data;
                // vm.userEntries.push(newQuestion;
                // then reset the form so we can submit more users
                getAllQuestionsByStudyGuideId()

            },
            function failure(response) {
                // if the http call is not successful, log the error
                // DO NOT clear the form
                // DO NOT push the new object to the array
                console.log('Error saving new Study Guide to database!');
            });
    };

}

module.exports = QuestionsController;

