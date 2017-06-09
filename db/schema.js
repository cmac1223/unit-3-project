var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String    
})

UserSchema.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;

    if( !this.createdAt ) {
        this.createdAt = now;
    }
    next();
})


var UserModel = mongoose.model("User", UserSchema);
//var ExpenseModel = mongoose.model("Expense", ExpenseSchema);

module.exports = {
  User: UserModel,
  //Expense: ExpenseModel
};