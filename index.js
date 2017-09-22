const express = require("express"); 
const app = express(); 

console.log("express app is running"); 

app.get("/", (req, res) => {
	res.send({hi: "there"}); 
}); 

console.log("I cant wait"); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT); 