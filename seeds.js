var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unit-3-project');

var User = require("./models/user");

//use native promises
mongoose.Promise = global.Promise;

User.remove({}, function(error){
    console.log(error);
});

var triviaUser = new User({
    first_name: 'Christy',
    last_name: 'Bartholomew',
    username:  'christyBeastMode6969sofine',
    email: 'bartholomew_christy@yahoo.com'
    
});

triviaUser.save(function(error){
    if (error) {
        console.log(error);
        return;
    }

    console.log('saved Christy')
});
