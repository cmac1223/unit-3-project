QuestionService.$inject = ['$http']

function QuestionService($http) {
    var self = this;

    self.getAllQuestionsByStudyGuideId = function (userIdForQuestion, studyGuideId) {

        return $http.get('/users/' + userIdForQuestion + '/studyGuide/' + studyGuideId + '/questions')
            .then(function (response) {
                console.log("eweweweweweewewewewewewewew", response);
                return response;
            });
    }
    self.addNewQuestion = function (userIdForStudyGuide, studyGuideId, newStudyGuide) {
        console.log('youre in the newQuestion Service');
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/' + studyGuideId + '/questions', newStudyGuide);
    }

}

angular
    .module('trivia-trainer')
    .service('QuestionService', QuestionService);
