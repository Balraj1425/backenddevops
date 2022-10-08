const db = require('./mongodb').db;
const mongoose = require('./mongodb').mongoose;   // connection is already established @mongodb.js file.

//Creating the Schema for book
let userSchema = mongoose.Schema({
    Name: String,  
	Email: String,
    Comment: String
    
});


let userModel = mongoose.model('userDetails', userSchema);

module.exports = { userModel }