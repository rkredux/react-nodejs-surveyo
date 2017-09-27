//keys.js : FIGURE OUT WHAT SET OF CREDENTIALS TO RETURN

if(process.env.NODE_ENV === "production"){
	//we are in production- return prod set of keys
	module.exports = require("./prod.js"); 
} else{
	//we are in development- return the dev keys
	module.exports = require("./dev.js"); 
}