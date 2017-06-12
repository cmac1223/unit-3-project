var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var QuestionSchema = new Schema({
    question: String,
    answer: String,
    topic: String,
    difficulty: String,
})

var StudyGuideSchema = new Schema({
    title: String,
    questions: [QuestionSchema],
});



var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    studyGuide: [StudyGuideSchema],

});
//S_G
StudyGuideSchema.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
})


UserSchema.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
})

QuestionSchema.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
})


var UserModel = mongoose.model("User", UserSchema);
var StudyGuideModel = mongoose.model("StudyGuide", StudyGuideSchema);
var QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = {
    User: UserModel,
    StudyGuide: StudyGuideModel,
    Question: QuestionModel
};