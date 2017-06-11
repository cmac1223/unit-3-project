var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var Study_GuideSchema = new Schema({
    study_guide: [{
        title: String,
        questions: [{
            question: String,
            answer: String,
            topic: String,
            difficulty: String,
        }]
    }]

});

var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    study_guide: [Study_GuideSchema],

});

UserSchema.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
})


var UserModel = mongoose.model("User", UserSchema);
var Study_GuideModel = mongoose.model("Study_Guide", Study_GuideSchema);

module.exports = {
    User: UserModel,
    Study_Guide: Study_GuideModel
};