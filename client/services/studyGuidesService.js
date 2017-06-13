StudyGuidesService.$inject = ['$http']
//makes the http calls for the 
function StudyGuidesService($http) {
    var self = this;

    self.getAllStudyGuidesByUserId = function (userIdForStudyGuide) {
        return $http.get('/users/' + userIdForStudyGuide)
            .then(function (response) {
                return response;
            });
    };

    self.addNewStudyGuide = function (userIdForStudyGuide, newStudyGuide) {
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/', newStudyGuide);
    }

    self.deleteStudyGuideFromDatabase = function (userIdToDeleteFrom, studyGuideToDelete) {
        return $http.delete('users/' + userIdToDeleteFrom + '/studyGuide/' + studyGuideToDelete);
    }
}

angular
    .module('trivia-trainer')
    .service('StudyGuidesService', StudyGuidesService);
