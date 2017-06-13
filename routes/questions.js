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
    var newQuestionDifficulty = request.body.difficulty

    // Find the Study Guide in the database we want to save the new Question for
    // I changed userId to studyGuideId in lines 23 and 25
    StudyGuide.findById(studyGuideId)
        .exec(function (err, user) {
            console.log('=====studyGuideId',studyGuideId);
            //console.log(studyGuide);
            // var userToSearch = (User.findById(userId));

            var newQuestion = new Question(({
                question: newQuestionQuestion,
                answer: newQuestionAnswer,
                topic: newQuestionTopic,
                difficulty: newQuestionDifficulty,
            }));

            newQuestion.save(function (err) {
                if (err) {
                    console.log(err);
                    // return;
                }
                var studyGuideSearchResult = user && user.studyGuide.find(function (sg, idx) {
                    return sg._id == studyGuideId;
                });
                //studyGuideSearchResult.questions.push(newQuestion);
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

    router.get('/', (request, response) => {

        // Find all of the Users from the database
        Question.findById({}).exec(function (error, users) {
            if (error) {
                console.log('Error retrieving users!');
                console.log('Error: ' + error);
                return;
            }

            // if there are no errors, send the users back as JSON
            response.send('=======',users);
        })

    })
});


module.exports = router;