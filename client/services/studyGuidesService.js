StudyGuidesService.$inject = ['$http']

function StudyGuidesService($http) {
    var self = this;

    self.getAllStudyGuides = function () {
        return $http.get('/studyGuides');
    }

    self.addNewStudyGuide = function (newStudyGuide) {
        return $http.post('/studyGuides', newStudyGuide);
    }

    self.getSingleStudyGuideById = function (studyGuideIdToShow) {
        return $http.get('studyGuides/' + studyGuideIdToShow)
    }

    self.updateSingleStudyGuide = function (studyGuideToUpdate) {
        return $http.patch('studyGuides/', studyGuideToUpdate);
    }

    self.deleteIdFromDatabase = function (studyGuideIdToDeleteFromDatabase) {
        return $http.delete('studyGuides/' + studyGuideIdToDeleteFromDatabase);
    }
}

angular
    .module('trivia-trainer')
    .service('StudyGuidesService', StudyGuidesService);
