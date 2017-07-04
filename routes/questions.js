var express = require('express');
// line 3 was needed in order to merge both studyGuide and users route
var router = express.Router({ mergeParams: true });
var StudyGuide = require('../models/studyGuide');
var User = require('../models/user');
var Question = require('../models/question');

// ADD A NEW ITEM
router.post('/', function (request, response) {

    // grab the user ID we want to create a new item for
    var userId = request.params.userId;
    var studyGuideId = request.params.studyGuideId;

    // then grab the new Item that we created using the form
    var newQuestionQuestion = request.body.question;
    var newQuestionAnswer = request.body.answer;
    var newQuestionTopic = request.body.topic;

    // Find the User in the database we want to save the new Item for
    User.findById(userId)
        .exec(function (err, user) {

            var newQuestion = new Question(({
                question: newQuestionQuestion,
                answer: newQuestionAnswer,
                topic: newQuestionTopic,
            }));
            //saves the new questions in the server
            newQuestion.save(function (err) {
                if (err) {
                    console.log(err);

                }
                var studyGuideSearchResult = user && user.studyGuide.find(function (sg, idx) {
                    return sg._id == studyGuideId;
                });
                studyGuideSearchResult.questions.push(newQuestion);
                studyGuideSearchResult.save(function (err) {
                    if (err) console.log(err);

                    response.json({
                        user: user,
                        usersStudyGuide: user.studyGuide,
                        studyGuide: studyGuideSearchResult,
                        studyGuideQuestions: studyGuideSearchResult.questions
                    });
                    user.save(function (err) {
                        if (err) console.log(err);
                    })
                });
            });
        });
})
//gets the users from the database
router.get('/', (request, response) => {

    var userId = request.params.userId;
    var studyGuideId = request.params.studyGuideId;

    User.findById(userId)
        .exec(function (err, user) {

            var studyGuideSearchResult = user && user.studyGuide.find(function (sg, idx) {
                return sg._id == studyGuideId;
            });
            response.json({

                studyGuideQuestions: studyGuideSearchResult
            });

        });
});

//study guide delete route
router.delete('/:questionId', (request, response) => {

    var userId = request.params.userId;
    var studyGuideId = request.params.studyGuideId;
    var questionId = request.params.questionId;

    User.findById(userId)
        .exec(function (err, user) {

            var indexOfStudyGuide = '';

            var studyGuideSearchResult = user && user.studyGuide.find(function (sg, idx) {
                var studyGuideToSearch = user.studyGuide[idx]
                var questionSearchResut = user && studyGuideToSearch.questions.find(function (question, index) {
                    indexOfQuestion = index;
                    return question._id == questionId;
                })
                user.studyGuide[idx].questions.splice(indexOfQuestion, 1);
                user.save(function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    response.send('successfully deleted');

                });
            })
        });
});

module.exports = router;