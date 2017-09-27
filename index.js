const express = require("express"); 
const mongoose = require("mongoose"); 
const cookieSession = require("cookie-session"); 
const passport = require("passport"); 
const keys = require("./config/keys"); 

require("./models/user.js"); 
require("./services/passport.js"); 
const app = express(); 

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI); 



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
app.listen(PORT, () =>{
	console.log(`The app is listenting on ${PORT}`)
}); 


