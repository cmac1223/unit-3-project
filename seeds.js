var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trivia-trainer');

var User = require("./models/user");
var Study = require("./models/studyGuide");

//use native promises
mongoose.Promise = global.Promise;

User.remove({}, function(error){
    console.log(error);
});

var StudyGuideSchema = new Study({
    studyGuide: [{
        title: '90s Misc',
        questions: [{
            question: 'What is the name of the show actor/rapper Will Smith starred in?',
            answer: 'Fresh Prince of Bel Air',
            topic: '90s Trivia',
        }]
    }]

});

var triviaUser = new User({
    first_name: 'Christy',
    last_name: 'Bartholomew',
    username:  'christyBeastMode6969sofine',
    email: 'bartholomew_christy@yahoo.com',
    Study_Guide: [StudyGuideSchema]
    
});

triviaUser.save(function(error){
    if (error) {
        console.log(error);
        return;
    }

    console.log('saved Christy')
});
