const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema; 


const userSchema = new Schema({
	googleId: String
})

mongoose.model("users", userSchema); 

