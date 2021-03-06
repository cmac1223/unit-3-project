var express = require('express');
var router = express.Router();
var User = require('../models/user');
var studyGuide = require("../models/studyGuide")

router.get('/', (request, response) => {

  // Find all of the Users from the database
  User.find({}).exec(function (error, users) {
    if (error) {
      console.log('Error retrieving users!');
      console.log('Error: ' + error);
      return;
    }

    // if there are no errors, send the users back as JSON
    response.send(users);
  })

})

router.get('/:userId/', function (request, response) {

    const userIdToShow = request.params.userId;

    User.findById(userIdToShow, function (error, foundUser) {
        if (error) {
            console.log('Error finding User with ID of ' + userIdToShow);
            return;
        }

        response.send(foundUser);
    });

});

router.post('/', (request, response) => {

  // grab the new User info from the request
  let userFromRequest = request.body;

  // then build a new User model with the info
  // REMEMBER: the new Date will be created by the database
  let newUser = new User({
      first_name: userFromRequest.first_name,
      last_name: userFromRequest.last_name,
      username: userFromRequest.username,
      email: userFromRequest.email
  });

  // save the new User model to the database
  newUser.save(function (error, newUser) {
    if (error) {
      console.log(error);
      return;
    }
    // once the new user has been saved, return it to the client
    response.send(newUser);
  });
});

 //Edit user
 router.patch('/', function (request, response) {
   //console.log('Testing inside of patch function')

    let userToUpdate = request.body;

    User.findByIdAndUpdate(userToUpdate._id, userToUpdate, { new: true })
        .exec(function (error, updatedUser) {

            if (error) {
                console.log("Error while updating User with ID of " + userToUpdate.id);
                return;
            }
            response.send(200);
        });
});
//deletes the users route - finds by id and removes from database
  router.delete('/:userId', function (request, response) {
    const userIdToDelete = request.params.userId;
    User.findByIdAndRemove(userIdToDelete).exec(function (error) {
        if (error) {
            console.log("Error while deleting User with ID of " + userIdToDelete);
            return;
        }
        // once the user has been deleted, tell the server everything was successful
        response.sendStatus(200);
    })
});

module.exports = router;
