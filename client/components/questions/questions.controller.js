QuestionsController.$inject = ['$http', '$state', '$stateParams', 'QuestionService', '$scope']
//inject the required parameters and name them below
function QuestionsController($http, $state, $stateParams, QuestionService, $scope) {

    var vm = this;
    vm.newQuestion = {};
    var userIdForQuestion = $stateParams.userId;
    var studyGuideId = $stateParams.studyGuideId;

//initialize function to run code when the page loads
    function initialize() {

        getAllQuestionsByStudyGuideId();
    }

    initialize();
  //finds all questions from the array for use in the html page  
    function getAllQuestionsByStudyGuideId() {
        QuestionService.getAllQuestionsByStudyGuideId(userIdForQuestion, studyGuideId)
            .then(
            function success(response) {
                // if the call is successful, return the list of study guides
                vm.questionList = response.data.studyGuideQuestions;
            },
            function failure(response) {
                console.log('Error retrieving User Entries from database!');
            });
    }
//Adds a new question
    vm.addNewQuestion = function () {

        // this function can be used to clear the shows form
        //resets the form after a new question was entered
        function resetForm() {
            vm.newQuestion = null;
            vm.newAnswer = null;
            vm.newTopic = null;
        }
       

        // Make an ajax call to save the new User to the database:
        QuestionService.addNewQuestion(userIdForQuestion, studyGuideId, vm.newQuestion)
            .then(
            function success(response) {
                // only push to the userEntries array if the ajax call is successful
                const newQuestion = response.data;
//resets the page in order to show the new question
                getAllQuestionsByStudyGuideId()
                resetForm()


            },
            function failure(response) {

                console.log('Error saving new Question to database!');
            });
    };
    //delete the question
        vm.deleteQuestionFromDatabase = function (questionToDelete) {
            console.log("button pressed")
            let userIdToDeleteFrom = $stateParams.userId;
            let studyGuideIdToDeleteFrom = $stateParams.studyGuideId;
            QuestionService.deleteQuestionFromDatabase(userIdToDeleteFrom, studyGuideIdToDeleteFrom, questionToDelete)
                .then(
                function success(response) {
                    console.log('question deleted from database!');
                     getAllQuestionsByStudyGuideId()
                },
                function failure(response) {
                    console.log('this is a failure');
                })
        }
}

module.exports = QuestionsController;

