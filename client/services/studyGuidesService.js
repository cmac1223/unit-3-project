StudyGuidesService.$inject = ['$http']

function StudyGuidesService($http) {
    var self = this;

    self.getAllStudyGuides = function () {
        console.log();
        return $http.get('/study_guide/:userId');
    }

    self.addNewStudyGuide = function (userIdForStudyGuide, newStudyGuide) {
        return $http.post('/users/'+userIdForStudyGuide+'/studyGuide/', newStudyGuide);
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
    .service('StudyGuidesService', StudyGuidesService);
