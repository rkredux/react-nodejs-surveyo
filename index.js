const express = require("express"); 
const mongoose = require("mongoose"); 
const cookieSession = require("cookie-session"); 
const passport = require("passport"); 
const keys = require("./config/keys"); 

require("./models/user.js"); 
require("./services/passport.js"); 
const app = express(); 

mongoose.Promise = global.Promise;
mongoose
	.connect(keys.mongoURI) 
	.then(() => console.log("The application is connected to the MongoDB"))
	.catch((err) => console.log("error in connecting to the MongoDB Database")); 



	// .then(() => console.log("connected to mongoDB"))
	// .catch((err) => console.log(err)); 



//middlewares 
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, 
		keys: [keys.cookieKey]
	})
); 

app.use(passport.initialize()); 
app.use(passport.session()); 

//app gets the routes
require("./routes/authRoutes")(app); 

//app goes lives and listens at the environment port
const PORT = process.env.PORT || 5000; 

app.listen(PORT, (err) =>{
	if(!err){
		console.log(`The app is listenting on ${PORT}`); 
	} else{
		console.log(err); 
	}
}); 


