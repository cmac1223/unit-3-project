QuestionService.$inject = ['$http']

function QuestionService($http) {
    var self = this;

    // self.getAllStudyGuidesByUserId = function (userIdForStudyGuide) {
    //     return $http.get('/users/'+userIdForStudyGuide)
    //      .then(function (response) {
    //             return response;
    //         });
    // };
//    /users/:userId/studyGuide/:studyGuideId/questions'

    self.addNewQuestion = function (userIdForStudyGuide, studyGuideId, newStudyGuide) {
        console.log('youre in the newQuestion Service');
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/' + studyGuideId + '/questions', newStudyGuide);
    }
    // self.getSingleStudyGuideById = function (studyGuideIdToShow) {
    //     return $http.get('users/studyGuides/' + studyGuideIdToShow)
    // }

    // self.updateSingleStudyGuide = function (studyGuideToUpdate) {
    //     return $http.patch('studyGuides/', studyGuideToUpdate);
    // }

    // self.deleteIdFromDatabase = function (studyGuideIdToDeleteFromDatabase) {
    //     return $http.delete('studyGuides/' + studyGuideIdToDeleteFromDatabase);
    // }
}

angular
    .module('trivia-trainer')
    .service('QuestionService', QuestionService);
