var express = require('express');
// line 3 was needed in order to merge both studyGuide and users route
var router = express.Router({mergeParams: true});
var StudyGuide = require('../models/studyGuide');
var User = require('../models/user');
var Question = require('../models/question');


// ADD A NEW ITEM
router.post('/', function (request, response) {

    // grab the user ID we want to create a new item for
    var studyGuideId = request.params.studyGuideId;

    // then grab the new Item that we created using the form
    var newQuestionQuestion = request.body.question;
    var newQuestionAnswer = request.body.answer;
    var newQuestionTopic = request.body.topic;
    var newQuestionDifficulty = request.body.difficulty


    // Find the User in the database we want to save the new Item for
    User.findById(userId)
        .exec(function (err, user) {
            console.log(userId);
            //console.log(studyGuide);
            console.log(StudyGuide.findById(study))


            var newQuestion = new Question(({ 
                question: newQuestionQuestion,
                answer: newQuestionAnswer,
                topic: newQuestionTopic,
                difficulty: newQuestionDifficulty, 
         }));
            // add a new Item to the User's list of items, using the data
            // we grabbed off of the form
            studyGuide.questions.push(newQuestion);

            // once we have added the new Item to the user's collection 
            // of items, we can save the user
            studyGuide.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }

                // once the user has been saved, we can redirect back 
                // to the User's show page, and we should see the new item
                //response.redirect('/restaurants/' + userId);
                response.send(newQuestion);
            })
        });
});





module.exports = router;