StudyGuidesService.$inject = ['$http']

function StudyGuidesService($http) {
    var self = this;

    self.getAllStudyGuides = function () {
        return $http.get('/studyguides');
    }

    self.addNewStudyGuide = function (newStudyGuide) {
        return $http.post('/studyguides', newStudyGuide);
    }

    self.getSingleStudyGuideById = function (studyguideIdToShow) {
        return $http.get('studyguides/' + studyguideIdToShow)
    }

    self.updateSingleStudyGuide = function (studyguideToUpdate) {
        return $http.patch('studyguides/', studyguideToUpdate);
    }

    self.deleteIdFromDatabase = function (studyguideIdToDeleteFromDatabase) {
        return $http.delete('studyguides/' + studyguideIdToDeleteFromDatabase);
    }
}

angular
    .module('trivia-trainer')
    .service('StudyGuidesService', StudyGuidesService);
