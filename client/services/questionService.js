QuestionService.$inject = ['$http']

function QuestionService($http) {
    var self = this;
//makes the http calls for questions
    self.getAllQuestionsByStudyGuideId = function (userIdForQuestion, studyGuideId) {

        return $http.get('/users/' + userIdForQuestion + '/studyGuide/' + studyGuideId + '/questions')
            .then(function (response) {
                return response;
            });
    }
    self.addNewQuestion = function (userIdForStudyGuide, studyGuideId, newStudyGuide) {
        console.log('youre in the newQuestion Service');
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/' + studyGuideId + '/questions', newStudyGuide);
    }

    self.deleteQuestionFromDatabase = function (userIdToDeleteFrom, studyGuideIdToDeleteFrom, questionToDelete) {
            return $http.delete('users/' + userIdToDeleteFrom + '/studyGuide/' + studyGuideIdToDeleteFrom + '/questions/' + questionToDelete);
        }
}


angular
    .module('trivia-trainer')
    .service('QuestionService', QuestionService);
