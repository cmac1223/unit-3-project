QuestionsController.$inject = ['$http', '$state', '$stateParams', 'QuestionService', '$scope']

function QuestionsController($http, $state, $stateParams, QuestionService, $scope) {

    var vm = this;
    vm.newQuestion = {};
    var userIdForQuestion = $stateParams.userId;
    var studyGuideId = $stateParams.studyGuideId;

    function initialize() {
        console.log(studyGuideId);
        function getAllQuestionsByStudyGuideId() {
            StudyGuidesService.getAllQuestionsByStudyGuideId(userIdForQuestion, studyGuideId)
                .then(
                function success(response) {
                    // if the call is successful, return the list of study guides
                    vm.questionList = response.data;
                    console.log(vm.questionList);
                },
                function failure(response) {
                    console.log('Error retrieving User Entries from database!');
                });
        }
    }

    initialize();

    vm.addNewQuestion = function () {

        // the new User object will be created by binding to the form inputs
        // const newQuestion = {
        //     question: newQuestionQuestion,
        //     answer: newQuestionAnswer,
        //     topic: newQuestionTopic,
        //     difficulty: newQuestionDifficulty,
        // };
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
                resetForm();

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

