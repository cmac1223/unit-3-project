let studyGuideTemplate = require(__dirname + '/studyGuide.html');
let studyGuideController = require(__dirname + '/studyGuide.controller.js');

let StudyGuideComponent = {
    template: studyGuideTemplate,
    controller: studyGuideController
}


angular.module('trivia-trainer').component('studyGuide', StudyGuideComponent);