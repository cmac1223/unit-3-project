QuestionService.$inject = ['$http']

function QuestionService($http) {
    var self = this;

    self.getAllQuestionsByStudyGuideId = function (userIdForQuestion, studyGuideId) {
        console.log('question service');
        return $http.get('/users/' + userIdForQuestion + '/studyGuide/' + studyGuideId + '/questions')
            .then(function (response) {
                console.log("eweweweweweewewewewewewewew",response);
                return response;
            });
    }

    self.addNewQuestion = function (userIdForStudyGuide, studyGuideId, newStudyGuide) {
        console.log('youre in the newQuestion Service');
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/' + studyGuideId + '/questions', newStudyGuide);
    }
    // self.getSingleStudyGuideById = function (studyGuideIdToShow) {
    //     return $http.get('users/studyGuide/' + studyGuideIdToShow)
    // }

    // self.updateSingleStudyGuide = function (studyGuideToUpdate) {
    //     return $http.patch('studyGuide/', studyGuideToUpdate);
    // }

    // self.deleteIdFromDatabase = function (studyGuideIdToDeleteFromDatabase) {
    //     return $http.delete('studyGuide/' + studyGuideIdToDeleteFromDatabase);
    // }
}

angular
    .module('trivia-trainer')
    .service('QuestionService', QuestionService);
