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
    console.log('========', studyGuideId);


    // then grab the new Item that we created using the form
    var newStudyGuideTitle = request.body.title;

    // Find the User in the database we want to save the new Item for
    User.findById(userId)
        .exec(function (err, user) {
            console.log('*********', userId);
            console.log('===========', studyGuideId);


            var newStudyGuide = new StudyGuide(({ title: newStudyGuideTitle }))
            // add a new Item to the User's list of items, using the data
            // we grabbed off of the form
            user.studyGuide.push(newStudyGuide);

            // once we have added the new Item to the user's collection 
            // of items, we can save the user
            user.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }

                // once the user has been saved, we can redirect back 
                // to the User's show page, and we should see the new item
                //response.redirect('/restaurants/' + userId);
                response.send(newStudyGuide);
            })
        });
});

// app.use('/users/:userId/studyGuide/', studyGuide);




router.delete('/:studyGuideId', (request, response) => {

    var userId = request.params.userId;
    var studyGuideId = request.params.studyGuideId;

    User.findById(userId)
        .exec(function (err, user) {
            console.log('=====user====', user);

            var indexOfStudyGuide = '';

            var studyGuideSearchResult = user && user.studyGuide.find(function (sg, idx) {
                indexOfStudyGuide = idx;
                console.log(indexOfStudyGuide);
                return sg._id == studyGuideId;
            });
            user.studyGuide.splice(indexOfStudyGuide, 1);
            user.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
            });
        })
});








module.exports = router;
